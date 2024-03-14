import { CarouselContextProvider } from '../_components/ContextProvider';
import Container from '@/components/shared/container';
import { CarouselSidebar } from '../_components/sidebar/Sidebar';
import { Heading } from '@/components/shared/Heading';
import { fakeCarousel } from '../_components/const';
import { TCarousel } from '@/types/types';
import { getSession } from 'next-auth/react';
import { getBrandsByUserId } from '@/app/_actions/shared-actions';
import { authOptions } from '@/auth';
import { CarouselWorkbench } from '../_components/CarouselWorkbench';
import { Session, getServerSession } from 'next-auth';

/* TODO: Can we get a better aproach to stretch an element that is inside a flex container without making it this rigid? 
            Right now, it depends on the size of the scrollbar, which is not ideal...
            
            */
// const stretchClasses =
//     'relative w-[calc(100vw-1rem)] sm:w-[calc(100vw-1rem)] md:w-[calc(100vw-1rem)] lg:w-[calc(100vw-256px-1rem)]';

type props = {
    params: {
        carouselId: string;
    };
};

export default async function CarouselPage({ params }: props) {
    const session: Session | null = await getServerSession(authOptions);

    const userBrands = await getBrandsByUserId(session?.user.id!);

    const { carouselId } = params;

    let carousel = fakeCarousel as TCarousel;

    if (!(carouselId === 'new')) {
        const dbCarousel = await prisma?.carousel.findUnique({
            where: {
                id: carouselId,
            },
        });

        if (dbCarousel) {
            carousel = dbCarousel;
        }
    }

    return (
        <>
            <Container>
                <Heading
                    className='mt-6 border-0'
                    title='Genera un carrusel'
                    subtitle='Puedes generarlo de forma manual o pedirle a la IA que lo haga por ti a partir de un post'
                />
            </Container>

            <CarouselContextProvider initialCarousel={carousel}>
                <div
                    className={`flex md:flex-row flex-col border-t flex-wrap w-full border-0 border-re-500 grow`}
                >
                    <CarouselSidebar brands={userBrands} />
                    <CarouselWorkbench />
                </div>
            </CarouselContextProvider>
        </>
    );
}
