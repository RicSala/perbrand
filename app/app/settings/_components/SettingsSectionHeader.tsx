import { cn } from '@/lib/utils';

type SettingsSectionHeaderProps = {
    title: string;
    subtitle: string;
    className?: string;
};

export const SettingsSectionHeader = ({
    title,
    subtitle,
    className,
}: SettingsSectionHeaderProps) => {
    return (
        <div className={cn(``, className)}>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='text-sm text-primary/40'>{subtitle}</p>
        </div>
    );
};
