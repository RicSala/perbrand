import { ReactNode } from 'react';

type SlideBannerProps = {
    content: ReactNode;
};
export function SlideBanner({ content }: SlideBannerProps) {
    return (
        <div
            className='
                        bg-primary text-primary-foreground
                        w-full
                        absolute
                        left-0
                        top-0
                        text-center
    '
        >
            {content}
        </div>
    );
}
