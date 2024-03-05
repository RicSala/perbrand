'use client';

import { deleteLinkedinPost } from '@/app/_actions/writter-actions';
import { ButtonWithTooltip } from '@/components/shared/ButtonWithTooltip';
import { CreateCarouselButton } from '@/components/shared/CreateCarouselButon';
import { Separator } from '@/components/ui/separator';
import { TLinkedinPost } from '@/types/types';
import { Edit, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type PostCardProps = {
    post: TLinkedinPost;
};
export function PostCard({ post }: PostCardProps) {
    const router = useRouter();
    return (
        // BOILER: Save in the boiler the way to do the stretch effect
        <div
            key={post.id}
            className='border border-border rounded-md flex flex-col [--outter-padding:1rem] p-[var(--outter-padding)] isolate'
        >
            <p className='line-clamp-4 mb-2 grow'>{post.content}</p>
            <Separator className='-ml-[var(--outter-padding)] -mr-[var(--outter-padding)] w-[calc(100%+calc(var(--outter-padding)*2))]' />
            <div className='flex gap-2 pt-[var(--outter-padding)] relative'>
                <ButtonWithTooltip
                    icon={<Trash2 />}
                    className='flex-1 rounded-full bg-muted text-primary/50 hover:bg-primary/10'
                    label='Borrar post'
                    onClick={async () => {
                        await deleteLinkedinPost(post.id);
                        toast.success('Post eliminado');
                        router.refresh();
                    }}
                />
                <ButtonWithTooltip
                    icon={<Edit />}
                    className='flex-1 rounded-full bg-muted text-primary/50 hover:bg-primary/10'
                    label='Editar post'
                    onClick={() => {
                        router.push(`/app/post-writter/${post.id}`);
                    }}
                />
                <CreateCarouselButton post={post} />
            </div>
        </div>
    );
}
