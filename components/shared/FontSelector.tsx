'use client';

import { fontsMap } from '@/config/fonts';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { TFontName } from '@/types/types';
import { ChevronDown } from 'lucide-react';

type FontSelectorProps = {
    setFontPalette: (font: string) => void;
    font: string;
};
export const FontSelector = ({ font, setFontPalette }: FontSelectorProps) => {
    const [fontPopOverisOpen, setFontPopOverisOpen] = useState(false);
    const [query, setQuery] = useState('');

    const filteredFonts = Object.keys(fontsMap).filter((font) =>
        font.toLowerCase().includes(query.toLowerCase())
    );

    const onSetFontPalette = (font: string) => {
        setFontPalette(font);
        setFontPopOverisOpen(false);
    };

    return (
        <Popover open={fontPopOverisOpen} onOpenChange={setFontPopOverisOpen}>
            <PopoverTrigger className='w-full flex items-center justify-between'>
                <div
                    className={`flex w-full items-center gap-2 justify-between border border-border p-1 px-2 rounded-md  ${fontsMap[font as TFontName].className} `}
                >
                    {font}
                    <ChevronDown className='w-4 h-4' />
                </div>
            </PopoverTrigger>
            <PopoverContent>
                <>
                    <div className='flex flex-col gap-2 overflow-y-scroll max-h-48'>
                        <Input
                            className='sticky top-0'
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        />
                        {
                            //    iterate on the object constFontsMap and get the key and value
                            filteredFonts.map((font, index) => (
                                <Button
                                    variant={'secondary'}
                                    key={font}
                                    // @ts-ignore
                                    className={`${fontsMap[font].className} text-lg`}
                                    onClick={() => onSetFontPalette(font)}
                                >
                                    {font}
                                </Button>
                            ))
                        }
                    </div>
                </>
            </PopoverContent>
        </Popover>
    );
};
