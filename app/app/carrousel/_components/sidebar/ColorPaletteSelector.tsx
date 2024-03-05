import { COLOR_PALETTES } from '@/app/app/post-writter/config/const';
import { TColorPalette } from '@/types/types';
import { ColorPalette } from './ColorPalette';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { set } from 'zod';

type ColorPaletteSelectProps = {
    colorPalette: TColorPalette;
    onChange: (colorPalette: TColorPalette) => void;
};

export const ColorPaletteSelect = ({
    colorPalette,
    onChange,
}: ColorPaletteSelectProps) => {
    const changeBackground = (color: string) => {
        onChange({ ...colorPalette, background: color });
    };

    const changeFont = (color: string) => {
        onChange({ ...colorPalette, font: color });
    };

    const changeAccent = (color: string) => {
        onChange({ ...colorPalette, accent: color });
    };
    return (
        <>
            <div className='w-full h-full grid grid-cols-3 gap-2'>
                {COLOR_PALETTES.map((palette, index) => (
                    <ColorPalette
                        colors={{
                            font: palette.font,
                            background: palette.background,
                            accent: palette.accent,
                        }}
                        key={index}
                        onClick={onChange}
                    />
                ))}
            </div>
            <h3>Personaliza tus colores</h3>
            <div className='flex flex-col gap-2'>
                <Label>Fondo</Label>
                <SimpleColorPicker
                    value={colorPalette.background}
                    onColorChange={changeBackground}
                />
                <Label>Letra</Label>
                <SimpleColorPicker
                    value={colorPalette.font}
                    onColorChange={changeFont}
                />
                <Label>Acentuado</Label>
                <SimpleColorPicker
                    value={colorPalette.accent}
                    onColorChange={changeAccent}
                />
            </div>
        </>
    );
};

type SimpleColorPickerProps = {
    value?: string;
    onColorChange: (color: string) => void;
};

export const SimpleColorPicker = ({
    value,
    onColorChange,
}: SimpleColorPickerProps) => {
    const colorPositionAndSize = 'absolute top-0 right-0 h-full w-8 ';
    return (
        <div className='relative'>
            <Input
                type='text'
                value={value}
                onChange={(e) => {
                    onColorChange(e.target.value);
                }}
                className='uppercase'
            />
            <div
                className={`${colorPositionAndSize} rounded-r-md border `}
                style={{ backgroundColor: value }}
            />

            <Input
                type='color'
                className={`${colorPositionAndSize} p-0 opacity-0`}
                value={value}
                onChange={(e) => {
                    onColorChange(e.target.value);
                }}
            />
        </div>
    );
};
