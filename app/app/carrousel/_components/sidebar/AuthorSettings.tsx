import { ToggleableCollapsible } from '@/components/shared/ToggleableCollapsible';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useContext, useState } from 'react';
import { CarouselContext } from '../ContextProvider';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';

export const AuthorSettings = () => {
    const {
        carousel,
        carousel: {
            author: { name, handle, pictureUrl },
            settings: { showAuthor, showName },
        },
        editImage,
        editName,
        editHandle,
        toggleShowAuthor,
        toggleShowName,
        toggleShowProfilePic,
        toggleShowHandle,
        toggleShowAuthorInFirstOnly,
    } = useContext(CarouselContext);

    return (
        <ToggleableCollapsible
            label='Info del autor'
            enabled={showAuthor}
            setEnabled={toggleShowAuthor}
        >
            <div className='space-y-4'>
                <div>
                    <h4 className='font-semibold'>Brand kit</h4>
                    <p className='text-primary/50 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        atque quaerat ab excepturi
                    </p>
                </div>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <Label htmlFor='name'>Nombre</Label>
                        <Switch
                            id='name'
                            checked={carousel.settings.showName}
                            onCheckedChange={toggleShowName}
                        />
                    </div>

                    <Input
                        placeholder='Nombre'
                        value={name!}
                        onChange={(event) => {
                            editName(event.target.value);
                        }}
                    />
                </div>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <Label htmlFor='pic'>Foto de perfil</Label>
                        <Switch
                            id='pic'
                            checked={carousel.settings.showProfilePic}
                            onCheckedChange={toggleShowProfilePic}
                        />
                    </div>
                    <Input
                        placeholder='Nombre'
                        id='profilePic'
                        value={pictureUrl!}
                        onChange={(event) => {
                            editImage(event.target.value);
                        }}
                    />
                </div>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <Label htmlFor='handle'>Handle</Label>
                        <Switch
                            id='handle'
                            checked={carousel.settings.showHandle}
                            onCheckedChange={toggleShowHandle}
                        />
                    </div>{' '}
                    <Input
                        placeholder='Handle'
                        id='handle'
                        value={handle!}
                        onChange={(event) => {
                            editHandle(event.target.value);
                        }}
                    />
                </div>
                <div className='flex gap-2 items-center'>
                    <Checkbox
                        checked={carousel.settings.showAuthorInFirstOnly}
                        onCheckedChange={toggleShowAuthorInFirstOnly}
                    />
                    <Label className='text-xs font-normal italic'>
                        Mostrar solo en primera y última página
                    </Label>
                </div>
            </div>
        </ToggleableCollapsible>
    );
};
