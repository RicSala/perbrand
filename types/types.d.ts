import { decorationMap } from '@/app/app/carrousel/_components/slideParts/SlideDecoration';
import { ASPECT_RATIOS_MAP } from '@/app/app/carrousel/_components/const';
import { ASPECT_RATIOS } from '@/app/app/post-writter/config/const';
import { fontsMap } from '@/config/fonts';
import type {
    AspectRatio,
    Position,
    Prisma,
    PrismaClient,
} from '@prisma/client';
import { designMap } from '@/app/app/carrousel/_components/SlideDesignSelector';

export type HttpStatusCode = 200 | 201 | 400 | 401 | 404 | 500; // Extend as needed

export type PaginationInfo = {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
};

//   Utility type: Make a specific property nullable
export type MakeNullable<T, K extends keyof T> = Omit<T, K> & // First we ommit the whole property
    Partial<Pick<T, K>>; // Then we add it as a partial property

export type ChildrenProps = {
    children: React.ReactNode;
};

export type AuthContextProps = {
    isLoggedIn: Boolean;
    user: any; // TODO: temporal
};

export type Post = {
    slug: string;
    title: string;
    published: boolean;
    tags: string[];
    date: string;
};

export type ApiResponse<T = undefined, E = ApiError> =
    | {
          statusCode: HttpStatusCode;
          message: string;
          data: T | undefined;
          ok: true;
          meta?: any; // Additional metadata
          pagination?: PaginationInfo;
      }
    | {
          statusCode: HttpStatusCode;
          message: string;
          ok: false;
          error: E;
          meta?: any; // Additional metadata
      };

export type ApiRequestBody<
    T = undefined,
    A = 'CREATE' | 'UPDATE' | 'DELETE' | 'INVITE' | 'EXIT',
> = {
    data: T;
    action: A;
};

export type TStatus = 'idle' | 'loading' | 'success' | 'error';

export type TCarouselTemplate = {};

export type TSlideContent = {
    title: string;
    paragraph: string;
    tagline: string;
};

// #### START OF TRYING
// REVIEW: Not sure if this makes things easier or more complicated...will take it for a spin
// IMPORTANT: NOT USING IT, BUT MAY BE USEFUL IN THE FUTURE
type ModelNames = Prisma.ModelName; // Union Type with the names of all Models: "User" | "Post"...

// Prisma model is a Record...
export type PrismaModels = {
    // ...where each key is a ModelName...
    [M in ModelNames]: Exclude<
        // ...and each value is the awaited return type of the findUnique method of the PrismaClient of the corresponding model
        Awaited<ReturnType<PrismaClient[Uncapitalize<M>]['findUnique']>>,
        null //..excluding null
    >;
};
// Is the equivalent of doing something like this:
// const user = await prisma.user.findUnique({ where: { id: 1 } });
// typeof user
// #### END OF TRYING

// Helper type that converts a database model into an object to work with in the frontend (i.e. ommits id, createdAt, updatedAt, etc).
export type Pure<T> = Omit<T, 'createdAt' | 'updatedAt'>;

// REVIEW: What is the difference between "getPayload" and just getting the type from the PrismaClient?
export type TLinkedinPost = Pure<Prisma.LinkedinPostGetPayload<{}>>;
export type TScheduledPost = Pure<Prisma.ScheduledPostGetPayload<{}>>;
export type TCarousel = Pure<Prisma.CarouselGetPayload<{}>>;

export type TSlide = Pure<Prisma.SlideGetPayload<{}>>;

type TAspectRatioMap = typeof ASPECT_RATIOS_MAP;
export type TAspectRatioEnum = keyof TAspectRatioMap;
export type TAspectRatioLabel = TAspectRatioMap[TAspectRatioEnum];

export type TFontNames = keyof typeof fontsMap;

export type TColorPalette = Prisma.ColorPaletteGetPayload<{}>;
export type TIdeas = Pure<Prisma.IdeaGetPayload<{}>>;

export type TSlide = Pure<Prisma.SlideGetPayload<{}>>;

export type TBrand = Pure<Prisma.BrandGetPayload<{}>>;

export type TFeedback = '' | 'yes' | 'no' | 'partially';

type TAspectRatioMap = typeof ASPECT_RATIOS_MAP;
export type TAspectRatioEnum = keyof TAspectRatioMap;
export type TAspectRatioLabel = TAspectRatioMap[TAspectRatioEnum];

export type TFontName = keyof typeof fontsMap;

export type TFontPallete = Prisma.FontPaletteGetPayload<{}>;

export type TDecorationId = keyof typeof decorationMap;
export type TColor = keyof TColorPalette;

export type TFont = keyof TFontPalette;

export type TFontPalette = Prisma.FontPaletteGetPayload<{}>;

export type TDecorationId = keyof typeof decorationMap;

export type TOrientation = 'horizontal' | 'vertical';

export type TMode = 'light' | 'dark';

export type TImage = {
    url: string;
    alt: string;
    opacity: number;
    position: string;
};

export type TSlideDesignNames = keyof typeof designMap;

export type TPosition = Position;
