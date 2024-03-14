import { cn, isEven } from '@/lib/utils';
import {
    TBrand,
    TMode,
    TColorPalette,
    TDecorationId,
    TImage,
} from '@/types/types';
import { ArrowRight } from 'lucide-react';
import { ReactNode, Ref, forwardRef } from 'react';
import { ASPECT_RATIOS_MAP } from './const';
import { SlideProgressBar } from './slideParts/SlideProgressBar';
import { SlideFotter } from './slideParts/SlideFotter';
import { SlideHeader } from './slideParts/SlideHeader';
import { SlideDecoration } from './slideParts/SlideDecoration';
import { SlideBackground } from './slideParts/SlideBackground';

export const aspectRatioClasses = {
    '4:5': 'aspect-[1080/1350]',
    '1:1': 'aspect-[1/1]',
};

export type AspectRatioKeys = keyof typeof aspectRatioClasses;

type ContentSlideLayout = {
    brand: TBrand;
    mode: TMode;
    isActive?: boolean;
    onClick: (arg: any) => void;
    className?: string;
    children?: ReactNode;
    currentSlide: number;
    numberOfSlides: number;
    decorationId?: TDecorationId;
    backgroundImage?: TImage;
    isCoverOrCTA?: boolean;
};

export const ContentSlideLayout = forwardRef<
    HTMLDivElement,
    ContentSlideLayout
>(
    (
        {
            brand,
            mode,
            children,
            isActive = false,
            onClick: setIsActive,
            className,
            currentSlide,
            numberOfSlides,
            decorationId,
            backgroundImage,
            isCoverOrCTA = false,
        },
        ref
    ) => {
        const colorPalette: TColorPalette = {
            primary: brand.colorPalette.primary,
            accent: brand.colorPalette.accent,
            background:
                mode === 'dark'
                    ? brand.colorPalette.font
                    : brand.colorPalette.background,
            font:
                mode === 'dark'
                    ? brand.colorPalette.background
                    : brand.colorPalette.font,
        };

        return (
            <div
                ref={ref}
                className={cn(
                    `slide border-0 border-border p-6 text-[0.75em]
    relative w-[32.5em] ${aspectRatioClasses[ASPECT_RATIOS_MAP['PORTRAIT'] as AspectRatioKeys]} m-auto overflow-hidden flex flex-col justify-between isolate
    `,
                    className,
                    isActive
                        ? ''
                        : 'hover:cursor-pointer hover:filter hover:brightness-75 transition-[filter]'
                )}
                style={{
                    backgroundColor: colorPalette.background,
                    color: colorPalette.font,
                }}
                onClick={() => setIsActive(true)}
            >
                {backgroundImage && (
                    <SlideBackground
                        imageUrl={backgroundImage.url}
                        opacity={backgroundImage.opacity}
                    />
                )}
                {!isCoverOrCTA && decorationId && (
                    <SlideDecoration
                        decorationid={decorationId}
                        primaryColor={colorPalette.font}
                        secondaryColor={colorPalette.background}
                        accentColor={colorPalette.accent}
                        tertiaryColor={colorPalette.primary}
                        even={isEven(currentSlide)}
                    />
                )}
                {!isCoverOrCTA && (
                    <SlideProgressBar
                        colorPalette={colorPalette}
                        currentSlide={currentSlide}
                        numberOfSlides={numberOfSlides}
                        mode={mode}
                    />
                )}
                {!isCoverOrCTA && (
                    <SlideHeader
                        text='Slide Title'
                        slideNumber={currentSlide}
                        className=''
                    />
                )}
                {/* <p className='z-50'>ACCENT: {colorPalette.accent}</p> */}
                {children}
                {!isCoverOrCTA && (
                    <SlideFotter
                        colorPalette={brand.colorPalette}
                        fontPalette={brand.fontPalette}
                        imageUrl={brand.imageUrl}
                        name={brand.name}
                        handle={brand.handle}
                        mode={mode}
                        swipeLabel={<ArrowRight className='h-10 w-10' />}
                        className='absolute bottom-0 left-0 w-full p-6'
                    />
                )}
            </div>
        );
    }
);

ContentSlideLayout.displayName = 'ContentSlideLayout';
