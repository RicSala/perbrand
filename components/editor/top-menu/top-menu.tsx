'use client';

import { Button } from '@/components/ui/button';
import { Editor } from '@tiptap/react';
import { Redo2, Undo2 } from 'lucide-react';

type TopMenuProps = {
    editor: Editor | null;
    handleDownload: () => void;
};

export default function TopMenu({ editor, handleDownload }: TopMenuProps) {
    if (!editor) {
        return null;
    }

    const buttonsConfig = [
        {
            label: 'B',
            command: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold'),
            className: 'font-bold',
        },
        {
            label: 'I',
            command: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic'),
            className: 'italic',
        },
        {
            label: 'S',
            command: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive('strike'),
            className: 'line-through',
        },
        // {
        //     label: 'clear marks',
        //     command: () => editor.chain().focus().unsetAllMarks().run(),
        // },
        // {
        //     label: 'clear nodes',
        //     command: () => editor.chain().focus().clearNodes().run(),
        // },
        {
            label: <Undo2 size={15} />,
            command: () => editor.chain().focus().undo().run(),
            //   can: () => editor.can().undo().run(),
        },
        {
            label: <Redo2 size={15} />,
            command: () => editor.chain().focus().redo().run(),
            //   can: () => editor.can().redo().run(),
        },
    ];
    return (
        <div className='flex gap-2'>
            {buttonsConfig.map((button, idx) => (
                <Button
                    key={idx}
                    variant='outline'
                    size={'icon'}
                    onClick={button.command}
                    // disabled={button.can ? !button.can() : false}
                    className={`${button.className}
                        ${
                            button.isActive
                                ? button.isActive()
                                    ? 'is-active'
                                    : ''
                                : ''
                        }
                    `}
                >
                    {button.label}
                </Button>
            ))}
        </div>
    );
}
