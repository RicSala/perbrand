'use client';

import Feedback from '@/components/shared/feedback';
import Navbar from '@/components/shared/navbar/Navbar';
import { Sidebar } from '@/components/shared/sidebar/Sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Clock, Zap } from 'lucide-react';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex h-[100dvh] overflow-hidden border-0 border-green-500'>
            <div className='relative flex flex-col flex-1 overflow-x-hidden border-0 border-blue-500'>
                <Navbar />
                <div className='flex flex-col-reverse lg:flex-row border-0 border-dotted border-red-500 min-h-[calc(100%-6rem)] h-full'>
                    <Sidebar />
                    <main className='border-0 border-indigo-600 flex-1 overflow-auto flex flex-col bg-background'>
                        <ToolBanner className='hidden md:flex' />
                        <Feedback />
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

type ToolBannerProps = {
    className?: string;
};

export const ToolBanner = ({ className }: ToolBannerProps) => {
    return (
        <div
            className={cn(
                `gap-2 bg-muted p-2 flex justify-center items-center text-sm`,
                className
            )}
        >
            <Clock className='w-5 h-5 mr-2' />
            Estás en un Free trial
            <Button
                variant={'default'}
                size={'sm'}
                className='rounded-full
        text-xs
        '
            >
                <Zap className='w-4 h-4 mr-2 fill-primary-foreground' />
                Elige plan
            </Button>
        </div>
    );
};
