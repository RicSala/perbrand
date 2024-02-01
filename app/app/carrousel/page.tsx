'use client';

import { Header } from '@/components/shared/header';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useContext, useState } from 'react';
import { SlideSettings } from './_components/SlideSettings';
import {
    CarouselContext,
    CarouselContextProvider,
} from './_components/ContextProvider';
import { range } from '@mantine/hooks';
import Container from '@/components/shared/container';
import { CarouselSidebar } from './_components/Sidebar';
import { Slide } from './_components/Slide';
import { CarouselWorkbench } from './_components/Workbench';

/* TODO: Can we get a better aproach to stretch an element that is inside a flex container without making it this rigid? 
            Right now, it depends on the size of the scrollbar, which is not ideal...
            */
const stretchClasses =
    'relative w-[calc(100vw-1rem)] sm:w-[calc(100vw-1rem)] md:w-[calc(100vw-1rem)] lg:w-[calc(100vw-256px-1rem)]';

export default function CarouselPage() {
    return (
        <>
            <Container>
                <Header
                    className='mt-6 border-0'
                    title='Genera un carrusel'
                    subtitle='Puedes generarlo de forma manual o pedirle a la IA que lo haga por ti a partir de un post'
                />
            </Container>

            <CarouselContextProvider>
                <div
                    className={`flex border-t flex-wrap w-full border-0 border-re-500 grow`}
                >
                    <CarouselSidebar />
                    <CarouselWorkbench />
                </div>
            </CarouselContextProvider>
        </>
    );
}

export type SlideType = {
    title: string | null;
    tagline: string | null;
    subtitle: string | null;
    description: string | null;
    image: string | null;
    hasCounter: boolean;
    hasTitle: boolean;
    hasParagraph: boolean;
    hasTagline: boolean;
    backgroundColor: string | null;
    fontColor: string | null;
};

export type Carousel = {
    swipeLabel: string | null;
    slides: SlideType[];
    colorPalette: CarouselColorPalette;
    fontPalette: CarouselFontPalette;
    backgroundPattern: string | null;
    authorName: string | null;
    authorPictureUrl: string | null;
    authorHandle: string | null;
    settings: {
        alternateColors: boolean;
        showCounter: boolean;
        showSwipeLabel: boolean;
        showAuthor: boolean;
    };
};

export type CarouselColorPalette = {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
};

export type CarouselFontPalette = {
    primaryFont: string;
    secondaryFont: string;
};
