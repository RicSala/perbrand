'use client';

import { GalleryHorizontal } from 'lucide-react';
import { ButtonWithTooltip } from './ButtonWithTooltip';
import { toast } from 'sonner';
import { createLinkedinCarousel } from '@/app/_actions/writter-actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TLinkedinPost } from '@/types/types';
import { Progress } from '../ui/progress';
import useDeterminedProgressBar from '@/hooks/use-determined-progressbar';
import { cn } from '@/lib/utils';

type CrearCarouselButonProps = {
    post: TLinkedinPost;
    className?: string;
};
export function CreateCarouselButton({
    post,
    className,
}: CrearCarouselButonProps) {
    const router = useRouter();
    const [status, setStatus] = useState('idle');
    const [progressValue, showProgressBar] = useDeterminedProgressBar({
        isUploading: status === 'loading',
        interval: 2000,
        increment: 5,
    });

    return (
        <ButtonWithTooltip
            icon={<GalleryHorizontal />}
            disabled={status === 'loading'}
            className={cn(
                `flex-1 rounded-full bg-muted overflow-hidden text-primary/50 hover:bg-primary/10`,
                className
            )}
            label='Crear carrusel'
            onClick={async () => {
                toast.success('Creando carrusel. Espera unos segundos...');
                setStatus('loading');
                const newCarousel = await createLinkedinCarousel(post);
                setStatus('idle');
                router.push(`/app/carrousel/${newCarousel.id}`);
            }}
        >
            {status !== 'idle' && (
                <div className='absolute h-full w-full top-0 left-0 bg-background/50 z-10'>
                    <div className='absolute w-full h-full flex flex-col justify-center items-center px-4'>
                        <p className='text-primary'>Creando carrusel...</p>
                        <Progress
                            value={progressValue as number}
                            className='h-1 w-full  bg-zinc-200'
                            color={
                                progressValue === 100
                                    ? 'bg-success'
                                    : 'bg-secondary'
                            }
                        />
                    </div>
                </div>
            )}
        </ButtonWithTooltip>
    );
}
