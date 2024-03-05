import { BubbleMenu, BubbleMenuProps, isNodeSelection } from '@tiptap/react';
import { BoldIcon, ItalicIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { EditorState } from '@tiptap/pm/state';

export type BubbleMenuItem = {
    name: string; // name of the menu item
    isActive: () => boolean; // function to check if the menu item is active
    command: () => void; // function to execute the command
    icon: typeof BoldIcon; // icon to display
};

export const EditorBubbleMenu = (props: Omit<BubbleMenuProps, 'children'>) => {
    const items: BubbleMenuItem[] = [
        {
            name: 'bold',
            isActive: () => props.editor!.isActive('bold'),
            command: () => props.editor!.chain().focus().toggleBold().run(),
            icon: BoldIcon,
        },
        {
            name: 'italic',
            isActive: () => props.editor!.isActive('italic'),
            command: () => props.editor!.chain().focus().toggleItalic().run(),
            icon: ItalicIcon,
        },
        // {
        //     name: 'strike',
        //     isActive: () => props.editor!.isActive('strike'),
        //     command: () => props.editor!.chain().focus().toggleStrike().run(),
        //     icon: StrikethroughIcon,
        // },
        // {
        //     name: 'code',
        //     isActive: () => props.editor!.isActive('code'),
        //     command: () => props.editor!.chain().focus().toggleCode().run(),
        //     icon: CodeIcon,
        // },
    ];

    const bubbleMenuProps = {
        ...props, // pass all the received props to the BubbleMenu component, and add / override the following props:

        shouldShow: ({
            state,
            editor,
        }: {
            state: EditorState;
            editor: any;
        }) => {
            const { selection } = state; // get the current selection
            const { empty } = selection; // check if the selection is empty

            // don't show bubble menu if:
            // - the selected node is an image
            // - the selection is empty
            // - the selection is a node selection (for drag handles)
            if (
                editor.isActive('image') ||
                empty ||
                isNodeSelection(selection)
            ) {
                return false;
            }
            return true;
        },

        // Options for the tippy.js tooltip library
        tippyOptions: {
            moveTransition: 'transform 0.15s ease-out',
            onHidden: () => {
                // setIsNodeSelectorOpen(false);
                // setIsColorSelectorOpen(false);
                // setIsLinkSelectorOpen(false);
            },
        },
    };

    //   const [isNodeSelectorOpen, setIsNodeSelectorOpen] = useState(false);
    //   const [isColorSelectorOpen, setIsColorSelectorOpen] = useState(false);
    //   const [isLinkSelectorOpen, setIsLinkSelectorOpen] = useState(false);

    return (
        <BubbleMenu
            {...bubbleMenuProps}
            className='flex w-fit divide-x divide-stone-200 rounded border border-stone-200 bg-white shadow-xl'
        >
            {/* <NodeSelector
        editor={props.editor}
        isOpen={isNodeSelectorOpen}
        setIsOpen={() => {
          setIsNodeSelectorOpen(!isNodeSelectorOpen);
          setIsColorSelectorOpen(false);
          setIsLinkSelectorOpen(false);
        }}
      />
      <LinkSelector
        editor={props.editor}
        isOpen={isLinkSelectorOpen}
        setIsOpen={() => {
          setIsLinkSelectorOpen(!isLinkSelectorOpen);
          setIsColorSelectorOpen(false);
          setIsNodeSelectorOpen(false);
        }}
      /> */}
            <div className='flex'>
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={item.command}
                        className='p-2 text-stone-600 hover:bg-stone-100 active:bg-stone-200'
                        type='button'
                    >
                        <item.icon
                            className={cn('h-4 w-4', {
                                'text-blue-500': item.isActive(),
                            })}
                        />
                    </button>
                ))}
            </div>
            {/* <ColorSelector
        editor={props.editor}
        isOpen={isColorSelectorOpen}
        setIsOpen={() => {
          setIsColorSelectorOpen(!isColorSelectorOpen);
          setIsNodeSelectorOpen(false);
          setIsLinkSelectorOpen(false);
        }}
      /> */}
        </BubbleMenu>
    );
};
