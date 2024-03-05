'use client';

import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { HeadwayScript } from '@/scripts/headway';
import { PenLine, ChevronsUpDown } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Logo from '../logo';
import { SelectAccountMenu } from './SelectAccountMenu';
import { cn } from '@/lib/utils';

export default function Navbar({ className }: { className?: string }) {
    const { data } = useSession();

    return (
        // BOILER: Change this in boilerplate
        <header
            className={cn(
                `px-4 sm:px-6 lg:px-8 sticky top-0 border-b border-border z-30 py-4 bg-background`,
                className
            )}
        >
            <div className='flex items-center justify-between h-full -mb-px'>
                {/* Left side */}
                <div className='flex gap-2 items-center'>
                    <Logo />
                    <HeadwayScript />
                </div>

                {/* Right side */}
                <div className='flex items-center space-x-3'>
                    <Button>
                        <PenLine className='mr-2' />
                        Escribir Post
                    </Button>
                    {/* REVIEW: This wouldn't ve ever worked here since it's out of the provider  */}
                    {/* <DownloadButton /> */}

                    <Separator
                        orientation='vertical'
                        className='separator self-stretch h-auto'
                    />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={'secondary'}>
                                {data?.user.name || 'Cargando...'}
                                <ChevronsUpDown className='ml-2 h-4 w-4' />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='p-0'>
                            <SelectAccountMenu />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </header>
    );
}
