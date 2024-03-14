'use client';
import { Heading } from '@/components/shared/Heading';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import DraftModal from './draftModal';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import ViewMore from './viewMore';

interface userPostsProps {
    userPosts: any;
}

export default function Scheduler({ userPosts }: userPostsProps) {
    const { data } = useSession();
    const currentDate = new Date();
    const [accountLinked, setAccountLinked] = useState(false);
    const [selectedDraftId, setSelectedDraftId] = useState<number>();

    const [startDate, setStartDate] = useState<any>(
        currentDate.toISOString().split('Tt')[0]
    );
    const [endDate, setEndDate] = useState<any>(
        new Date(currentDate.setDate(currentDate.getDate() + 3))
            .toISOString()
            .split('Tt')[0]
    );
    const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
    const [betweenDates, setBetweenDates] = useState<any>([]);

    const [viewMoreModal, setViewMoreModal] = useState(false);
    const [editDetailsModal, setEditDetailsModal] = useState(false);
    const [scheduledPosts, setScheduledPosts] = useState<any>([]);
    const [isOpen, setIsOpen] = useState<any>();

    const popoverRef: any = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target)
            ) {
                setIsOpen(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getDates = (startDate: any, endDate: any) => {
        const dateList = [];
        const currentDate = new Date(startDate);
        const end = new Date(endDate);

        while (currentDate <= end) {
            dateList.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dateList;
    };

    useEffect(() => {
        const datesBetween = getDates(startDate, endDate);

        setBetweenDates(
            datesBetween.map((date) => {
                const getDataByDate: any = scheduledPosts?.scheduledPost?.find(
                    (item: any) =>
                        new Date(item?.date)?.toDateString() ===
                        new Date(date?.toISOString())?.toDateString()
                );

                if (getDataByDate) {
                    return {
                        date: new Date(date)?.toISOString(),
                        ...getDataByDate,
                    };
                } else {
                    return {
                        date: new Date(date)?.toISOString(),
                    };
                }
            })
        );
    }, [startDate, endDate, scheduledPosts]);

    const handleNext = () => {
        const newStartDate = new Date(startDate);
        const newEndDate = new Date(endDate);
        newStartDate.setDate(newStartDate.getDate() + 4);
        newEndDate.setDate(newEndDate.getDate() + 4);
        setStartDate(newStartDate.toISOString().split('T')[0]);
        setEndDate(newEndDate.toISOString().split('T')[0]);
        handleGetSchedulePosts();
    };

    const handlePrevious = () => {
        const newStartDate = new Date(startDate);
        const newEndDate = new Date(endDate);
        newStartDate.setDate(newStartDate.getDate() - 4);
        newEndDate.setDate(newEndDate.getDate() - 4);
        setStartDate(newStartDate.toISOString().split('T')[0]);
        setEndDate(newEndDate.toISOString().split('T')[0]);
        handleGetSchedulePosts();
    };

    const formattedStartDate = new Date(startDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
    });
    const formattedEndDate = new Date(endDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
    });

    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentYear = new Date().getFullYear();

    /**
     * api to check if linkedin is connected or not
     */
    // TODO: If this function just checks if the user has a Linkedin account connected...why are we calling it "handlePostRequest"?
    // TODO: And why are we including the postData in the request? It's not being used in the backend.
    const handlePostRequest = async () => {
        try {
            const postData = {
                userId: data?.user?.id, //TODO: compare this id with the one in the server session
                scheduledPost: betweenDates,
            };

            const response = await axios.post(
                //TODO: we have a "apiClient" that is already configured with the base URL. We should use it instead of axios
                'http://localhost:3000/api/scheduled-post/schedule',
                postData
            );

            setAccountLinked(response?.data?.loginUser);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    /**
     * api to create schedule post api
     */

    const handleCreateSchedulePost = async (selectedData: any, date: any) => {
        try {
            const { date, ...rest } = selectedData;

            const postData = {
                userId: data?.user?.id,
                date,
                scheduledPost: rest,
            };

            const response = await axios.post(
                'http://localhost:3000/api/scheduled-post',
                postData
            );
            handleGetSchedulePosts();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    /**
     * api to fetch all scheduled post
     */

    const handleGetSchedulePosts = useCallback(async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/scheduled-post?UserId=${data?.user?.id}`
            );
            setScheduledPosts(response?.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }, [data]);

    useEffect(() => {
        if (data?.user?.id) {
            handleGetSchedulePosts();
        }
    }, [data, handleGetSchedulePosts]);

    /**
     * Api to delete / unschedule post
     */
    const handleDeleteSchedulePosts = async (
        id: string,
        deleteData: boolean
    ) => {
        try {
            const response = await axios.delete(
                `http://localhost:3000/api/scheduled-post?id=${id}&deleteData=${deleteData}`
            );
            handleGetSchedulePosts();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // if linkedin not connected then function will be called when clicked connect linkedin button
    const handleLinkedinLogin = async () => {
        const res = await signIn('linkedin');
    };

    const handleSelect = async (item: any, key: number) => {
        let selectedData = betweenDates.map((items: any, index: number) => {
            if (index === selectedDraftId) {
                return {
                    ...items,
                    ...item,
                    time: new Date().toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    }),
                };
            }
            return items;
        });

        const newUploadedData = selectedData?.filter(
            (item: any, key: number) => key === selectedDraftId
        );

        if (newUploadedData?.length) {
            handleCreateSchedulePost(
                newUploadedData[0],
                newUploadedData[0]?.date
            );
        }
        setBetweenDates(selectedData);
        setIsVoiceModalOpen(false);
    };

    const handleClickDraftBtn = (key: number) => {
        setSelectedDraftId(key);
    };

    return (
        <>
            <div>
                <Separator />
                <Heading
                    className='mt-6'
                    title='Schedule'
                    subtitle='Here are the posts scheduled for upcoming days.'
                />

                <section className='flex justify-between items-center'>
                    <ChevronLeft
                        onClick={handlePrevious}
                        className='hover:bg-gray-200 rounded-full p-1.5'
                        size={40}
                    />
                    <div className='flex justify-between items-center flex-col text-lg'>
                        <p>
                            {`${formattedStartDate} - ${formattedEndDate}, ${currentYear}`}
                        </p>
                        <p>{currentTimezone}</p>
                    </div>
                    <ChevronRight
                        onClick={handleNext}
                        className='hover:bg-gray-200 rounded-full p-1.5'
                        size={40}
                    />
                </section>

                <div className='my-[2rem]'>
                    <Separator />
                </div>
                <div>
                    <div className='lg:flex grid w-full gap-8 pb-8 h-full'>
                        {betweenDates.map((item: any, key: number) => {
                            return (
                                <div className='w-full' key={item?.date}>
                                    <div key={key} className='flex gap-[10px]'>
                                        <div className='font-semibold text-[16px]'>
                                            {new Date(
                                                item?.date
                                            ).toLocaleString('en-US', {
                                                month: 'long',
                                            })}
                                        </div>
                                        <div className='font-normal text-[14px] flex items-center'>
                                            {new Date(item?.date).getDate() < 10
                                                ? '0'
                                                : ''}
                                            {new Date(item?.date).getDate()}
                                        </div>
                                    </div>
                                    <div className='w-full mt-[2rem] transition-all duration-150 bg-gray-50 border px-4 py-5 border-gray-300 border-dashed shadow-sm rounded-2xl hover:shadow-md hover:-translate-y-1 min-h-[226px]'>
                                        <div className='flex flex-col justify-between space-y-4'>
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className='text-sm font-medium text-gray-500'>
                                                    {item?.scheduledPost?.time}
                                                </p>
                                            </div>
                                            <div className='flex-1 flex items-center justify-center min-h-[100px]'>
                                                <p className='text-base italic font-medium text-gray-400 line-clamp-4'>
                                                    {item?.scheduledPost
                                                        ?.content
                                                        ? item?.scheduledPost
                                                              ?.content
                                                        : 'Empty...'}
                                                </p>
                                            </div>
                                            {!item?.scheduledPost?.content && (
                                                <div className='flex items-center gap-2'>
                                                    <Dialog
                                                        open={isVoiceModalOpen}
                                                        onOpenChange={
                                                            setIsVoiceModalOpen
                                                        }
                                                    >
                                                        <DialogTrigger asChild>
                                                            <div className='relative group w-full'>
                                                                <button
                                                                    onClick={async () => {
                                                                        handlePostRequest();
                                                                        handleClickDraftBtn(
                                                                            key
                                                                        );
                                                                    }}
                                                                    type='button'
                                                                    className='flex items-center justify-center w-full p-2 text-sm font-medium leading-6 text-gray-500 transition-all duration-150 rounded-full bg-gray-50 group hover:text-gray-700 hover:ring-gray-200 ring-1 ring-transparent'
                                                                >
                                                                    <span className='sr-only'>
                                                                        Pick a
                                                                        Draft
                                                                    </span>
                                                                    <svg
                                                                        aria-hidden='true'
                                                                        className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        viewBox='0 0 20 20'
                                                                        fill='currentColor'
                                                                    >
                                                                        <path
                                                                            fill-rule='evenodd'
                                                                            d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z'
                                                                            clip-rule='evenodd'
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                                <span className='whitespace-nowrap absolute px-3 py-2 text-xs font-semibold text-white transition-all duration-200 scale-0 -translate-x-1/2 bg-gray-900 rounded-md -top-10 group-hover:scale-100 left-1/2'>
                                                                    Pick a Draft
                                                                </span>
                                                            </div>
                                                        </DialogTrigger>
                                                        <DialogContent
                                                            className={`${accountLinked ? 'max-w-full md:max-w-4xl' : ''}`}
                                                        >
                                                            <DraftModal
                                                                handleSelect={
                                                                    handleSelect
                                                                }
                                                                userPosts={
                                                                    userPosts
                                                                }
                                                                accountLinked={
                                                                    accountLinked
                                                                }
                                                                setIsVoiceModalOpen={
                                                                    setIsVoiceModalOpen
                                                                }
                                                                handleLinkedinLogin={
                                                                    handleLinkedinLogin
                                                                }
                                                            />
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            )}

                                            {item?.scheduledPost?.content && (
                                                <div className='flex items-center gap-2'>
                                                    <Dialog
                                                        open={viewMoreModal}
                                                        onOpenChange={
                                                            setViewMoreModal
                                                        }
                                                    >
                                                        <DialogTrigger asChild>
                                                            <div className='relative group w-full'>
                                                                <button
                                                                    onClick={() => {
                                                                        setViewMoreModal(
                                                                            true
                                                                        );
                                                                        handleClickDraftBtn(
                                                                            key
                                                                        );
                                                                    }}
                                                                    type='button'
                                                                    className='flex items-center justify-center w-full p-2 text-sm font-medium leading-6 text-gray-500 transition-all duration-150 rounded-full bg-gray-50 group hover:text-gray-700 hover:ring-gray-200 ring-1 ring-transparent'
                                                                >
                                                                    <span className='sr-only'>
                                                                        View
                                                                        Post
                                                                    </span>
                                                                    <svg
                                                                        aria-hidden='true'
                                                                        className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        viewBox='0 0 20 20'
                                                                        fill='currentColor'
                                                                    >
                                                                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
                                                                        <path
                                                                            fill-rule='evenodd'
                                                                            d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                                                            clip-rule='evenodd'
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                                <span className='whitespace-nowrap absolute px-3 py-2 text-xs font-semibold text-white transition-all duration-200 scale-0 -translate-x-1/2 bg-gray-900 rounded-md -top-10 group-hover:scale-100 left-1/2'>
                                                                    View Post
                                                                </span>
                                                            </div>
                                                        </DialogTrigger>
                                                        <DialogContent
                                                            className={`${accountLinked ? 'max-w-full md:max-w-4xl' : ''}`}
                                                        >
                                                            <ViewMore
                                                                data={item}
                                                                setEditDetailsModal={
                                                                    setEditDetailsModal
                                                                }
                                                                betweenDates={
                                                                    betweenDates
                                                                }
                                                                selectedDraftId={
                                                                    selectedDraftId
                                                                }
                                                                setViewMoreModal={
                                                                    setViewMoreModal
                                                                }
                                                            />
                                                        </DialogContent>
                                                    </Dialog>

                                                    <div className='relative group w-full'>
                                                        <button
                                                            className='flex items-center justify-center w-full p-2 text-sm font-medium leading-6 text-gray-500 transition-all duration-150 rounded-full bg-gray-50 group hover:text-gray-700 hover:ring-gray-200 ring-1 ring-transparent'
                                                            onClick={() => {
                                                                if (
                                                                    isOpen ===
                                                                    key
                                                                ) {
                                                                    setIsOpen(
                                                                        null
                                                                    );
                                                                } else {
                                                                    setIsOpen(
                                                                        key
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <svg
                                                                aria-hidden='true'
                                                                className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                viewBox='0 0 20 20'
                                                                fill='currentColor'
                                                            >
                                                                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                                                            </svg>
                                                        </button>
                                                        {isOpen == key && (
                                                            <ul
                                                                ref={popoverRef}
                                                                className='absolute text-gray-700 pt-1'
                                                            >
                                                                <li>
                                                                    <button
                                                                        onClick={() =>
                                                                            handleDeleteSchedulePosts(
                                                                                item?.id,
                                                                                false
                                                                            )
                                                                        }
                                                                        className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-2 flex whitespace-no-wrap gap-[5px] cursor-pointer'
                                                                    >
                                                                        <svg
                                                                            aria-hidden='true'
                                                                            className='w-5 h-5 text-gray-500 group-hover:text-gray-600'
                                                                            xmlns='http://www.w3.org/2000/svg'
                                                                            viewBox='0 0 20 20'
                                                                            fill='currentColor'
                                                                        >
                                                                            <path
                                                                                fill-rule='evenodd'
                                                                                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                                                                                clip-rule='evenodd'
                                                                            ></path>
                                                                        </svg>{' '}
                                                                        <span className='text-[16px]'>
                                                                            Unschedule
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        onClick={() =>
                                                                            handleDeleteSchedulePosts(
                                                                                item?.id,
                                                                                true
                                                                            )
                                                                        }
                                                                        className='w-full bg-gray-200 hover:bg-gray-400 py-2 px-2 flex whitespace-no-wrap gap-[5px] cursor-pointer'
                                                                    >
                                                                        <svg
                                                                            aria-hidden='true'
                                                                            className='w-5 h-5 text-gray-500 group-hover:text-gray-600'
                                                                            xmlns='http://www.w3.org/2000/svg'
                                                                            viewBox='0 0 20 20'
                                                                            fill='currentColor'
                                                                        >
                                                                            <path
                                                                                fill-rule='evenodd'
                                                                                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                                                                                clip-rule='evenodd'
                                                                            ></path>
                                                                        </svg>{' '}
                                                                        <span className='text-[16px]'>
                                                                            Delete
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
