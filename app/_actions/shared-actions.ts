import { db } from '@/lib/prisma';

export const getBrandsByUserId = async (userId: string) => {
    const brands = await db.brand.findMany({
        where: {
            authorId: userId,
        },
    });

    return brands;
};
