'use client';
import { TDecorationId } from '@/types/types';
import { Decoration, decorationMap } from '../Decoration';
import { Button } from '@/components/ui/button';
import { ToggleableCollapsible } from '@/components/shared/ToggleableCollapsible';
import { ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useContext, useState } from 'react';
import { CarouselContext } from '../ContextProvider';

type DecorationSelectorProps = {
    onSelect: (decoration: TDecorationId) => void;
    selectedDecoration: TDecorationId;
};
export function DecorationSelector({
    onSelect,
    selectedDecoration,
}: DecorationSelectorProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const {
        toggleShowDecoration,
        carousel: {
            settings: { showDecoration },
        },
    } = useContext(CarouselContext);

    return (
        <>
            <ToggleableCollapsible
                label='Elementos Decorativos'
                enabled={showDecoration}
                setEnabled={toggleShowDecoration}
            >
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            variant={'outline'}
                            className='w-full mt-2 flex justify-between'
                        >
                            {selectedDecoration}
                            <ChevronDown />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className='overflow-y-scroll max-h-full'>
                        <div className='flex flex-col gap-2 '>
                            {Object.keys(decorationMap).map(
                                (decoration, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className='relative
                                            slide border-border px-4 py-4 text-[0.75em]
                     w-40 h-60 overflow-hidden border boroder-border
                                            '
                                            onClick={() => {
                                                onSelect(
                                                    decoration as TDecorationId
                                                );
                                                setIsDialogOpen(false);
                                            }}
                                        >
                                            <Decoration
                                                decorationid={
                                                    decoration as TDecorationId
                                                }
                                                primaryColor={'#000'}
                                                secondaryColor={'#000'}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </ToggleableCollapsible>
        </>
    );
}
