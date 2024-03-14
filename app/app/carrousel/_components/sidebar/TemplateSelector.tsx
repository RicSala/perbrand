import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { range } from '@mantine/hooks';
import { useContext } from 'react';
import { CarouselContext } from '../ContextProvider';
import { ContentSlideLayout } from '@/app/app/carrousel/_components/ContentSlideLayout';
import { TBrand } from '@/types/types';
import { TextOnlySlide } from '@/app/app/carrousel/_components/slideContents/TextOnlySlide';

type TemplateSelectorProps = {};

export const TemplateSelector = ({}: TemplateSelectorProps) => {
    const { currentSlide, carousel, setCurrentSlideTo, getCompleteBrand } =
        useContext(CarouselContext);
    return (
        <Dialog>
            <DialogTrigger className='w-full' asChild>
                <Button className='w-full' variant={'secondary'}>
                    Elige plantilla
                </Button>
            </DialogTrigger>
            <DialogContent className='md:max-w-[80vw] max-w-[calc(100%-1rem)]'>
                <div className='template-rows flex flex-col items-start gap-2 scale-[30%] origin-left'>
                    {/* TODO: This will eventually be images instead */}
                    {range(1, 5).map((index) => {
                        return (
                            <div className='flex' key={index}>
                                {carousel.slides.map((slide, index) => (
                                    <ContentSlideLayout
                                        className=''
                                        key={index}
                                        brand={getCompleteBrand() as TBrand}
                                        currentSlide={currentSlide}
                                        numberOfSlides={carousel.slides.length}
                                        isActive={currentSlide === index}
                                        mode='light'
                                        onClick={() => setCurrentSlideTo(index)}
                                    >
                                        <TextOnlySlide
                                            title={
                                                carousel.slides[index].title!
                                                    .content
                                            }
                                            paragraphs={
                                                carousel.slides[
                                                    index
                                                ].paragraphs?.map(
                                                    (p) => p.content
                                                ) ?? []
                                            }
                                        />
                                    </ContentSlideLayout>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </DialogContent>
        </Dialog>
    );
};
