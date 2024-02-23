import { TCarousel, TSlide } from '@/types/types';
import * as PrismaClient from '@prisma/client';

export const fakeSlides: TSlide[] = [
    {
        backgroundImage: {
            url: '/images/placeholders/user.png',
            alt: 'some random',
            opacity: 0.1,
            position: 'center',
        },
        paragraphs: [
            {
                content:
                    'Loremi ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                isShown: true,
            },
        ],
        title: {
            content: 'some randum title',
            isShown: true,
        },
        // Ignored for now
        settings: {
            colorPalette: {
                background: '',
                font: '',
                accent: '',
            },
            fontPalette: {
                primary: '',
                secondary: '',
                handWriting: '',
            },
        },
        tagline: {
            content: 'some randum tagline',
            isShown: true,
        },
    },
];

export const fakeCarousel: Omit<TCarousel, 'id'> = {
    slides: fakeSlides,
    author: {
        handle: '@ricSala',
        name: 'Ricardo Sala',
        pictureUrl: '/images/placeholders/user.png',
    },
    swipeLabel: 'Desliza',
    settings: {
        colorPalette: {
            background: '#000000',
            font: '#ffffff',
            accent: '#ffffff',
        },
        fontPalette: {
            primary: 'bricolage',
            secondary: 'bricolage',
            handWriting: 'bricolage',
        },
        aspectRatio: 'PORTRAIT',
        backgroundPattern: 'Bubbles',
        alternateColors: false,
        showAuthor: true,
        showCounter: true,
        showSwipeLabel: true,
        showDecoration: true,
    },
};

// REVIEW: This took a while!!!!
export const ASPECT_RATIOS_MAP = {
    PORTRAIT: '4:5',
    SQUARE: '1:1',
} as const satisfies Record<PrismaClient.AspectRatio, string>;
// REVIEW THIS!
// as const made the strings literal types instead of just string
// satisfies makes sure the keys are the same as the enum from the prisma schema

// export type TAspectRatioLabel = TAspectRatioMap[TAspectRatioEnum];
