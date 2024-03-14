"use server";

import { db } from '@/lib/prisma';
import { retryAsyncFunction, wait } from '@/lib/utils';
import { Pure, TCarousel, TLinkedinPost, TSlide } from '@/types/types';
import { LinkedinPost, Post, Prisma } from '@prisma/client';
import { MutableRefObject } from 'react';
import fs from 'fs';
import { OpenAIWhisperAudio } from 'langchain/document_loaders/fs/openai_whisper_audio';
import path from 'path';
import cloudinary from 'cloudinary';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { promptGenerateCarousel } from '../app/saved/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import {
    BigNumberSlideSchema,
    CallToActionSlideSchema,
    CoverSlideSchema,
    ListSlideSchema,
    OnlyTextSlideSchema,
    SlideSchemaPrompt,
} from '@/types/schemas';
import { RunnableSequence } from '@langchain/core/runnables';
import image from 'next/image';
import axios from 'axios';
import { z } from 'zod';

export async function createLinkedinPost(post: string, id: string) {
    let linkedinPost: TLinkedinPost;
    console.log('Guardando post');
    if (id === 'new') {
        console.log('El post es nuevo');
        linkedinPost = await db.linkedinPost.create({
            data: {
                content: post,
                author: {
                    handle: 'Ricardo Sala',
                    name: 'Ricardo Sala',
                    pictureUrl: '/images/placeholders/user.png', // placeholder or the image of the user
                },
            },
        });
    } else {
        console.log('El post es existente');
        linkedinPost = await db.linkedinPost.update({
            where: {
                id: id,
            },
            data: {
                content: post,
                author: {
                    handle: 'Ricardo Sala',
                    name: 'Ricardo Sala',
                    pictureUrl: '/images/placeholders/user.png', // placeholder or the image of the user
                },
            },
        });
    }

    return linkedinPost;
}

export async function deleteLinkedinPost(postId: string) {
    await db.linkedinPost.delete({
        where: {
            id: postId,
        },
    });
}
export async function deleteCarousel(carouselId: string) {
    await db.carousel.delete({
        where: {
            id: carouselId,
        },
    });
}

export async function createLinkedinCarousel(post: TLinkedinPost) {
    console.log('post!!!', post);
    const model = new ChatOpenAI({
        temperature: 0.8,
        modelName: 'gpt-4-0613',
        streaming: true,
        callbacks: [
            {
                handleLLMNewToken(token) {
                    // console.log(token);
                },
            },
        ],
    });

    const promptTemplate = PromptTemplate.fromTemplate(promptGenerateCarousel);

    const parser = StructuredOutputParser.fromZodSchema(
        z
            .array(
                z.union([
                    BigNumberSlideSchema,
                    OnlyTextSlideSchema,
                    ListSlideSchema,
                    CallToActionSlideSchema,
                    CoverSlideSchema,
                ])
            )
            .max(15)
    );

    const chain = RunnableSequence.from([promptTemplate, model, parser]);

    console.log('Creating carousel...');

    const fn = () =>
        chain.invoke(
            {
                post: post.content,
                format_instructions: parser.getFormatInstructions(),
            },
            { tags: ['test'] }
        );

    const generatedSlides = await retryAsyncFunction(fn, 3, 1000);
    console.log('SLIDES!!!!', generatedSlides);

    const formattedSlides: TSlide[] = generatedSlides.map((slide) => {
        return {
            title: {
                content: slide.title,
                isShown: true,
            },
            // @ts-ignore
            // TODO: how can we fix this?
            paragraphs: slide.paragraphs
                ? // @ts-ignore
                  slide.paragraphs.map((paragraph: any) => {
                      return { content: paragraph, isShown: true };
                  })
                : [],

            tagline: {
                // @ts-ignore
                content: slide.tagline ?? '',
                isShown: false,
            },
            backgroundImage: {
                alt: '',
                opacity: 0.1,
                position: 'CENTER',
                url: '',
            },
            settings: null,
            // @ts-ignore
            bigCharacter: slide.bigCharacter ?? null,
            image: null,
            design: slide.design,
        };
    });

    const carousel = await db.carousel.create({
        data: {
            slides: formattedSlides,
            author: {
                handle: 'Ricardo Sala',
                name: 'Ricardo Sala',
                pictureUrl: '/images/placeholders/user.png',
            },
            // REVIEW: Why cannot do set: null?
            settings: {
                colorPalette: {
                    accent: '#FF0000',
                    font: '#FFFFFF',
                    background: '#000000',
                },
                fontPalette: {
                    handWriting: 'inter',
                    primary: 'inter',
                    secondary: 'inter',
                },
                aspectRatio: 'PORTRAIT',
                backgroundPattern: 'Bubbles',
            },
        },
    });

    return carousel;
}

export async function upsertCarousel(carousel: TCarousel) {
    console.log(carousel);
    if (carousel.id === undefined) {
        const newCarousel = await db.carousel.create({
            data: {
                slides: carousel.slides,
                settings: carousel.settings,
                author: {
                    handle: 'Ricardo Sala',
                    name: 'Ricardo Sala',
                    pictureUrl: '/images/placeholders/user.png',
                },
            },
        });

        return newCarousel;
    }

    const updatedCarousel = await db.carousel.update({
        where: {
            id: carousel.id,
        },
        data: {
            slides: carousel.slides,
            settings: carousel.settings,
        },
    });

    return updatedCarousel;
}

export const createWebmFile = async (formData: FormData) => {
  try {
    console.log(formData);
    // Save the formdata to a file
    const fileRaw = formData.get("audio") as File;
    const buffer = await fileRaw.arrayBuffer();
    const file = Buffer.from(buffer);
    const fileName = `audio.webm`;
    const filePath = `audio/${fileName}`;
    fs.writeFileSync(filePath, file);

    // Process the file using OpenAIWhisperAudio
    const loader = new OpenAIWhisperAudio(filePath, {
      clientOptions: {
        // TODO: How can we add parameters to the client?
        // response_format: 'vtt',
      },
    });
    const docs = await loader.load();
    console.log(docs);

    // Retrieve the content from the processed file
    const content = docs[0].pageContent;

    // Delete the file after processing
    fs.unlinkSync(filePath);

    return content;
  } catch (error) {
    console.error("Error processing the audio file:", error);
    throw error; // Rethrow the error for handling at a higher level
  }
};

export const getPexelImages = async (query: string) => {
    console.log(query);
    const pictures = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&page=1&per_page=20&locale=es-ES`,
        {
            headers: {
                Authorization: process.env.PEXELS_API_KEY,
            },
        }
    );
    console.log(pictures);
    console.log(pictures.data.photos);
    const photoUrls = pictures.data.photos.map((photo: any) => {
        return photo.src.medium;
    });
    return photoUrls;
};
