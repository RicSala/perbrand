import { TBrand, TOrientation } from '@/types/types';
import Image from 'next/image';
import { SlideGradientBlob } from '../slideParts/SlideGradientBlob';
import { ArrowLeftIcon, ArrowRight } from 'lucide-react';
import ContentEditable from 'react-contenteditable';

type ImageAndTextVertical = {
    brand: TBrand;
    title: string;
    description: string;
    image: string;
    imageLocation?: 'left' | 'right';
};

export const ImageAndTextHorizontal = ({
    brand,
    title,
    description,
    image,
    imageLocation = 'right',
}: ImageAndTextVertical) => {
    const ArrowElement = imageLocation === 'right' ? ArrowRight : ArrowLeftIcon;

    return (
        <div className='flex flex-col h-full p-2 py-6 gap-6'>
            <div>
                <h1
                    style={{
                        fontSize: '2rem',
                        lineHeight: 1.1,
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontSize: '1rem',
                        lineHeight: 1.3,
                        fontWeight: 200,
                    }}
                >
                    {description}
                </p>
            </div>
            <div
                className='flex items-center'
                style={{
                    flexDirection:
                        imageLocation === 'left' ? 'row' : 'row-reverse',
                }}
            >
                <div className='relative w-fit'>
                    <SlideGradientBlob brand={brand} className='blur-3xl' />
                    <div
                        className='relative h-44 overflow-hidden w-44'
                        style={{
                            borderRadius: '0.5rem',
                        }}
                    >
                        <Image
                            src={image}
                            alt='image'
                            fill
                            className='object-cover h-full'
                        />
                    </div>
                </div>
                <ArrowElement
                    size={48}
                    style={{
                        color: brand.colorPalette.accent,
                        marginRight: imageLocation === 'right' ? '-1rem' : 0,
                        marginLeft: imageLocation === 'left' ? '-1rem' : 0,
                        zIndex: 10,
                    }}
                />
                <p>This is provision of the image caption</p>
            </div>
        </div>
    );
};
