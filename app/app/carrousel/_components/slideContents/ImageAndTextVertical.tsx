import { TBrand, TOrientation } from '@/types/types';
import Image from 'next/image';

type ImageAndTextVertical = {
    brand: TBrand;
    title: string;
    description: string;
    image: string;
    imageFirst?: boolean;
};

export const ImageAndTextVertical = ({
    brand,
    title,
    description,
    image,
    imageFirst = false,
}: ImageAndTextVertical) => {
    return (
        <div className='flex flex-col h-full p-2 py-6 gap-6'>
            <div
                className='relative h-40 overflow-hidden'
                style={{
                    borderRadius: '0.5rem',
                    order: imageFirst ? 0 : 1,
                }}
            >
                <Image
                    src={image}
                    alt='image'
                    fill
                    className='object-cover h-full'
                />
            </div>
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
        </div>
    );
};
