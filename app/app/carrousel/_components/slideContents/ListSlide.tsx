import { TBrand } from '@/types/types';
import { useContext } from 'react';
import { CarouselContext } from '../ContextProvider';
import ContentEditable from 'react-contenteditable';

type ListSlideProps = {
    brand: TBrand;
    title: string;
    paragraphs: string[];
};

export const ListSlide = ({ brand, paragraphs, title }: ListSlideProps) => {
    const { editTitle, editDescription } = useContext(CarouselContext);

    return (
        <div className='flex flex-col gap-4 h-full p-4 z-10'>
            <ContentEditable
                onChange={(event) => {
                    editTitle(event.target.value);
                }}
                html={`<h1>${title}</h1>`}
                className='text-[2em]
                    focus:outline-none focus:ring-0 focus:border-transparent
                    '
                style={{
                    fontSize: '3rem',
                    lineHeight: 1,
                }}
            />

            <ul
                className='px-6 flex flex-col gap-2'
                style={{
                    fontWeight: 300,
                }}
            >
                {paragraphs.map((item, index) => {
                    return (
                        <li key={index}>
                            <div
                                className='flex gap-2 items-start'
                                style={{
                                    fontSize: '1.2rem',
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: 700,
                                    }}
                                >
                                    {index + 1}
                                </span>
                                <p>{item}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
