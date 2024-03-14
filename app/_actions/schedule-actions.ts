import axios from 'axios';

// REVIEW: We need to modify this function to be able to post with image and videos as in the reference app
export const postOnLinkedIn = async (
    providerAccountId: String,
    content: String,
    accessToken: String | null
) => {
    try {
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
    } catch (error: any) {
        console.error('Error posting on LinkedIn:', error);
        return error;
    }
};
