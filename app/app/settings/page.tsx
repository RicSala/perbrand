import { Heading } from '@/components/shared/Heading';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AccountSettings } from './_components/AccountSettings';
import { IASettings } from './_components/IASettings';
import { BrandKitsSettings } from './_components/BrandKitsSettings';
import { getUserBrandKits } from '@/app/_actions/settings-actions';
import { signIn } from 'next-auth/react';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

export default async function IdeasPage() {
    const session: Session | null = await getServerSession(authOptions);

    if (!session) {
        signIn();
    }

    const userBrandKits = await getUserBrandKits(session!.user.id);
    return (
        <>
            <Heading
                className='mt-6'
                title='Configuración'
                subtitle='Configura tu espacio de trabajo'
            />
            <Separator />
            <div className='mt-6 space-y-4 2xl:flex gap-8'>
                <Tabs defaultValue='general' className='w-full'>
                    <div className='overflow-x-auto mb-8 '>
                        <TabsList className='flex gap-2 w-fit'>
                            <TabsTrigger value='general'>General</TabsTrigger>
                            <TabsTrigger value='password'>
                                Subscripción
                            </TabsTrigger>
                            <TabsTrigger value='team'>Equipo</TabsTrigger>
                            <TabsTrigger value='ai'>IA</TabsTrigger>
                            <TabsTrigger value='brands'>Tus Marcas</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value='general'>
                        <AccountSettings />
                    </TabsContent>
                    <TabsContent value='password'></TabsContent>
                    <TabsContent value='team'></TabsContent>
                    <TabsContent value='ai'>
                        <IASettings />
                    </TabsContent>
                    <TabsContent value='brands'>
                        <BrandKitsSettings userBrandKits={userBrandKits} />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
