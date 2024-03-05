// Mailgun endpoint. Used for now for feedback received. Generalize it to use for email. How can we limit the # of emails a user can send??

import { sendEmail } from '@/lib/mailgun';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    //   TODO: if the user is not logged, we don't allow to send feedback
    //   const id = session?.user?.id;
    const body = await request.json();

    console.log('received');
    console.log(body);
    const bodyObjectFormattedString = Object.keys(body)
        .map((key) => `<strong>${key}</strong>: ${body[key]}<br>`)
        .join('');

    await sendEmail(
        'ricardo@grouz.io',
        'New Feedback received',
        `${bodyObjectFormattedString}`,
        `${bodyObjectFormattedString}`,
        'ricardo@ricardo.com'
    );

    return NextResponse.json({ message: 'Opinión recibida' }, { status: 200 });
}
