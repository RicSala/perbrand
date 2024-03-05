import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../ui/collapsible';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

type ToggleableCollapsibleProps = {
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
    label: string;
    children: React.ReactNode;
};

export const ToggleableCollapsible = ({
    enabled,
    setEnabled,
    label,
    children,
}: ToggleableCollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible
            open={isOpen && enabled}
            onOpenChange={(open) => {
                if (!enabled) return;
                setIsOpen(open);
            }}
        >
            <CollapsibleTrigger asChild>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <Switch
                            checked={enabled}
                            onCheckedChange={(value) => {
                                setEnabled(value);
                            }}
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        />
                        <Label htmlFor='name'>{label}</Label>
                    </div>
                    {enabled && <ChevronsUpDown size={20} className='ml-2' />}
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent className='py-4'>{children}</CollapsibleContent>
        </Collapsible>
    );
};
