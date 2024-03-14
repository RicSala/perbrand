import { cn } from '@/lib/utils';
import { TBrand, TMode } from '@/types/types';
import { ASPECT_RATIOS_MAP } from '../const';
import { SlideProfileCard } from '../slideParts/SlideProfileCard';
import { SlideProgressBar } from '../slideParts/SlideProgressBar';
import { SlideGradientBlob } from '../slideParts/SlideGradientBlob';
import { aspectRatioClasses, AspectRatioKeys } from '../ContentSlideLayout';
import ContentEditable from 'react-contenteditable';
import { useContext, useEffect, useRef } from 'react';
import { CarouselContext } from '../ContextProvider';

type CoverSlideProps = {
    brand: TBrand;
    title: string;
    tagline: string;
    className?: string;
    mode?: TMode;
};

export const CoverSlide = ({
    brand,
    title,
    tagline,
    className = '',
    mode = 'light',
}: CoverSlideProps) => {
    const titleRef = useRef('');
    const taglineRef = useRef('');

    const { editTitle, editDescription, editTagline } =
        useContext(CarouselContext);

    useEffect(() => {
        if (title) titleRef.current = title;
        if (tagline) taglineRef.current = tagline;
    }, [tagline, title]);

    return (
        <>
            <div
                className={cn(
                    `flex flex-col gap-4 h-full items-center text-center justify-center z-10`,
                    className
                )}
            >
                <div
                    className='absolute rotate-45 -top-[30%] w-[140%] h-[60%] rounded-full bg-primary -z-10 blur-xl'
                    style={{
                        backgroundColor: brand.colorPalette.primary,
                        opacity: 0.4,
                    }}
                />
                <div
                    className='absolute -top-10 -left-10 w-[12rem] h-[17rem] rounded-full bg-primary -z-10 blur-3xl'
                    style={{
                        backgroundColor: brand.colorPalette.accent,
                        opacity: 0.3,
                    }}
                />

                <ContentEditable
                    onChange={(event) => {
                        titleRef.current = event.target.value;
                        editTitle(event.target.value);
                    }}
                    html={titleRef.current}
                    className='text-[2em]
                    focus:outline-none focus:ring-0 focus:border-transparent
                    '
                    // style={{
                    //     display: hasParagraphs ? 'block' : 'none',
                    // }}
                    style={{
                        fontSize: '1.8rem',
                        lineHeight: 1.1,
                    }}
                />
                <ContentEditable
                    onChange={(event) => {
                        taglineRef.current = event.target.value;
                        editTagline(event.target.value);
                    }}
                    html={taglineRef.current}
                    className='text-[2em]
                    focus:outline-none focus:ring-0 focus:border-transparent
                    '
                    // style={{
                    //     display: hasParagraphs ? 'block' : 'none',
                    // }}
                    style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.1,
                    }}
                />
                <SlideProfileCard
                    colorPalette={brand.colorPalette}
                    fontPalette={brand.fontPalette}
                    imageUrl={brand.imageUrl}
                    name={brand.name}
                    handle={brand.handle}
                    orientation='vertical'
                    mode='dark'
                />
            </div>
        </>
    );
};
