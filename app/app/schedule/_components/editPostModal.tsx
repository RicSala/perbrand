import React, { useState } from 'react';
import { EmojiPickerClient } from '@/components/shared/EmojiPickerClient';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { Switch } from '@/components/ui/switch';
import { ButtonWithTooltip } from '@/components/shared/ButtonWithTooltip';
import { cn } from '@/lib/utils';
import { Save } from 'lucide-react';

type EditPostProps = {
    className?: string;
    initialPost?: any;
};

const EditPostModal = ({ className, initialPost }: EditPostProps) => {
    const [isEditableOverride, setIsEditableOverride] = useState(false);
    console.log(initialPost);
    return (
        <div>
            <div className={cn(``, className)}>
                <EmojiPickerClient />
                <Label>Post generado</Label>
                <div className='border border-muted p-2 space-y-2'>
                    <div className='relative'>
                        <Textarea
                            rows={20}
                            className='border-none resize-none'
                            value={initialPost.content}
                            readOnly={true}
                            onChange={(e) => {
                                console.log(e.target.value);
                                // setPost({ ...post, content: e.target.value })
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
                            // @ts-ignore
                            icon={Save}
                            label='Guardar post'
                            // onClick={async () => {
                            //   await createLinkedinPost(post.content, post.id)
                            //   toast('Post guardado')
                            //   if (height) {
                            //     setEditDetailsModal(false)
                            //   }
                            // }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPostModal;
