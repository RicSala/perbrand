import {
    useState,
    useEffect,
    useCallback,
    useRef,
    useLayoutEffect,
} from 'react';
import { Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import { ReactRenderer } from '@tiptap/react';
import tippy from 'tippy.js';
import { LucideWrapText } from 'lucide-react';
// import { complete } from "@/lib/openai";
import useOperatingSystem from '@/hooks/use-os';
import { Badge } from '@/components/ui/badge';
import { getSuggestionItems } from './get-suggestion-items';

// Create the extension with the name "slash-command"
// Using functions instead of objects allows us to: i) have dynamic configurations and ii) access the extension using the "this" keyword referring to the extension, which provides a way to interact with other options and methods.
const Command = Extension.create({
    name: 'slash-command', // required, unique name of the extension

    addOptions() {
        // add options to the extension
        return {
            suggestion: {
                char: '/',
                command: ({
                    // whenever a command is selected will receive the following props
                    editor,
                    range,
                    props,
                }) => {
                    props.command({ editor, range });
                },
            },
        };
    },
    addProseMirrorPlugins() {
        // called when ??
        return [
            Suggestion({
                // this refers to the instance of the extension, allows us to access other options and properties
                editor: this.editor, // reference to the editor
                ...this.options.suggestion, // pass the options that we added above
            }),
        ];
    },
});
//

//   Given a container (html element), and an item (html element), scroll the container so that the item is visible
export const updateScrollView = (container, item) => {
    const containerHeight = container.offsetHeight; // Height of the visible part of the container.
    const itemHeight = item ? item.offsetHeight : 0; // Height of the item.

    const top = item.offsetTop; // Distance from item's top edge to container's top edge.
    const bottom = top + itemHeight; // Distance from item's bottom edge to container's top edge.

    if (top < container.scrollTop) {
        // If the item is above the current view in the container...
        container.scrollTop -= container.scrollTop - top + 5;
        // ...scroll up to bring the item just into view.
    } else if (bottom > containerHeight + container.scrollTop) {
        // If the item is below the current view in the container...
        container.scrollTop +=
            bottom - containerHeight - container.scrollTop + 5;
        // ...scroll down to bring the item just into view.
    }
};

// This is the component itself
const CommandList = ({ items, command, editor, range }) => {
    const [selectedIndex, setSelectedIndex] = useState(0); // keep track of the item the user has selected

    //   TODO: this is temporary
    const [isLoading, setIsLoading] = useState(false); // keep track of whether the AI is loading

    const os = useOperatingSystem();

    // given an index, executes the command of the item at that index
    const selectItem = useCallback(
        (index) => {
            const item = items[index];
            // va.track("Slash Command Used", {
            //   command: item.title,
            // });
            if (item) {
                if (item.title === 'Continue writing') {
                    if (isLoading) return;
                    editor.chain().focus().deleteRange(range).run();
                    //   complete(
                    //     getContextText(editor, {
                    //       chars: 5000,
                    //       offset: 1,
                    //     }),
                    //     editor,
                    //   );
                } else {
                    command(item);
                }
            }
        },
        [
            // complete,
            range,
            isLoading,
            command,
            editor,
            items,
        ]
    );

    // Listen for keyboard events so the user can navigate the list with the keyboard
    useEffect(() => {
        const navigationKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
        const onKeyDown = (e) => {
            if (navigationKeys.includes(e.key)) {
                e.preventDefault();
                if (e.key === 'ArrowUp') {
                    setSelectedIndex(
                        (selectedIndex + items.length - 1) % items.length
                    );
                    return true;
                }
                if (e.key === 'ArrowDown') {
                    setSelectedIndex((selectedIndex + 1) % items.length);
                    return true;
                }
                if (e.key === 'Enter') {
                    selectItem(selectedIndex);
                    return true;
                }
                return false;
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [items, selectedIndex, setSelectedIndex, selectItem]);

    // When the component is mounted or the items change, reset the selected index to 0
    useEffect(() => {
        setSelectedIndex(0);
    }, [items]);

    const commandListContainer = useRef(null);

    // TODO: what do we need uselayout?
    useLayoutEffect(() => {
        const container = commandListContainer?.current;

        const item = container?.children[selectedIndex];

        if (item && container) updateScrollView(container, item);
    }, [selectedIndex]);

    return items.length > 0 ? (
        <div
            id='slash-command'
            ref={commandListContainer}
            className='z-50 h-auto max-h-[330px] w-[350px] max-w-full space-y-2 overflow-y-auto rounded-md bg-base-200 px-1 py-2 shadow-md transition-all'
        >
            {items.map((item, index) => {
                return (
                    <button
                        className={`flex w-full items-center justify-between space-x-2 rounded-md px-2 py-1 text-left text-sm text-base-content hover:bg-base-100 ${
                            index === selectedIndex
                                ? 'bg-stone-100 text-stone-900'
                                : ''
                        }`}
                        key={index}
                        onClick={() => selectItem(index)}
                    >
                        <div className='flex gap-2'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-md border border-base-content bg-base-100'>
                                {item.title === 'Continue writing' ? (
                                    // && isLoading

                                    <LucideWrapText />
                                ) : (
                                    item.icon
                                )}
                            </div>
                            <div>
                                <p className='font-medium'>{item.title}</p>
                                <p className='text-xs text-stone-500'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div>
                            {item.shortCut ? (
                                <Badge variant='ghost'>
                                    {item?.shortCut[os.toLowerCase()]}
                                </Badge>
                            ) : (
                                os
                            )}
                        </div>
                    </button>
                );
            })}
        </div>
    ) : null;
};

// Factory function that returns an object with 4 methods and manages two variables (component and popup) which will be used to manage the React component and popup.
const renderItems = () => {
    let component = null;
    let popup = null;

    return {
        onStart: (props) => {
            // Called when the user types the slash command character
            // Creates new instance of ReactRenderer using CommandList as the component to render and passing along the props
            console.log({ props });
            component = new ReactRenderer(CommandList, {
                props,
                editor: props.editor,
            });

            // we create the popup that will contain the component we previously created
            // @ts-ignore
            popup = tippy('body', {
                getReferenceClientRect: props.clientRect,
                // We have added a ref to the EditorContent component, that apparently tiptap send forward :)
                appendTo: () =>
                    props.editor.contentComponent.editorContentRef.current,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
            });
        },

        onUpdate: (props) => {
            component?.updateProps(props);

            popup &&
                popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                });
        },

        // listens for a keyboard event and if the "Escape" key is pressed, it hides the popup
        // delegates the rest of the keyboard events to the component
        onKeyDown: (props) => {
            if (props.event.key === 'Escape') {
                popup?.[0].hide();

                return true;
            }
            // @ts-ignore
            return component?.ref?.onKeyDown(props);
        },

        onExit: () => {
            popup?.[0].destroy();
            component?.destroy();
        },
    };
};

//   Configure the extension with the renderItems function...
const SlashCommand = Command.configure({
    suggestion: {
        items: getSuggestionItems, // the function that returns the items to display previously defined
        render: renderItems, // the function that returns the component to display previously defined
    },
});

export default SlashCommand; //... and export it as a default export.

// REVIEW
// Why this pattern?
// When we use the renderItems method and instantiate ReactRenderer, it allows us to create and manage a popover-like component but with tiptap managing its lifecycle tied to editor states and updates, which is fundamental in a rich text editing environment.
