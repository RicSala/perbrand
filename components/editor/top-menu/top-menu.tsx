'use client';

import { ButtonWithTooltip } from '@/components/shared/ButtonWithTooltip';
import { Button } from '@/components/ui/button';
import { Editor } from '@tiptap/react';
import {
    GalleryHorizontalIcon,
    ImageIcon,
    Paperclip,
    Redo2,
    Sheet,
    Undo2,
    VideoIcon,
} from 'lucide-react';

type TopMenuProps = {
    editor: Editor | null;
    handleDownload: () => void;
};

export default function TopMenu({ editor, handleDownload }: TopMenuProps) {
    if (!editor) {
        return null;
    }

    const editorTopMenuItems = [
        {
            label: 'B',
            description: 'Bold',
            command: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold'),
            className: 'font-bold',
        },
        {
            label: 'I',
            description: 'Italic',
            command: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic'),
            className: 'italic',
        },
        {
            label: 'S',
            description: 'Strike',
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
            description: 'Undo',
            command: () => editor.chain().focus().undo().run(),
            //   can: () => editor.can().undo().run(),
        },
        {
            label: <Redo2 size={15} />,
            description: 'Redo',
            command: () => editor.chain().focus().redo().run(),
            //   can: () => editor.can().redo().run(),
        },
    ];

    const otherActions = [
        {
            description: 'Elegir borrador',
            command: () => {
                console.log('Eligiendo borrador');
            },
            label: <Paperclip size={15} />,
        },
        {
            description: 'Elegir imagen',
            command: () => {
                console.log('Eligiendo imagen');
            },
            label: <ImageIcon size={15} />,
        },
        {
            description: 'Elegir vídeo',
            command: () => {
                console.log('Eligiendo vídeo');
            },
            label: <VideoIcon size={15} />,
        },
        {
            description: 'Elegir carrousel',
            command: () => {
                console.log('Eligiendo carrousel');
            },
            label: <GalleryHorizontalIcon size={15} />,
        },
    ];

    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                {editorTopMenuItems.map((button, idx) => (
                    <EditorTopMenuButton
                        key={idx}
                        label={button.label}
                        description={button.description}
                        command={button.command}
                        isActive={button.isActive}
                        className={button.className}
                    />
                ))}
            </div>
            <div className='flex gap-2'>
                {otherActions.map((button, idx) => (
                    <EditorTopMenuButton
                        key={idx}
                        label={button.label}
                        description={button.description}
                        command={button.command}
                    />
                ))}
            </div>
        </div>
    );
}

type EditorTopMenuButtonProps = {
    label: string | JSX.Element;
    description?: string;
    command?: () => void;
    isActive?: () => boolean;
    className?: string;
};

export const EditorTopMenuButton = ({
    label,
    description,
    command,
    isActive,
    className,
}: EditorTopMenuButtonProps) => {
    return (
        <ButtonWithTooltip
            variant='outline'
            size={'icon'}
            onClick={command}
            className={`${className}
                ${isActive ? (isActive() ? 'is-active' : '') : ''}
            `}
            label={description}
            icon={label}
        >
            {/* {label} */}
        </ButtonWithTooltip>
    );
};
