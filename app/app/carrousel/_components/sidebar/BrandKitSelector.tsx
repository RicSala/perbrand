import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { TBrand } from '@/types/types';
import { useState } from 'react';

type BrandKitSelectorProps = {
    brands?: TBrand[];
    onBrandChange?: (brandId: string) => void;
};
export function BrandKitSelector({
    brands,
    onBrandChange = () => {},
}: BrandKitSelectorProps) {
    const [brand, setBrand] = useState<string>();
    return (
        <Select
            value={brand}
            defaultValue={''}
            onValueChange={(brandId: string) => {
                setBrand(brandId);
                onBrandChange(brandId);
            }}
        >
            <SelectTrigger>
                <SelectValue placeholder='Selecciona tu marca' />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup></SelectGroup>
                {brands?.map((brand) => {
                    return (
                        <SelectItem key={brand.id} value={brand.id}>
                            {brand.name}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
}
