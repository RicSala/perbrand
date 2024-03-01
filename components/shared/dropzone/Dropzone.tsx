'use client';
// DOCS: https://react-dropzone.js.org

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useDropzone } from 'react-dropzone';
import { TExtendedFile } from './Thumbnails';
import { ReactNode } from 'react';

type DropzoneProps = {
    onDrop?: (files: File[]) => void;
    className?: string;
    children?: React.ReactNode;
    maxFiles?: number;
    dragActiveElement?: ReactNode;
    dragInactiveElement?: ReactNode;
};
export function Dropzone({
    onDrop = () => {},
    className,
    children,
    maxFiles = 1,
    dragActiveElement = <p className='text-center'>Suelta tu archivo</p>,
    dragInactiveElement = (
        <p className='flex flex-col items-center text-center gap-2'>
            Arrastra o clicka aquí
            <span className='text-primary/60 text-sm'>
                para seleccionar tu archivo
            </span>
        </p>
    ),
}: DropzoneProps) {
    const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
        useDropzone({
            maxFiles,
            accept: {
                'image/*': [],
            },
            onDrop: () => {},
            onDropAccepted: (files) => {
                console.log('Accepted files:', files);
                onDrop(files);
            },
            onDropRejected: (files) => {
                console.log('Rejected files:', files);
            },
        });

    return (
        <div
            {...getRootProps({
                // Here you can add event handlers that will be executed BEFORE the ones registered by the library
            })}
            className={cn(
                `p-4 border border-primary/20 border-dashed rounded`,
                className
            )}
        >
            <Input type='file' {...getInputProps()} />
            {isDragActive ? dragActiveElement : dragInactiveElement}
        </div>
    );
}
