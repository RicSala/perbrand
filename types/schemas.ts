// type Slide {
//     title      DisplayableText
//     paragraphs DisplayableText[]
//     tagline    DisplayableText
//     settings   SlideOverrides
//     image      Image
// }

import { z } from 'zod';

export const SlideSchemaPrompt = z
    .array(
        z.object({
            title: z
                .string()
                .min(1)
                .max(50)
                .describe(
                    `A meaningful title (no "introducción" or "slide 1")`
                ),
            paragraph: z
                .string()
                .max(200)
                .describe(`Do not exceed 180 characters`),
        })
    )
    .max(10);

export const IdeaRequestFormSchema = z.object({
    topic: z.string().nonempty('El tema no puede estar vacío'),
});

export const IdeaSchema = z.object({
    description: z
        .string()
        .max(200)
        .nonempty('La descripción no puede estar vacía'),
});

export const arrayOfIdeasSchema = IdeaSchema.array().nonempty();

export const googleSearchResultsSchema = z.array(
    z.object({
        kind: z.string(),
        title: z.string(),
        htmlTitle: z.string(),
        link: z.string(),
        displayLink: z.string(),
        snippet: z.string(),
        htmlSnippet: z.string(),
        cacheId: z.string(),
        formattedUrl: z.string(),
        htmlFormattedUrl: z.string(),
        pagemap: z.object({
            cse_thumbnail: z.array(
                z.object({
                    src: z.string(),
                    width: z.string(),
                    height: z.string(),
                })
            ),
            metatags: z.array(
                z.object({
                    'og:image': z.string(),
                    'twitter:card': z.string(),
                    'msapplication-square70x70logo': z.string(),
                    'sailthru.tags': z.string(),
                    'og:site_name': z.string(),
                    'msapplication-wide310x150logo': z.string(),
                    'msapplication-tileimage': z.string(),
                    'og:description': z.string(),
                    'twitter:image': z.string(),
                    'twitter:site': z.string(),
                    'msapplication-square310x310logo': z.string(),
                    emailcontenttype: z.string(),
                    'parsely-section': z.string(),
                    'msapplication-tilecolor': z.string(),
                    'og:type': z.string(),
                    'twitter:title': z.string(),
                    emailvertical: z.string(),
                    'og:title': z.string(),
                    'msapplication-square150x150logo': z.string(),
                    'parsely-tags': z.string(),
                    'fb:app_id': z.string(),
                    viewport: z.string(),
                    'twitter:description': z.string(),
                    'og:url': z.string(),
                    'sailthru.author': z.string(),
                })
            ),
            cse_image: z.array(z.object({ src: z.string() })),
        }),
    })
);

export const brandKitsSettingsSchema = z.object({
    name: z.string().min(3, {
        message: 'El nombre debe tener al menos 3 caracteres',
    }),
    handle: z.string().min(3, {
        message: 'El handle debe tener al menos 3 caracteres',
    }),
    imageUrl: z.string().url(),
    fontPalette: z.object({
        handWriting: z.string(),
        primary: z.string(),
        secondary: z.string(),
    }),
    colorPalette: z.object({
        accent: z.string(),
        background: z.string(),
        font: z.string(),
    }),
});
