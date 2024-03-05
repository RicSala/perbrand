import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/shared/Heading';
import { db } from '@/lib/prisma';
import { PostCard } from './_components/PostCard';
import { SavedPageClient } from './_components/SavedPageClient';
import { getSession } from 'next-auth/react';

const findPostByUserId = async () => {
    return db.linkedinPost.findMany({
        where: {
            author: {
                is: {
                    name: 'Ricardo Sala',
                },
            },
        },
    });
};
const findCarruselsByUserId = async () => {
    return db.carousel.findMany({
        where: {
            author: {
                is: {
                    name: 'Ricardo Sala',
                },
            },
        },
    });
};

const findIdeasByUserId = async () => {
    return db.idea.findMany({
        where: {
            author: {
                name: 'Ricardo',
            },
        },
    });
};

export default async function IdeasPage() {
    const userPosts = await findPostByUserId();
    const userCarrusels = await findCarruselsByUserId();
    const userIdeas = await findIdeasByUserId();

    return (
        <div>
            <Heading
                className='mt-6'
                title='Post y Carrusels guardados'
                subtitle='Aquí encontrarás tus post y carrusels guardados.'
            />
            <Separator />

            <SavedPageClient
                posts={userPosts}
                carrusels={userCarrusels}
                ideas={userIdeas}
            />
        </div>
    );
}
