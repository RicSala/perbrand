'use client';

import { cn } from '@/lib/utils';
import { TFeedback } from '@/types/types';
import { Button } from '../ui/button';

type InputFacesProps = {
    setValue: (feedback: TFeedback) => void;
    value: TFeedback;
    className?: string;
};

export const InputFaces = ({ value, setValue, className }: InputFacesProps) => {
    return (
        <ul className={cn(`inline-flex gap-4`, className)}>
            <Button
                type='button'
                onClick={() => {
                    setValue('no');
                }}
            ></Button>
            <li className='relative'>
                <input
                    id='emoji-rate-option-no'
                    className='emoji-rate__native-input sr-only'
                    type='radio'
                    name='emoji-rate-options'
                    checked={value === 'no'}
                    value='no'
                    onChange={(e) => {
                        console.log('value clicked');
                        setValue('no');
                        console.log('value set');
                    }}
                />

                <label
                    className='emoji-rate__custom-input--no relative
              block
              h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full shadow-lg transition-transform duration-300
              hover:-translate-y-1
              '
                    htmlFor='emoji-rate-option-no'
                >
                    <span className='sr-only'>No</span>

                    <svg
                        className='emoji-rate__icon block h-[inherit] w-[inherit] transition-colors duration-300'
                        viewBox='0 0 40 40'
                        aria-hidden='true'
                    >
                        <circle
                            id='emoji-rate-no-bg'
                            cx='20'
                            cy='20'
                            r='20'
                            className={cn(
                                `
                            fill-[#d1d5db]
                            `,
                                value === 'no' && 'fill-red-500'
                            )}
                        />
                        <g
                            id='emoji-rate-no-eyes'
                            className={`translate-x-0 translate-y-0
                  ${
                      value === 'no' &&
                      'animate-[emoji-rate-no-eyes-anim_2s_ease-in-out]'
                  } 
                  `}
                        >
                            <circle
                                cx='11.5'
                                cy='19.5'
                                r='2.5'
                                fill='currentColor'
                            />
                            <path
                                d='M7,15a18.059,18.059,0,0,0,4,2,18.06,18.06,0,0,0,5,1'
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                            />
                            <circle
                                cx='28.5'
                                cy='19.5'
                                r='2.5'
                                fill='currentColor'
                            />
                            <path
                                d='M33,15a18.059,18.059,0,0,1-4,2,18.06,18.06,0,0,1-5,1'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                            />
                        </g>
                        <path
                            id='emoji-rate-no-mouth'
                            className={`translate-x-0 translate-y-0
                  ${
                      value === 'no' &&
                      'animate-[emoji-rate-no-eyes-anim_2s_ease-in-out]'
                  } 
                  `}
                            d='M16,29a5,5,0,0,1,8,0'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                        />
                    </svg>
                </label>
            </li>

            <li className='relative'>
                <input
                    id='emoji-rate-option-partially'
                    className='emoji-rate__native-input sr-only'
                    type='radio'
                    name='emoji-rate-options'
                    value='partially'
                    onChange={(e) => {
                        console.log(e.target.value);
                        setValue(e.target.value as TFeedback);
                    }}
                />

                <label
                    className='emoji-rate__custom-input--partially relative block h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full shadow-lg transition-transform duration-300
          hover:-translate-y-1

          '
                    htmlFor='emoji-rate-option-partially'
                >
                    <span className='sr-only'>Partially</span>

                    <svg
                        className='emoji-rate__icon block h-[inherit] w-[inherit] transition-colors duration-300
            
            '
                        viewBox='0 0 40 40'
                        aria-hidden='true'
                    >
                        <circle
                            id='emoji-rate-partially-bg'
                            cx='20'
                            cy='20'
                            r='20'
                            className={cn(
                                `
                              fill-[#d1d5db]`,
                                value === 'partially' && 'fill-yellow-400'
                            )}
                        />
                        <g
                            id='emoji-rate-partially-eyes'
                            className={`origin-[20px_19.5px] translate-y-0

                  ${
                      value === 'partially' &&
                      'animate-[emoji-rate-partially-eyes-anim_2s_ease-in-out]'
                  }
                  `}
                        >
                            <circle
                                cx='11.5'
                                cy='19.5'
                                r='2.5'
                                fill='currentColor'
                            />
                            <circle
                                cx='28.5'
                                cy='19.5'
                                r='2.5'
                                fill='currentColor'
                            />
                        </g>
                        <line
                            id='emoji-rate-partially-mouth'
                            x1='15'
                            y1='28'
                            x2='25'
                            y2='28'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className={`
                  origin-[20px_28px]
                  translate-y-0
                  scale-100
                  ${
                      value === 'partially' &&
                      'animate-[emoji-rate-partially-mouth-anim_2s_ease-in-out]'
                  }`}
                        />
                    </svg>
                </label>

                <svg
                    className='emoji-rate__hand-icon pointer-events-none absolute bottom-0 left-0 block h-[40px] w-[40px] transition-all duration-300'
                    viewBox='0 0 40 40'
                    aria-hidden='true'
                >
                    <path
                        id='emoji-rate-partially-hand'
                        d='M17.279,28.031,4.323,29.1l-.33-3.986a2,2,0,0,0-3.986.33l.825,9.966a5.005,5.005,0,0,0,5.4,4.57l3.987-.33a3,3,0,0,0,2.742-3.237l-.33-3.986,4.983-.413a2,2,0,1,0-.33-3.986Z'
                        className={`origin-[7px_35px] translate-x-0
                fill-amber-600
                opacity-0
                ${
                    value === 'partially' &&
                    'animate-[emoji-rate-partially-hand-anim_2s_ease-in-out]'
                }
                `}
                    />
                </svg>
            </li>

            <li className='relative'>
                <input
                    id='emoji-rate-option-yes'
                    className='emoji-rate__native-input sr-only'
                    type='radio'
                    name='emoji-rate-options'
                    checked={value === 'yes'}
                    value='yes'
                    onChange={(e) => {
                        console.log(e.target.value);
                        setValue(e.target.value as TFeedback);
                    }}
                />

                <label
                    className='emoji-rate__custom-input--yes relative block h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full shadow-lg transition-transform duration-300           hover:-translate-y-1
'
                    htmlFor='emoji-rate-option-yes'
                >
                    <span className='sr-only'>Yes</span>

                    <svg
                        className='block h-[inherit] w-[inherit] transition duration-300'
                        viewBox='0 0 40 40'
                        aria-hidden='true'
                    >
                        <circle
                            id='emoji-rate-yes-bg'
                            cx='20'
                            cy='20'
                            r='20'
                            className={cn(
                                `
                  fill-[#d1d5db]
                              `,
                                value === 'yes' && 'fill-green-400'
                            )}
                        />
                        <g
                            id='emoji-rate-yes-eyes'
                            className={cn(
                                `
                              
                              `,
                                value === 'yes' &&
                                    'animate-[emoji-rate-yes-eyes-anim_1s_ease-in-out_infinite]'
                            )}
                        >
                            <path
                                d='M9,19a3,3,0,0,1,6,0'
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className=''
                            />
                            <path
                                d='M31,19a3,3,0,0,0-6,0'
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                            />
                        </g>
                        <g
                            id='emoji-rate-yes-mouth'
                            className={cn(`
                  origin-[50%_70%]
                  ${
                      value === 'yes' &&
                      'animate-[emoji-rate-yes-mouth-anim_1s_ease-in-out_infinite]'
                  }
                              `)}
                        >
                            <path
                                d='M26,25H14a1,1,0,0,0-1,1,7,7,0,0,0,14,0A1,1,0,0,0,26,25Z'
                                fill='currentColor'
                            />
                            <path
                                id='emoji-rate-yes-tongue'
                                d='M20,29a9.942,9.942,0,0,0-5.317,1.541,6.978,6.978,0,0,0,10.634,0A9.942,9.942,0,0,0,20,29Z'
                                fill='#6b7280'
                            />
                        </g>
                    </svg>
                </label>
            </li>
        </ul>
    );
};

