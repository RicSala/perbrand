'use client';

import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ReactNode, useContext, useEffect, useRef } from 'react';
import { TBrand, TSlide } from '@/types/types';
import { fontsMap, handwritten } from '@/config/fonts';
import { CarouselContext } from '../../carrousel/_components/ContextProvider';
import { SlideSettings } from '../../carrousel/_components/SlideSettings';
import { BetterSlide } from './BetterSlide';
import { TextOnlySlide } from './slideContents/TextOnlySlide';
// Whitelisting the classes:
type keys = keyof typeof translateClasses;
const translateClasses = {
    0: '-translate-x-[0%]',
    100: '-translate-x-[100%]',
    200: '-translate-x-[200%]',
    300: '-translate-x-[300%]',
    400: '-translate-x-[400%]',
    500: '-translate-x-[500%]',
    600: '-translate-x-[600%]',
    700: '-translate-x-[700%]',
    800: '-translate-x-[800%]',
    900: '-translate-x-[900%]',
    1000: '-translate-x-[1000%]',
    1100: '-translate-x-[1100%]',
    1200: '-translate-x-[1200%]',
    1300: '-translate-x-[1300%]',
    1400: '-translate-x-[1400%]',
    1500: '-translate-x-[1500%]',
} as const;

type CarouselWorkbenchProps = {
    brand: TBrand;
};

export const CarouselWorkbench = ({ brand }: CarouselWorkbenchProps) => {
    const { currentSlide, nextSlide, previousSlide, carousel } =
        useContext(CarouselContext);
    return (
        <div className='not-sidebar basis-0 grow-[999] min-w-[60%] border-0 border-blue-500 p-2 bg-slate-100/50 bg-[url("/images/decoration/patterns/grid.svg")] flex flex-col gap-2 relative'>
            <div className='flex justify-center gap-4 w-full items-center text-sm mt-2'>
                <ArrowLeft
                    size={20}
                    onClick={previousSlide}
                    className='bg-muted p-1 rounded-full hover:cursor-pointer'
                />
                Slide {currentSlide + 1} / {carousel.slides.length}
                <ArrowRight
                    onClick={nextSlide}
                    size={20}
                    className='bg-muted p-1 rounded-full hover:cursor-pointer'
                />
            </div>
            <div className='carousel flex overflow-hidden md:pl-8 lg:pl-56 2xl:pl-96'>
                {carousel.slides.map((slide, index) => (
                    <SlideWithSettings
                        slide={slide}
                        key={index}
                        isActive={currentSlide === index}
                        slideNumber={index}
                        numberOfSlides={carousel.slides.length}
                        brand={brand}
                        className={`${translateClasses[(100 * currentSlide) as keys]} transition-transform duration-300`}
                    >
                        <TextOnlySlide
                            text={slide.title.content}
                            subtitle={slide.tagline.content}
                        />
                    </SlideWithSettings>
                ))}
            </div>
        </div>
    );
};

type SlideWithSettingsProps = {
    className?: string;
    isActive: boolean;
    slide: TSlide;
    slideNumber: number;
    numberOfSlides: number;
    brand: TBrand;
    children?: ReactNode;
};

export const SlideWithSettings = ({
    className,
    isActive,
    slide,
    slideNumber,
    numberOfSlides,
    brand,
    children,
}: SlideWithSettingsProps) => {
    const {
        carousel: {
            author: { handle, name, pictureUrl },
            settings: {
                aspectRatio,
                alternateColors,
                backgroundPattern,
                colorPalette,
                fontPalette,
                showAuthor,
                showCounter,
                showSwipeLabel,
            },
        },
        arrayOfRefs,
        setCurrentSlideTo,
        currentSlide,
        addRef,
    } = useContext(CarouselContext);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('adding a ref');
        addRef(slideRef, slideNumber);
    }, [addRef, slideNumber]);

    // console.log('refs from SlideWithSettings', slidesRef);

    return (
        <div
            className={cn(
                `WithSettings shrink-0 isolate`,
                className || '',
                isActive ? 'z-10' : 'z-0'
            )}
        >
            <div
                // @ts-ignore
                className={`${fontsMap[fontPalette.primary].className} border border-dashed`}
            >
                <BetterSlide
                    isActive={isActive}
                    setIsActive={() => {
                        setCurrentSlideTo(slideNumber);
                    }}
                    ref={slideRef}
                    brand={brand}
                    mode='light'
                    currentSlide={currentSlide}
                    numberOfSlides={numberOfSlides}
                >
                    {children}
                </BetterSlide>
            </div>
            <SlideSettings isActive={isActive} slide={slide} />
        </div>
    );
};