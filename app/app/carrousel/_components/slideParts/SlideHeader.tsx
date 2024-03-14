import { cn } from '@/lib/utils';

type SlideHeaderProps = {
    text: string;
    slideNumber: number;
    className?: string;
};
export function SlideHeader({
    text,
    slideNumber,
    className,
}: SlideHeaderProps) {
    return (
        <div className={cn(``, className)}>
            <p className='flex justify-between'>
                {text}
                <span>{slideNumber}</span>
            </p>
        </div>
    );
}
