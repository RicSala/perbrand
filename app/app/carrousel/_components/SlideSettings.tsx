import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { SlideType } from '../page';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { useContext } from 'react';
import { CarouselContext } from './ContextProvider';
import {
    ArrowLeft,
    ArrowLeftIcon,
    ArrowRight,
    ArrowRightIcon,
    Delete,
    MoveRight,
    MoveRightIcon,
    Plus,
    Trash,
    Trash2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type SlideSettingsProps = {
    isActive?: boolean;
    className?: string;
    slide: SlideType;
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
    } = useContext(CarouselContext);

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
                    checked={slide.hasTitle}
                    onCheckedChange={toggleSlideHasTitle}
                />
                <Label htmlFor='title'>Título</Label>
                <Input
                    id='title'
                    value={slide.title!}
                    onChange={(e) => editTitle(e.target.value)}
                />
            </div>
            <div>
                <Switch
                    id='tagline'
                    checked={slide.hasTagline}
                    onCheckedChange={toggleSlideHasTagline}
                />
                <Label htmlFor='tagline'>Tagline</Label>
                <Input
                    id='tagline'
                    value={slide.tagline!}
                    onChange={(e) => editTagline(e.target.value)}
                />
            </div>
            <div>
                <Label htmlFor='paragraph'>Párrafo 1</Label>
                <Switch
                    id='tagline'
                    checked={slide.hasParagraph}
                    onCheckedChange={toggleSlideHasParagraph}
                />
                <Textarea
                    id='paragraph'
                    className='resize-none'
                    value={slide.description!}
                    onChange={(e) => editDescription(e.target.value)}
                />
            </div>
        </div>
    );
}

export const SlideActions = () => {
    const {
        addSlideToRight,
        moveCurrentSlideToLeft,
        moveCurrentSlideToRight,
        deleteCurrentSlide,
    } = useContext(CarouselContext);

    return (
        <div className='flex gap-2 text-xs w-full'>
            <Button
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
