import { Pure } from '@/types/types';
import * as PrismaClient from '@prisma/client';

export type VoiceTone = {
    emoji: string;
    name: string;
    value: string;
    id: number;
};

export const VOICE_TONES: VoiceTone[] = [
    {
        id: 1,
        emoji: '🤩',
        name: 'Emocionado',
        value: 'emocionado',
    },
    {
        id: 2,
        emoji: '😎',
        name: 'Dramático',
        value: 'dramático',
    },
    {
        id: 3,
        emoji: '🤓',
        name: 'Creativo',
        value: 'creativo',
    },
    {
        id: 4,
        emoji: '🤔',
        name: 'Profesional',
        value: 'Profesional',
    },
    {
        id: 5,
        emoji: '😍',
        name: 'Motivador',
        value: 'motivador',
    },
    {
        id: 6,
        emoji: '😂',
        name: 'Gracioso',
        value: 'gracioso',
    },
    {
        id: 8,
        emoji: '😭',
        name: 'Casual',
        value: 'casual',
    },
    {
        id: 9,
        emoji: '😱',
        name: 'Convincente',
        value: 'convincente',
    },
    {
        id: 10,
        emoji: '🤯',
        name: 'Sorprendente',
        value: 'sorprendente',
    },
    {
        id: 11,
        emoji: '🤯',
        name: 'Urgente',
        value: 'urgente',
    },
    {
        id: 12,
        emoji: '🤯',
        name: 'Preocupado',
        value: 'preocupado',
    },
    {
        id: 13,
        emoji: '🤯',
        name: 'Informativo',
        value: 'informativo',
    },
    {
        id: 14,
        emoji: '🤯',
        name: 'Enfadado',
        value: 'enfadado',
    },
];

export const POST_CATEGORIES: Pure<PrismaClient.PostCategory>[] = [
    {
        id: '0',
        name: 'todos',
        tags: [``],
        description: '',
    },
    {
        id: '1',
        name: 'aprendizajes',
        tags: ['aprendizajes', 'conclusiones', 'lecciones', 'tips'],
        description: '',
    },
    {
        id: '2',
        name: 'consejos',
        tags: ['consejos', 'tips', 'ideas'],
        description: '',
    },
    {
        id: '3',
        name: 'historias',
        tags: ['historias', 'experiencias'],
        description: '',
    },
    {
        id: '4',
        name: 'opiniones',
        tags: ['opiniones', 'reflexiones', 'ideas'],
        description: '',
    },

    {
        id: '5',
        name: 'conclusiones',
        tags: ['conclusiones', 'lecciones', 'tips'],
        description: '',
    },
    {
        id: '6',
        name: 'lecciones',
        tags: ['lecciones', 'tips'],
        description: '',
    },
    {
        id: '7',
        name: 'tips',
        tags: ['tips'],
        description: '',
    },
    {
        id: '8',
        name: 'ideas',
        tags: ['ideas'],
        description: '',
    },
    {
        id: '9',
        name: 'experiencias',
        tags: ['experiencias'],
        description: '',
    },
    {
        id: '10',
        name: 'reflexiones',
        tags: ['reflexiones'],
        description: '',
    },
] as const;

