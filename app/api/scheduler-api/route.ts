import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/prisma';
import { postOnLinkedIn } from '../../_actions/schedule-actions';
import { TLinkedinPost, TScheduledPost } from '@/types/types';

type NewTScheduledPost = TScheduledPost & {
    linkedinPost: TLinkedinPost;
};

// REVIEW: What about posts that should have been posted but were not? We need to handle that case as well, because it WILL happen!

// This endpoint will check the scheduled posts, which will be called every time from cron job to find if there is any post to be posted on linkedin.
export async function GET(req: NextRequest) {
    try {
        const startOfDay = new Date();
        startOfDay.setUTCHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setUTCHours(23, 59, 59, 999);

        // finding the posts from the start of the day till end of day that are not published
        let scheduledPosts = (await db.scheduledPost.findMany({
            where: {
                date: {
                    gte: startOfDay,
                    lt: endOfDay,
                },
            },
            include: {
                linkedinPost: {
                    where: {
                        published: false,
                    },
                },
            },
        })) as NewTScheduledPost[];

        // posting the each post on linkedin from the scheduledPosts (post that are supposed to be posted today as per their time)
        scheduledPosts?.forEach(async (post: NewTScheduledPost) => {
            const currentDate = new Date();
            const userAccount = await db.account.findFirst({
                where: {
                    userId: post?.userId,
                },
            });

            if (Number(post?.time?.split(':')?.length) < 2) {
                return NextResponse.json(
                    { error: 'Time not found' },
                    { status: 500 }
                );
            }

            const hours = Number(post?.time?.split(':')[0]);
            const minutes = Number(post?.time?.split(':')[1]);

            if (
                currentDate?.getDate() === post?.date?.getDate() &&
                currentDate?.getHours() === hours &&
                currentDate?.getMinutes() === minutes
            ) {
                const posted: { data: { id: string } } = await postOnLinkedIn(
                    userAccount?.providerAccountId,
                    post?.linkedinPost?.content,
                    userAccount?.access_token
                );

                if (posted?.data?.id && post?.linkedinPostId !== null) {
                    await db.linkedinPost.update({
                        where: {
                            id: post?.linkedinPostId,
                        },
                        data: {
                            published: true,
                            publishedAt: new Date(),
                        },
                    });

                    // REVIEW: ew! Sending a response from a forEach loop!😬 You will end up sending way too many responses!
                    return NextResponse.json(
                        { data: 'Success' },
                        { status: 200 }
                    );
                }
                return NextResponse.json({ data: 'Error' }, { status: 400 });
            }
        });
        return NextResponse.json({ message: 'Scheduled' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}
