// TODO: Can we parametrize this? https://www.figma.com/file/wfLC0M1Ct6MyFlD6sub2cX/Carousel-Post-Templates-Pack-(Community)?type=design&node-id=1-268&mode=design&t=Vyuq14JJuPJNLHyC-0
// https://www.figma.com/file/2TevbCJQsHHge51w9GBz44/LinkedIn-Carousel-templates-(Community)?type=design&node-id=0-1&mode=design&t=JbZQ3CX6i9i8rvvt-0

import { fakeCarousel } from '../../carrousel/_components/const';
import { TCarousel, TColorPalette } from '@/types/types';
import { Heading } from '@/components/shared/Heading';
import Container from '@/components/shared/container';
import { getBrandsByUserId } from '@/app/_actions/shared-actions';
import { ColorPalette } from '../../carrousel/_components/sidebar/ColorPalette';
import { SlideAvatar } from '../../carrousel/_components/slideParts/SlideAvatar';
import { SlideProfileCard } from '../../carrousel/_components/slideParts/SlideProfileCard';
import { ReactNode } from 'react';
import { SlideFotter } from '../../carrousel/_components/slideParts/SlideFotter';
import { cn } from '@/lib/utils';
import { SlideProgressBar } from '../../carrousel/_components/slideParts/SlideProgressBar';
import { CarouselContextProvider } from '../../carrousel/_components/ContextProvider';
import { CarouselWorkbench } from '../../carrousel/_components/CarouselWorkbench';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

type props = {
    params: {
        carouselId: string;
    };
};

export default async function CarouselPage({ params }: props) {
    const session: Session | null = await getServerSession(authOptions);
    const brands = await getBrandsByUserId(session?.user.id!);
    const brand = brands[0];

    const { carouselId } = params;

    let carousel = fakeCarousel as TCarousel;

    return (
        <>
            <Container>
                <Heading
                    className='mt-6 border-0'
                    title='Genera un carrusel'
                    subtitle='Puedes generarlo de forma manual o pedirle a la IA que lo haga por ti a partir de un post'
                />
            </Container>
            <div className='flex flex-col gap-2'>
                <div
                    className={`flex md:flex-row flex-col border-t flex-wrap w-full border-0 border-re-500 grow`}
                >
                    <div className='w-48 flex-col gap-2'>
                        <div className='flex gap-2'>
                            {Object.keys(brand.colorPalette).map(
                                (key, index) => {
                                    return <p key={index}>{key}</p>;
                                }
                            )}
                        </div>
                        <ColorPalette colors={brand.colorPalette} />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div
                        className='p-4'
                        style={{
                            backgroundColor: brand.colorPalette.background,
                        }}
                    >
                        <SlideAvatar
                            imageUrl={brand.imageUrl}
                            mode='light'
                            colorPalette={brand.colorPalette}
                        />
                    </div>
                    <div
                        className='p-4'
                        style={{
                            backgroundColor: brand.colorPalette.font,
                        }}
                    >
                        <SlideAvatar
                            imageUrl={brand.imageUrl}
                            mode='dark'
                            colorPalette={brand.colorPalette}
                        />
                    </div>
                </div>

                <div className='flex gap-2'>
                    <Variant mode='light' colorPalette={brand.colorPalette}>
                        <SlideProfileCard
                            colorPalette={brand.colorPalette}
                            fontPalette={brand.fontPalette}
                            imageUrl={brand.imageUrl}
                            name={brand.name}
                            handle={brand.handle}
                        />
                    </Variant>
                    <Variant mode='dark' colorPalette={brand.colorPalette}>
                        <SlideProfileCard
                            colorPalette={brand.colorPalette}
                            fontPalette={brand.fontPalette}
                            imageUrl={brand.imageUrl}
                            name={brand.name}
                            handle={brand.handle}
                            mode='dark'
                            orientation='vertical'
                        />
                    </Variant>
                </div>

                <div className='flex gap-2'>
                    <Variant
                        mode='light'
                        colorPalette={brand.colorPalette}
                        className='w-[50%] relative'
                    >
                        <SlideFotter
                            colorPalette={brand.colorPalette}
                            fontPalette={brand.fontPalette}
                            imageUrl={brand.imageUrl}
                            name={brand.name}
                            handle={brand.handle}
                            mode='light'
                            swipeLabel={<div>Swipe</div>}
                        />
                    </Variant>
                    <Variant
                        mode='dark'
                        colorPalette={brand.colorPalette}
                        className='w-[50%] relative'
                    >
                        <SlideFotter
                            colorPalette={brand.colorPalette}
                            fontPalette={brand.fontPalette}
                            imageUrl={brand.imageUrl}
                            name={brand.name}
                            handle={brand.handle}
                            mode='dark'
                            swipeLabel={<div>Swipe</div>}
                        />
                    </Variant>
                </div>
                <div className='flex gap-2'>
                    <Variant
                        mode='light'
                        colorPalette={brand.colorPalette}
                        className='w-[50%] relative'
                    >
                        <SlideProgressBar
                            colorPalette={brand.colorPalette}
                            currentSlide={1}
                            numberOfSlides={6}
                            mode='light'
                        />
                    </Variant>
                    <Variant
                        mode='dark'
                        colorPalette={brand.colorPalette}
                        className='w-[50%] relative'
                    >
                        <SlideProgressBar
                            colorPalette={brand.colorPalette}
                            currentSlide={1}
                            numberOfSlides={6}
                            mode='dark'
                        />
                    </Variant>
                </div>
            </div>
            <div className='flex justify-start'>
                {/* <CarouselContextProvider initialCarousel={carousel}>
                    <BetterSlide
                        brand={brand}
                        isActive={false}
                        setIsActive={() => {}}
                        mode='light'
                    >
                        <ImageAndTextHorizontal
                            brand={brand}
                            imageUrl='https://images.pexels.com/photos/20432992/pexels-photo-20432992/free-photo-of-funchal-at-madeira.jpeg'
                            title='This is a title here'
                            description='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
                        />
                    </BetterSlide>
                </CarouselContextProvider>
                <CallToActionSlide
                    brand={brand}
                    title='¿Y tú que opinas?'
                    subtitle='Si te gustó el contenido, tengo mucho más!'
                    callToActionText='Sígueme para más contenido'
                    mode='dark'
                /> */}
                <CarouselContextProvider initialCarousel={carousel}>
                    <CarouselWorkbench />
                </CarouselContextProvider>
                {/* <CarouselWorkbench brand={brand} /> */}
            </div>
        </>
    );
}

type VariantProps = {
    mode: 'light' | 'dark';
    colorPalette: TColorPalette;
    children: ReactNode;
    className?: string;
};

const Variant = ({
    children,
    mode = 'light',
    colorPalette,
    className = '',
}: VariantProps) => {
    return (
        <div
            className={cn(`p-4`, className)}
            style={{
                backgroundColor:
                    mode === 'light'
                        ? colorPalette.background
                        : colorPalette.font,
            }}
        >
            {children}
        </div>
    );
};
