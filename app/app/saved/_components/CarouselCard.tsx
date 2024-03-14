'use client';

import { TCarousel } from '@/types/types';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ButtonWithTooltip } from '@/components/shared/ButtonWithTooltip';
import { Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';
import {
    deleteCarousel,
    deleteLinkedinPost,
} from '@/app/_actions/writter-actions';

type CarouselCardProps = { carousel: TCarousel };
export function CarouselCard({ carousel }: CarouselCardProps) {
    const data = useSession();
    const router = useRouter();

    return (
        <div className='border border-border flex flex-col [--outter-padding:1rem] p-[var(--outter-padding)] rounded-md shadow-md cursor-pointer bg-white hover:shadow-lg transition-all duration-300 ease-in-out'>
            <p className='line-clamp-4 mb-2 grow'>{carousel.author.name}</p>
            <Separator className='-ml-[var(--outter-padding)] -mr-[var(--outter-padding)] w-[calc(100%+calc(var(--outter-padding)*2))]' />

            <div
                className=''
                onClick={() => router.push(`/app/carrousel/${carousel.id}`)}
            >
                {carousel.id}
            </div>
            <CarouselActions carousel={carousel} />
        </div>
    );
}

const CarouselActions = ({ carousel }: CarouselCardProps) => {
    const router = useRouter();

    return (
        <div className='flex gap-2 pt-[var(--outter-padding)] relative'>
            <ButtonWithTooltip
                icon={<Trash2 />}
                className='flex-1 rounded-full bg-muted text-primary/50
                hover:bg-primary/10'
                label='Borrar post'
                onClick={async () => {
                    await deleteCarousel(carousel.id);
                    toast.success('Post eliminado');
                    router.refresh();
                }}
            />
            <ButtonWithTooltip
                icon={<Edit />}
                className='flex-1 rounded-full bg-muted text-primary/50
                hover:bg-primary/10'
                label='Editar carrusel'
                onClick={() => router.push(`/app/carrousel/${carousel.id}`)}
            />
        </div>
    );
};
