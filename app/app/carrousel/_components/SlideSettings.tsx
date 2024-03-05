'use client';

import { Switch } from '@/components/ui/switch';
import { Label } from '@radix-ui/react-label';
import { cn } from '@/lib/utils';
import { useContext, useState } from 'react';
import { CarouselContext } from './ContextProvider';
import {
    ArrowLeft,
    ArrowLeftIcon,
    ArrowRightIcon,
    Plus,
    Trash2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { TSlide, TStatus } from '@/types/types';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { getPexelImages } from '@/app/_actions/writter-actions';
import Image from 'next/image';
import { toast } from 'sonner';

type SlideSettingsProps = {
    isActive?: boolean;
    className?: string;
    slide: TSlide;
};
export function SlideSettings({
    isActive = false,
    className,
    slide,
    ...slideProps
}: SlideSettingsProps) {
    const {
        editTitle,
        editTagline,
        editDescription,
        nextSlide,
        previousSlide,
        toggleSlideHasTitle,
        toggleSlideHasParagraph,
        toggleSlideHasTagline,
        carousel,
        toggleShowSwipeLabel,
        setBackgroundImage,
    } = useContext(CarouselContext);
    const [query, setQuery] = useState<string>('');
    const [photoUrls, setPhotoUrls] = useState<string[]>([]);
    const [status, setStatus] = useState<TStatus>('idle');

    const onSearch = async () => {
        if (query === '') return toast('Debes ingresar un término de búsqueda');
        const pictures = await getPexelImages(query);
        console.log('pictures', pictures);
        setPhotoUrls(pictures);
    };

    if (!isActive) return null;
    return (
        <div
            className={cn(
                `flex flex-col p-4 gap-4 border bg-background rounded-md rounded-tr-none rounded-tl-none relative group`,
                className
            )}
        >
            <SlideActions />
            <Separator />
            <Button
                variant={'ghost'}
                className='absolute top-1/2 right-0 translate-x-[100%] opacity-0 group-hover:opacity-100 transition-opacity'
                onClick={nextSlide}
            >
                <ArrowRightIcon />
            </Button>
            <Button
                variant={'ghost'}
                className='absolute top-1/2 left-0 -translate-x-[100%] opacity-0 group-hover:opacity-100 transition-opacity'
                onClick={previousSlide}
            >
                <ArrowLeftIcon />
            </Button>
            <h2>Slide portada</h2>
            <div>
                <Switch
                    id='title'
                    checked={slide.title.isShown}
                    onCheckedChange={toggleSlideHasTitle}
                />
                <Label htmlFor='title'>Título</Label>
            </div>
            <div>
                <Switch
                    id='tagline'
                    checked={slide.tagline.isShown}
                    onCheckedChange={toggleSlideHasTagline}
                />
                <Label htmlFor='tagline'>Tagline</Label>
            </div>
            <div>
                <Label htmlFor='paragraph'>Párrafo 1</Label>
                <Switch
                    id='tagline'
                    checked={slide.paragraphs[0].isShown}
                    onCheckedChange={toggleSlideHasParagraph}
                />
            </div>
            <div>
                <Label htmlFor='paragraph'>Etiqueta desliza</Label>
                <Switch
                    id='tagline'
                    checked={carousel.settings.showSwipeLabel}
                    onCheckedChange={toggleShowSwipeLabel}
                />
            </div>
            <form
                className='overflow-x-auto flex flex-col gap-2'
                action={onSearch}
            >
                <Label htmlFor='paragraph'>Buscar imagen</Label>
                <div className='flex gap-2'>
                    <Input
                        className='inline-block'
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value);
                        }}
                        placeholder='Ej. "Coches" · Imágenes por pexels.com'
                    />
                    <Button disabled={status === 'loading'}>
                        {status === 'loading' ? 'Buscando...' : 'Buscar'}
                    </Button>
                </div>
                <div className='flex gap-2 items-center overflow-x-auto max-w-[22rem]'>
                    {photoUrls.map((url) => (
                        <div
                            key={url}
                            className='relative h-24 aspect-square rounded-md overflow-hidden shrink-0'
                        >
                            <Image
                                src={url}
                                className='object-cover cursor-pointer'
                                alt=''
                                fill
                                onClick={() => {
                                    setBackgroundImage(url);
                                }}
                            />
                        </div>
                    ))}
                </div>
            </form>

            <Slider
                defaultValue={[slide.backgroundImage?.opacity!]}
                value={[slide.backgroundImage?.opacity!]}
                onValueChange={(value) => {
                    setBackgroundImage(undefined, { opacity: value[0] });
                }}
                min={0}
                max={1}
                step={0.01}
            />
        </div>
    );
}

export const SlideActions = () => {
    const {
        addSlideToRight,
        moveCurrentSlideToLeft,
        moveCurrentSlideToRight,
        deleteCurrentSlide,
        currentSlide,
        carousel,
    } = useContext(CarouselContext);

    const isLastSlide = currentSlide === carousel.slides.length - 1;
    const isFirstSlide = currentSlide === 0;

    return (
        <div className='flex gap-2 text-xs w-full'>
            <Button
                disabled={isFirstSlide}
                variant={'secondary'}
                size={'sm'}
                className='mr-auto'
                onClick={moveCurrentSlideToLeft}
            >
                <ArrowLeft className='h-4 w-4' />
                Mover
            </Button>
            <Button
                variant={'secondary'}
                size={'sm'}
                className='flex gap-1'
                onClick={deleteCurrentSlide}
            >
                <Trash2 className='h-4 w-4' />
            </Button>
            <Button
                variant={'secondary'}
                size={'sm'}
                className='mr-auto'
                onClick={addSlideToRight}
            >
                <Plus className='h-4 w-4' />
            </Button>
            <Button
                disabled={isLastSlide}
                variant={'secondary'}
                size={'sm'}
                className=''
                onClick={moveCurrentSlideToRight}
            >
                Mover
                <ArrowRightIcon />
            </Button>
        </div>
    );
};
