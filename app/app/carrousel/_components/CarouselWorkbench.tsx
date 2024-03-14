'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ReactNode, useContext, useEffect, useRef } from 'react';
import {
    TBrand,
    TDecorationId,
    TFontName,
    TSlide,
    TSlideDesignNames,
} from '@/types/types';
import { CarouselContext } from './ContextProvider';
import { ContentSlideLayout } from './ContentSlideLayout';
import { TextOnlySlide } from './slideContents/TextOnlySlide';
import { cn } from '@/lib/utils';
import { SlideSettings } from './SlideSettings';
import { fontsMap } from '@/config/fonts';
import { get } from 'http';
import { ImageAndTextVertical } from './slideContents/ImageAndTextVertical';
import { ImageAndTextHorizontal } from './slideContents/ImageAndTextHorizontal';
import { designMap } from './SlideDesignSelector';
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

type CarouselWorkbenchProps = {};

export const CarouselWorkbench = ({}: CarouselWorkbenchProps) => {
    const {
        currentSlide,
        nextSlide,
        previousSlide,
        carousel,
        getCompleteBrand,
        setCurrentSlideTo,
    } = useContext(CarouselContext);

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
                        brand={getCompleteBrand() as TBrand}
                        key={index}
                        isActive={currentSlide === index}
                        slide={slide}
                        slideNumber={index}
                        numberOfSlides={carousel.slides.length}
                        decorationId={
                            carousel.settings.backgroundPattern as TDecorationId
                        }
                        className={`${translateClasses[(100 * currentSlide) as keys]} transition-transform duration-300`}
                    />
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
    decorationId?: TDecorationId;
};

export const SlideWithSettings = ({
    className,
    isActive,
    slide,
    slideNumber,
    numberOfSlides,
    brand,
    children,
    decorationId,
}: SlideWithSettingsProps) => {
    const { setCurrentSlideTo, currentSlide, addRef } =
        useContext(CarouselContext);
    const slideRef = useRef<HTMLDivElement>(null);
    console.log('slide design', slide.design);
    const DesignElement = slide.design
        ? designMap[slide.design as TSlideDesignNames]
        : TextOnlySlide;
    // console.log('slide here', slide);

    useEffect(() => {
        addRef(slideRef, slideNumber);
    }, [addRef, slideNumber]);

    return (
        <div
            className={cn(
                `WithSettings shrink-0 isolate`,
                className || '',
                isActive ? 'z-10' : 'z-0'
            )}
        >
            <div
                className={`${fontsMap[brand.fontPalette.primary as TFontName].className}`}
            >
                <ContentSlideLayout
                    brand={brand}
                    isActive={currentSlide === slideNumber}
                    mode='light'
                    onClick={() => {
                        setCurrentSlideTo(slideNumber);
                    }}
                    currentSlide={slideNumber}
                    numberOfSlides={numberOfSlides}
                    decorationId={decorationId}
                    backgroundImage={slide.backgroundImage!}
                    ref={slideRef}
                    isCoverOrCTA={
                        slide.design === 'CallToAction' ||
                        slide.design === 'Cover'
                    }
                >
                    <DesignElement
                        key={slideNumber}
                        image={slide.image?.url!}
                        tagline={slide.tagline?.content!}
                        brand={brand}
                        description={slide.paragraphs[0]?.content}
                        title={slide.title?.content!}
                        paragraphs={slide.paragraphs.map((p) => p.content)}
                        bigCharacter={slide.bigCharacter!}
                    />
                </ContentSlideLayout>
            </div>
            <SlideSettings isActive={isActive} slide={slide} />
        </div>
    );
};
