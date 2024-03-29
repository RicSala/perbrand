'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

type VideoClientProps = {
    videoUrl: string;
    playing?: boolean;
    className?: string;
};
export function VideoClient({
    videoUrl,
    playing,
    className,
}: VideoClientProps) {
    const [hasMouted, setHasMouted] = useState(false);
    useEffect(() => {
        setHasMouted(true);
    }, []);

    if (!hasMouted) return null;

    return (
        <div className={cn(`aspect-[1280/720]`, className)}>
            <ReactPlayer
                url={videoUrl}
                width={'100%'}
                height={'100%'}
                playing={playing}
            />
        </div>
    );
}
