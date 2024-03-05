'use client';

import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { GalleryHorizontal, Save } from 'lucide-react';
import { useContext, useState } from 'react';
import { PostWritterContext } from './PostWritterProvider';
import { useSession } from 'next-auth/react';
import { createLinkedinPost } from '@/app/_actions/writter-actions';
import { ButtonWithTooltip } from '@/components/shared/ButtonWithTooltip';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';

type GeneratedPostProps = {
    className?: string;
    isEditable?: boolean;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export const PostWritterResult = ({
    className,
    isEditable = false,
}: GeneratedPostProps) => {
    const { data } = useSession();

    const [status, setStatus] = useState<Status>('idle');
    const { post, setPost } = useContext(PostWritterContext);
    const [isEditableOverride, setIsEditableOverride] = useState(false);

    if (status === 'loading')
        return (
            <div className='flex-1 h-full w-full'>
                <Skeleton className='h-full w-full' />
            </div>
        );
    return (
        <div className={cn(``, className)}>
            {/* <EmojiPickerClient /> */}
            <Label>Post generado</Label>

            <div className='border border-muted p-2 space-y-2'>
                <div className='relative'>
                    <Textarea
                        rows={20}
                        className='border-none resize-none'
                        value={post.content}
                        readOnly={!isEditable && !isEditableOverride}
                        onChange={(e) => {
                            setPost({ ...post, content: e.target.value });
                        }}
                    />
                    <div className='absolute right-2 bottom-2 flex items-center gap-2 text-xs text-primary/70'>
                        <Label>Permitir edición</Label>
                        <Switch
                            checked={isEditableOverride}
                            onCheckedChange={setIsEditableOverride}
                        />
                    </div>
                </div>

                <div className='flex gap-2'>
                    <ButtonWithTooltip
                        icon={Save}
                        label='Guardar post'
                        onClick={async () => {
                            await createLinkedinPost(post.content, post.id);
                            toast('Post guardado');
                        }}
                    />
                    {/* <ButtonWithTooltip
                        className={
                            isEditable || isEditableOverride
                                ? 'bg-green-300'
                                : 'bg-red-300'
                        }
                        icon={Edit}
                        label='Editar post'
                    /> */}
                    <ButtonWithTooltip
                        icon={GalleryHorizontal}
                        label='Crear carrusel'
                    />
                </div>
            </div>
        </div>
    );
};
