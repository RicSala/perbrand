import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect } from 'react';

export type TExtendedFile = File & {
    preview: string;
};

type ThumbnailsProps = {
    files: TExtendedFile[];
    classNamesImage?: string;
    classNamesThumbnails?: string;
};

export function Thumbnails({
    files,
    classNamesImage,
    classNamesThumbnails,
}: ThumbnailsProps) {
    useEffect(() => {
        // Clean up function to make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            {files.map((file) => (
                <div
                    key={file.name}
                    className={cn(
                        `w-8 h-8 relative overflow-hidden`,
                        classNamesThumbnails
                    )}
                >
                    <Image
                        src={file.preview}
                        // Revoke data uri after image is loaded, otherwise we will keep the memory used by the image
                        onLoad={() => {
                            URL.revokeObjectURL(file.preview);
                        }}
                        fill
                        alt='Image preview'
                        className={cn(`object-cover`, classNamesImage)}
                    />
                </div>
            ))}
        </>
    );
}