export const COLOR_PALETTES = [
    {
        font: '#ffffff',
        background: '#0d3b66',
        accent: '#fae596',
        primary: '#f4a261',
        id: 1,
    },
    {
        font: '#000000',
        background: '#ff6b6b',
        accent: '#ffe66d',
        primary: '#f4a261',
        id: 2,
    },
    {
        font: '#f4f4f2',
        background: '#346751',
        accent: '#c84b31',
        primary: '#f4a261',
        id: 3,
    },
    {
        font: '#f4e8c1',
        background: '#22333b',
        accent: '#d9594c',
        primary: '#f4a261',
        id: 4,
    },
    {
        font: '#27213c',
        background: '#5a352a',
        accent: '#e3b23c',
        primary: '#f4a261',
        id: 5,
    },
    {
        font: '#2d3142',
        background: '#b2b2b2',
        accent: '#ef8354',
        primary: '#f4a261',
        id: 6,
    },
    {
        font: '#1b2021',
        background: '#51513d',
        accent: '#f4d8cd',
        primary: '#f4a261',
        id: 7,
    },
    {
        font: '#011627',
        background: '#fdfffc',
        accent: '#2ec4b6',
        primary: '#f4a261',
        id: 8,
    },
    {
        font: '#f9dc5c',
        background: '#ec4e20',
        accent: '#d81159',
        primary: '#f4a261',
    },
    {
        font: '#011f4b',
        background: '#03396c',
        accent: '#ff7b25',
        primary: '#f4a261',
    },
    {
        font: '#ffffff',
        background: '#003f88',
        accent: '#e5e5e5',
        primary: '#f4a261',
    },
    {
        font: '#ffffff',
        background: '#101820',
        accent: '#f2aa4c',
        primary: '#f4a261',
    },
    {
        font: '#f5f0e1',
        background: '#002500',
        accent: '#929982',
        primary: '#f4a261',
    },
    {
        font: '#0b090a',
        background: '#f5f3f4',
        accent: '#a9927d',
        primary: '#f4a261',
    },
    {
        font: '#ffffff',
        background: '#5f0f40',
        accent: '#9a031e',
        primary: '#f4a261',
    },
    {
        font: '#1d1d1d',
        background: '#fefae0',
        accent: '#f77f00',
        primary: '#f4a261',
    },
    {
        font: '#f2f3ae',
        background: '#f7ff56',
        accent: '#ff9b42',
        primary: '#f4a261',
    },
    {
        font: '#f1faee',
        background: '#1d3557',
        accent: '#e63946',
        primary: '#f4a261',
    },
    {
        font: '#a8dadc',
        background: '#457b9d',
        accent: '#1d3557',
        primary: '#f4a261',
    },
    {
        font: '#1d3557',
        background: '#a8dadc',
        accent: '#f1faee',
        primary: '#f4a261',
    },
    {
        font: '#e63946',
        background: '#f1faee',
        accent: '#a8dadc',
        primary: '#f4a261',
    },
    {
        font: '#f4f1de',
        background: '#3d405b',
        accent: '#81b29a',
        primary: '#f4a261',
    },
    {
        font: '#f2cc8f',
        background: '#e07a5f',
        accent: '#3d405b',
        primary: '#f4a261',
    },
    {
        font: '#e07a5f',
        background: '#f2cc8f',
        accent: '#81b29a',
        primary: '#f4a261',
    },
    {
        font: '#3d405b',
        background: '#f4f1de',
        accent: '#e07a5f',
        primary: '#f4a261',
    },
    {
        font: '#f4f1de',
        background: '#81b29a',
        accent: '#f2cc8f',
        primary: '#f4a261',
    },
    {
        font: '#81b29a',
        background: '#f4f1de',
        accent: '#3d405b',
        primary: '#f4a261',
    },
    {
        font: '#f2cc8f',
        background: '#81b29a',
        accent: '#f4f1de',
        primary: '#f4a261',
    },
    {
        font: '#353535',
        background: '#3c6e71',
        accent: '#d9d9d9',
        primary: '#f4a261',
    },
    {
        font: '#d9d9d9',
        background: '#284b63',
        accent: '#f4d35e',
        primary: '#f4a261',
    },
    {
        font: '#f4d35e',
        background: '#ee964b',
        accent: '#f95738',
        primary: '#f4a261',
    },
    {
        font: '#272838',
        background: '#f3d9dc',
        accent: '#99e1d9',
        primary: '#f4a261',
    },
    {
        font: '#99e1d9',
        background: '#272838',
        accent: '#f3d9dc',
        primary: '#f4a261',
    },
    {
        font: '#f3d9dc',
        background: '#99e1d9',
        accent: '#272838',
        primary: '#f4a261',
    },
    {
        font: '#272838',
        background: '#99e1d9',
        accent: '#f3d9dc',
        primary: '#f4a261',
    },
    {
        font: '#ffffff',
        background: '#264653',
        accent: '#2a9d8f',
        primary: '#f4a261',
    },
    {
        font: '#264653',
        background: '#2a9d8f',
        accent: '#e9c46a',
        primary: '#f4a261',
    },
    {
        font: '#2a9d8f',
        background: '#e9c46a',
        accent: '#f4a261',
        primary: '#f4a261',
    },
    {
        font: '#e9c46a',
        background: '#f4a261',
        accent: '#e76f51',
        primary: '#f4a261',
    },
];
