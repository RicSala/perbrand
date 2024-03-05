'use client';
import { SettingsIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { MouseEventHandler, useState } from 'react';
import { cn } from '@/lib/utils';

type FullScreenToolBarProps = {
    openFullScreen: MouseEventHandler<HTMLButtonElement>;
    closeFullscreen: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

export default function FullScreenToolBar({
    openFullScreen,
    closeFullscreen,
    className,
}: FullScreenToolBarProps) {
    return (
        <div
            className={cn(
                `relative flex -translate-y-[4rem] flex-col items-center
            transition-transform group hover:translate-y-0 duration-300`,
                className
            )}
        >
            <div className='flex h-16 w-full justify-between bg-muted'>
                <h3>This will be a thin toolbar</h3>
                <Button onClick={openFullScreen}>Full</Button>
                <Button onClick={closeFullscreen}>No Full</Button>
            </div>
            <div className='rounded-bl-lg rounded-br-lg  bg-muted px-5 py-2 items-center m-auto'>
                <SettingsIcon className='m-auto group-hover:rotate-45 transition-transform duration-500' />
            </div>
        </div>
    );
}
