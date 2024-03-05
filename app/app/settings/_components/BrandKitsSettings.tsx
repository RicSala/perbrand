'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SettingsSectionHeader } from './SettingsSectionHeader';
import { ColorPaletteSelect } from '../../carrousel/_components/sidebar/ColorPaletteSelector';
import { FontSelector } from '@/components/shared/FontSelector';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronsUpDown, ThumbsUp } from 'lucide-react';
import { fontsMap } from '@/config/fonts';
import { Brand } from '@prisma/client';
import { ColorPalette } from '../../carrousel/_components/sidebar/ColorPalette';
import { TFontName } from '@/types/types';
import { saveBrandKit } from '@/app/_actions/settings-actions';
import { toast } from 'sonner';
import { BrandKitCard } from './BrandKitCard';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { brandKitsSettingsSchema } from '@/types/schemas';
import { BrandKitEditForm } from './BrandKitEditForm';

type BrandKitsSettingsForm = z.infer<typeof brandKitsSettingsSchema>;

type BrandKitsSettingsProps = {
    userBrandKits: Brand[];
};

export const BrandKitsSettings = ({
    userBrandKits,
}: BrandKitsSettingsProps) => {
    const { data: session } = useSession();
    const [status, setStatus] = useState('idle');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const router = useRouter();
    const defaultValues: Pick<
        Brand,
        'name' | 'handle' | 'imageUrl' | 'fontPalette' | 'colorPalette' | 'id'
    > = {
        id: 'new',
        name: '',
        handle: '',
        imageUrl: '',
        fontPalette: {
            handWriting: 'sofia',
            primary: 'sofia',
            secondary: 'sofia',
        },
        colorPalette: {
            accent: '#000000',
            background: '#000000',
            font: '#000000',
        },
    };

    return (
        <>
            <div className='flex justify-between items-start'>
                <SettingsSectionHeader
                    title='Configuración de marca'
                    subtitle='Personaliza el contenido y la apariencia de tu marca'
                    className='mb-8'
                />
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger>
                        <Button>+ Añadir Marca</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <div className='max-w-md mt-4'>
                            <BrandKitEditForm
                                onSave={() => {
                                    setIsDialogOpen(false);
                                }}
                                defaultValues={defaultValues}
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1  gap-8'>
                {userBrandKits.map((brand) => (
                    <BrandKitCard brand={brand} key={brand.id} />
                ))}
            </div>
        </>
    );
};
