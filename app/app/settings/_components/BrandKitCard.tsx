'use client';
import { ColorPalette } from '../../carrousel/_components/sidebar/ColorPalette';
import { Brand } from '@prisma/client';
import { fontsMap } from '@/config/fonts';
import { TFontName } from '@/types/types';
import { Button } from '@/components/ui/button';
import { deleteBrand } from '@/app/_actions/settings-actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BrandKitEditForm } from './BrandKitEditForm';
import { useState } from 'react';
import Image from 'next/image';
import { Select, SelectTrigger } from '@/components/ui/select';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

type BrandKitCardProps = {
    brand: Brand;
};

export const BrandKitCard = ({ brand }: BrandKitCardProps) => {
    const router = useRouter();
    const handleDelete = async () => {
        await deleteBrand(brand.id);
        toast.success('Marca eliminada');
        router.refresh();
    };
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className='rounded-lg p-2 flex justify-between border items-center rounded-l-full gap-4'>
            <div className='relative h-20 w-20 rounded-full overflow-hidden'>
                <Image alt='brand profile pic' src={brand.imageUrl} fill />
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>{brand.name}</p>
                <p className='text-primary/50'>{brand.handle}</p>
            </div>
            <div className='flex flex-col'>
                <ColorPalette
                    className='w-16'
                    colors={brand.colorPalette}
                    onClick={() => {}}
                />
                <div
                    className={`h-6 w-6 rounded-full mt-2 ${
                        fontsMap[brand.fontPalette.primary as TFontName]
                            .className
                    }`}
                >
                    {brand.fontPalette.primary}
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant={'ghost'}
                        size={'icon'}
                        className='rounded-full border'
                    >
                        <MoreHorizontal size={20} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        onClick={() => {
                            setIsDialogOpen(true);
                        }}
                    >
                        Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDelete}>
                        Borrar
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <BrandKitEditForm
                        defaultValues={brand}
                        onSave={() => {
                            setIsDialogOpen(false);
                        }}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};
