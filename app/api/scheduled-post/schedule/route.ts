import { db } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
/**
 *
 * @param req : userId -> to check if user's has connected the linkedin account or not
 * @returns:{ loginUser: true } based on which frontend decides which pop-up to show,
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const userAccount = await db.account.findFirst({
            where: { userId: body?.userId }, //TODO: Careful, there are Google and LinkedIn accounts!
        });

        if (!userAccount) {
            return NextResponse.json({ loginUser: false }, { status: 200 });
        }

        return NextResponse.json(
            { message: 'Post scheduled', loginUser: true }, //TODO: The message should be something like "Account connected", shouldn't it?
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}
