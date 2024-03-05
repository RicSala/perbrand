'use client';

import { createIdea, deleteIdea } from '@/app/_actions/ideas-actions';
import { ButtonWithTooltip } from '@/components/shared/ButtonWithTooltip';
import { ThumbsFeedback } from '@/components/shared/ThumbsFeedback';
import { Feather, Save, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type IdeaCardProps = {
    ideaDescription: string;
    ideaId?: string;
    isSaveButtonShown?: boolean;
    isDeletebuttonShown?: boolean;
};

export const PostIdeaCard = ({
    ideaDescription,
    ideaId,
    isSaveButtonShown = false,
    isDeletebuttonShown = false,
}: IdeaCardProps) => {
    const router = useRouter();
    const { data } = useSession();

    return (
        <div className='border rounded-lg p-4 shadow-sm flex flex-col gap-2'>
            <ThumbsFeedback className='-mt-2' component='IDEA-GENERATOR' />
            <p>{ideaDescription}</p>
            <div className='flex gap-4 mt-auto'>
                <ButtonWithTooltip
                    icon={<Feather />}
                    className='flex-1 rounded-full bg-muted text-primary/50
                    hover:bg-primary/10'
                    label='Crear Post'
                    onClick={async () => {
                        toast.success('Creando.post..');
                        // setStatus('loading');
                        // const newCarousel = await createLinkedinCarousel(post);
                        // setStatus('idle');
                        router.push(
                            `/app/post-writter?description=${encodeURIComponent(ideaDescription)}`
                        );
                        // console.log(newCarousel);
                    }}
                />
                {isSaveButtonShown && (
                    <ButtonWithTooltip
                        icon={<Save />}
                        className='flex-1 rounded-full bg-muted text-primary/50
                    hover:bg-primary/10'
                        label='Guardar Idea'
                        onClick={async () => {
                            const dbIdea = await createIdea(
                                ideaDescription,
                                data?.user.id as string
                            );
                            toast.success('Idea guardada');
                        }}
                    />
                )}
                {isDeletebuttonShown && (
                    <ButtonWithTooltip
                        icon={<Trash2 />}
                        className='flex-1 rounded-full bg-muted text-primary/50
                    hover:bg-primary/10'
                        label='Eliminar Idea'
                        onClick={async () => {
                            if (!ideaId) return;
                            const dbIdea = await deleteIdea(ideaId);
                            router.refresh();
                            toast.success('Idea eliminada');
                        }}
                    />
                )}
            </div>
        </div>
    );
};
