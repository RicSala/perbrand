'use client';

import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { TFeedback, TStatus } from '@/types/types';
import { z } from 'zod';
import { IdeaRequestFormSchema } from '@/types/schemas';
import { toast } from 'sonner';
import Spinner from '../icons/spinner';
import { apiClient } from '@/lib/apiClient';
import { InputFaces } from './InputFaces';
import { DevTool } from '@hookform/devtools';

type ThumbsFeedbackProps = { className?: string; component: string };
export function ThumbsFeedback({ className }: ThumbsFeedbackProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className={cn(`flex justify-end text-primary/50`, className)}>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Gracias por tu feedback</DialogTitle>
                        <DialogDescription>
                            ¿Qué es lo que no te ha gustado de este resultado?
                        </DialogDescription>
                    </DialogHeader>
                    <FeedbackForm />
                    <DialogFooter></DialogFooter>
                </DialogContent>
            </Dialog>
            <Button
                variant='ghost'
                className='rounded-full hover:bg-green-200 hover:text-green-700 h-8 w-8 p-0'
                onClick={() => setIsDialogOpen(true)}
            >
                <ThumbsUp size={15} />
            </Button>
            <Button
                variant='ghost'
                className='rounded-full hover:bg-red-200 hover:text-red-700 h-8 w-8 p-0'
                onClick={() => setIsDialogOpen(true)}
            >
                <ThumbsDown size={15} />
            </Button>
        </div>
    );
}

export const FeedbackFormSchema = z.object({
    feedback: z.enum(['yes', 'no', 'partially']),
    comment: z.string().optional(),
});

type FeedbackFormProps = {
    feedbackQuestion?: string;
    onSubmit?: (data: any) => void;
};

export const FeedbackForm = ({
    feedbackQuestion = '¿Qué opinas de esta sección?',
    onSubmit: onSubmitProp,
}: FeedbackFormProps) => {
    const [status, setStatus] = useState<TStatus>('idle');
    const form = useForm({
        resolver: zodResolver(FeedbackFormSchema),
        defaultValues: {
            feedback: 'yes' as TFeedback,
            comment: '',
        },
    });

    const feedbackValue = form.watch('feedback');
    const setFeedbackValue = useCallback(
        (newValue: TFeedback) => {
            console.log('setFeedbackValue called with value: ', newValue);
            form.setValue('feedback', newValue);
        },
        [form]
    );

    const onSubmit = async (data: any) => {
        setStatus('loading');
        console.log(data);
        const res = await apiClient.post('/mg', data);
        console.log(res);
        onSubmitProp && onSubmitProp(data);
        setStatus('success');
        toast.success('Gracias por tu feedback', {
            description: 'Nos ayudará a mejorar el producto',
        });
        setStatus('idle');
    };

    const onError = (error: any) => {
        console.log(error);
    };

    return (
        <Form {...form}>
            {feedbackValue}
            <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className='flex flex-col gap-4'
            >
                <FormField
                    control={form.control}
                    name='feedback'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className=''>
                                    {feedbackQuestion}
                                </FormLabel>
                                <FormControl>
                                    <InputFaces
                                        value={field.value}
                                        setValue={setFeedbackValue}
                                        className='flex'
                                    />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={form.control}
                    name='comment'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className=''>Comentario</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    className='resize-none'
                                    placeholder='El texto generado no es claro, me gustaría que...'
                                />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='flex gap-2' disabled={status === 'loading'}>
                    {status !== 'loading' ? 'Enviar' : <Spinner />}
                </Button>
            </form>
            <DevTool control={form.control} /> {/* set up the dev tool */}
        </Form>
    );
};