export const KeyFrames = () => {
    return (
        <style jsx>{`
            @keyframes emoji-rate-no-eyes-anim {
                0%,
                100% {
                    transform: translateY(0) translateX(0);
                }
                30%,
                40% {
                    transform: translateY(4px) translateX(0);
                }
                50% {
                    transform: translateY(4px) translateX(-4px);
                }
                60% {
                    transform: translateY(4px) translateX(4px);
                }
                70% {
                    transform: translateY(4px) translateX(0px);
                }
            }

            @keyframes emoji-rate-partially-eyes-anim {
                0%,
                100% {
                    transform: translateY(0) scaleY(1);
                }
                30%,
                40%,
                60%,
                70% {
                    transform: translateY(-2px) scaleY(1);
                }
                50% {
                    transform: translateY(-2px) scaleY(0.1);
                }
            }

            @keyframes emoji-rate-partially-mouth-anim {
                0%,
                100% {
                    transform: translateY(0) scaleX(1);
                }
                30%,
                70% {
                    transform: translateY(-4px) scaleX(0.6);
                }
            }

            @keyframes emoji-rate-partially-hand-anim {
                0%,
                100% {
                    opacity: 0;
                    transform: translateX(0);
                }
                30%,
                70% {
                    opacity: 1;
                    transform: translateX(3px);
                }
            }

            @keyframes emoji-rate-yes-mouth-anim {
                0%,
                100% {
                    transform: translateY(0) scale(1);
                }
                30%,
                40% {
                    transform: translateY(-2.5px) scale(1.2);
                }
                55% {
                    transform: translateY(0) scale(1.2);
                }
                70% {
                    transform: translateY(-2.5px) scale(1.2);
                }
            }

            @keyframes emoji-rate-yes-eyes-anim {
                0%,
                100% {
                    transform: translateY(0);
                }
                30%,
                40% {
                    transform: translateY(-2.5px);
                }
                55% {
                    transform: translateY(0);
                }
                70% {
                    transform: translateY(-2.5px);
                }
            }
        `}</style>
    );
};
