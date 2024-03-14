import { TBrand, TSlideDesignNames } from '@/types/types';
import { BigNumber } from './slideContents/BigNumberSlide';
import { ImageAndTextHorizontal } from './slideContents/ImageAndTextHorizontal';
import { ImageAndTextVertical } from './slideContents/ImageAndTextVertical';
import { ListSlide } from './slideContents/ListSlide';
import { TextOnlySlide } from './slideContents/TextOnlySlide';
import { CallToActionSlide } from './slideContents/CallToActionSlide';
import { CoverSlide } from './slideContents/CoverSlide';

type SlideDesignSelectorProps = {
    designId: string;
    setDesignId: (designId: TSlideDesignNames) => void;
    brand: TBrand;
};
export function SlideDesignSelector({
    designId,
    setDesignId,
    brand,
}: SlideDesignSelectorProps) {
    return <div></div>;
}

export const designMap = {
    ListSlide: ListSlide,
    BigNumberSlide: BigNumber,
    ImageAndTextHorizontal,
    ImageAndTextVertical,
    TextOnlySlide,
    CallToAction: CallToActionSlide,
    Cover: CoverSlide,
};

export const designNames = Object.keys(designMap);
