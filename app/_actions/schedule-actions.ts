'use server';

import { db } from '@/lib/prisma';
import {
    DayOfTheWeekNumber,
    TDaysOfTheWeek,
    TLinkedinPost,
} from '@/types/types';
import axios from 'axios';
import { revalidatePath } from 'next/cache';

// REVIEW: We need to modify this function to be able to post with image and videos as in the reference app

/*
share on linkedin from api :- https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin
linkedin end points : - https://www.linkedin.com/developers/apps/218468101/products/share-on-linkedin/endpoints
 */

type IData = {
    id: string;
};
type ResData = {
    data: IData;
};

type TUploadRegisterResponse = {
    data: {
        value: {
            uploadMechanism: {
                'com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest': {
                    uploadUrl: string;
                    headers: any;
                };
            };
            mediaArtifact: string;
            asset: string;
            assetRealTimeTopic: string;
        };
    };
};

export const registerUploadImageToLinkedin = async (
    providerAccountId: String | undefined,
    accessToken: String | null | undefined
) => {
    const registerUploadUrl =
        'https://api.linkedin.com/v2/assets?action=registerUpload';

    const registerUploadBody = {
        registerUploadRequest: {
            recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
            owner: `urn:li:person:${providerAccountId}`,
            serviceRelationships: [
                {
                    relationshipType: 'OWNER',
                    identifier: 'urn:li:userGeneratedContent',
                },
            ],
        },
    };

    const config = {
        method: 'post',
        url: registerUploadUrl,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Cookie: 'lidc="b=VB85:s=V:r=V:a=V:p=V:g=5482:u=10:x=1:i=1709636502:t=1709720825:v=2:sig=AQEdKe_Tph37ThQKHeYqJGIgReeL6-NO"; bcookie="v=2&bc3682ee-a45b-45f5-8b9a-7d73f17ea686"',
            'X-Restli-Protocol-Version': '2.0.0',
        },
        data: JSON.stringify(registerUploadBody),
    };

    const res: TUploadRegisterResponse = await axios(config);

    return res.data.value.uploadMechanism[
        'com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'
    ].uploadUrl;
};

export const uploadImageToLinkedin = async (
    uploadUrl: string,
    image: string
) => {
    return;
};

export const postOnLinkedIn = async (
    providerAccountId: String | undefined,
    content: String | null | undefined,
    accessToken: String | null | undefined
): Promise<ResData> => {
    try {
        console.log('Posting on LinkedIn postonlinkedin function');
        const body = {
            author: `urn:li:person:${providerAccountId}`,
            lifecycleState: 'PUBLISHED',
            specificContent: {
                'com.linkedin.ugc.ShareContent': {
                    shareCommentary: {
                        text: content,
                    },
                    shareMediaCategory: 'NONE',
                },
            },
            visibility: {
                'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
            },
        };

        const config = {
            method: 'post',
            url: process.env.LINKEDIN_POST_URL,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                Cookie: 'lidc="b=VB85:s=V:r=V:a=V:p=V:g=5482:u=10:x=1:i=1709636502:t=1709720825:v=2:sig=AQEdKe_Tph37ThQKHeYqJGIgReeL6-NO"; bcookie="v=2&bc3682ee-a45b-45f5-8b9a-7d73f17ea686"',
                'X-Restli-Protocol-Version': '2.0.0',
            },
            data: JSON.stringify(body),
        };

        const response = await axios(config);

        console.log(
            'Post successfully posted on LinkedIn:',
            response?.data?.id
        );
        return response;
    } catch (error) {
        console.error('Error posting on LinkedIn:', error);
        throw error;
    }
};

export const toggleSlot = async (
    time: string,
    dayOfTheWeek: DayOfTheWeekNumber,
    settingsId: string
) => {
    const previousSettings = await db.settings.findUnique({
        where: {
            id: settingsId,
        },
    });

    const previousSchedule = previousSettings?.schedule || [];

    // Find if the slot exists
    const slot = previousSchedule.find(
        (slot) => slot.time === time && slot.dayOfTheWeek === dayOfTheWeek
    );

    if (!slot) {
        // If the slot does not exist, add it
        previousSchedule.push({
            dayOfTheWeek,
            time,
        });
    } else {
        // If the slot exists, delete it
        const index = previousSchedule.indexOf(slot);
        previousSchedule.splice(index, 1);
    }

    const updatedSettings = await db.settings.update({
        where: {
            id: settingsId,
        },
        data: {
            schedule: {
                set: previousSchedule,
            },
        },
    });

    revalidatePath('/app/schedule');
    // validateData();

    return updatedSettings;
};

/**
 * Add a time to the schedule (when including a time, Monday is always included)
 */
export const addTime = async (time: string, settingsId: string) => {
    const previousSettings = await db.settings.findUnique({
        where: {
            id: settingsId,
        },
    });

    const newSchedule = previousSettings?.schedule || [];

    const timeExist = newSchedule.find((slot) => slot.time === time);

    // If that time is already in the schedule, return
    if (timeExist) {
        return;
    } else {
        // Otherwise, add the time to the schedule on Monday
        newSchedule.push({
            dayOfTheWeek: 1,
            time,
        });
    }

    const updatedSettings = await db.settings.update({
        where: {
            id: settingsId,
        },
        data: {
            schedule: {
                set: newSchedule,
            },
        },
    });

    revalidatePath('/app/schedule');
    // validateData();

    return updatedSettings;
};

export const schedulePost = async (
    postId: string,
    userId: string,
    date: Date,
    time: string
) => {
    const newSchedule = db.scheduledPost.create({
        data: {
            linkedinPostId: postId,
            userId,
            date,
            time,
        },
    });
    revalidatePath('/app/schedule');

    return newSchedule;
};

export const unschedulePost = async (postId: string) => {
    console.log('Deleted schedule:', postId);
    const deletedSchedule = await db.scheduledPost.deleteMany({
        where: {
            linkedinPostId: postId,
        },
    });

    revalidatePath('/app/schedule');

    return deletedSchedule;
};

export const deletePost = async (postId: string) => {
    const deletedPost = await db.linkedinPost.delete({
        where: {
            id: postId,
        },
    });

    revalidatePath('/app/schedule');

    return deletedPost;
};
