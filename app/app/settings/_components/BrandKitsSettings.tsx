'use client';

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { z } from 'zod';
import { SettingsSectionHeader } from './SettingsSectionHeader';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Brand } from '@prisma/client';
import { BrandKitCard } from './BrandKitCard';
import { useRouter } from 'next/navigation';
import { brandKitsSettingsSchema } from '@/types/schemas';
import { BrandKitEditForm } from './BrandKitEditForm';
import { defaultValues } from '@/config/const';

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
