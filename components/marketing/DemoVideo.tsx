'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import ReactPlayer from 'react-player/lazy';

type DemoVideoProps = {
    videoUrl: string;
    title: ReactNode;
    subtitle: ReactNode;
    cta: ReactNode;
    videoPosterUrl: string;
};
export function DemoVideo({
    videoUrl,
    title,
    subtitle,
    cta,
    videoPosterUrl,
}: DemoVideoProps) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <section
            id='video'
            className='m-auto flex w-[960px] max-w-full flex-col gap-4 relative'
        >
            <div className='anchor -top-32 absolute' id='demo' />

            {title}
            {subtitle}
            <div className='cursor-pointer aspect-[1280/720] overflow-auto rounded-lg'>
                {!hasMounted ? null : (
                    <ReactPlayer
                        url={videoUrl}
                        width={'100%'}
                        height={'100%'}
                    />
                )}
            </div>
            {cta}
        </section>
    );
}
