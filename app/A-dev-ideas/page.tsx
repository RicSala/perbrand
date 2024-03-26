// REVIEW: For support, we can use intercom https://www.intercom.com/early-stage, or tawk to (free) or zendesk (startup) or drift

import { Heading } from '@/components/shared/Heading';
import { Separator } from '@/components/ui/separator';
import { IdeasPageClient } from './IdeasPageClient';
import Editor from '@/components/editor/editor';
import { SocialLogin } from '@/components/auth/SocialLogin';

export default function IdeasPage() {
    return (
        <div>
            <Heading
                className='mt-6'
                title='Ideas para post'
                subtitle='Genera ideas para tus post'
            />
            <Separator />
            <IdeasPageClient />
            <Editor className='w-1/2' />
            <Editor className='w-1/2' />
            <Editor className='w-1/2' />
            <SocialLogin />
        </div>
    );
}
