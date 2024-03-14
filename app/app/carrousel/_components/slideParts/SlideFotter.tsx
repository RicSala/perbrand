import { TColorPalette, TFontPalette, TMode } from '@/types/types';
import Image from 'next/image';
import { ReactNode } from 'react';
import { NameAndHandle } from './SlideProfileCard';
import { cn } from '@/lib/utils';

type SlideFotterProps = {
    imageUrl: string;
    colorPalette: TColorPalette;
    fontPalette: TFontPalette;
    name: string;
    handle: string;
    mode: TMode;
    swipeLabel: ReactNode;
    className?: string;
};
export function SlideFotter({
    imageUrl,
    colorPalette,
    className,
    fontPalette,
    name,
    handle,
    mode,
    swipeLabel = null,
}: SlideFotterProps) {
    const fontColor =
        mode === 'light' ? colorPalette.font : colorPalette.background;

    return (
        <div
            className={cn(
                `flex justify-between items-center text-xs`,
                className
            )}
            style={{
                color: fontColor,
            }}
        >
            <div className='flex items-center gap-4'>
                <div className='relative h-10 w-10'>
                    <Image
                        src={imageUrl}
                        alt='avatar'
                        fill
                        className='object-cover'
                    />
                </div>
                <div
                    className='w-6'
                    style={{
                        borderTop: `1px solid ${fontColor}`,
                    }}
                />
                <NameAndHandle
                    colorPalette={colorPalette}
                    mode={mode}
                    name={name}
                    handle={handle}
                />
            </div>
            <div>{swipeLabel}</div>
        </div>
    );
}
