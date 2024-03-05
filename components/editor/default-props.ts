// This is the place to add event listeners, handle paste and drop events,...
// import { startImageUpload } from './plugins/upload-images';
import { EditorProps } from '@tiptap/pm/view';

export const defaultEditorProps: EditorProps<any> = {
    attributes: {
        // The attributes object defines the HTML attributes that should be added to the editor element.
        class: `prose-lg prose-stone dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
    },

    handleDOMEvents: {
        keydown: (_view, event) => {
            // prevent default event listeners from firing when slash command is active
            if (['ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)) {
                const slashCommand = document.querySelector('#slash-command');
                if (slashCommand) {
                    return true;
                }
            }
        },
    },

    // handlePaste and handleDrop are event handlers that are triggered (called) when a file is pasted or dropped into the editor.
    handlePaste: (view, event) => {
        if (
            // If a file is pasted...
            event.clipboardData &&
            event.clipboardData.files &&
            event.clipboardData.files[0]
        ) {
            event.preventDefault(); //...prevent default behavior (that is show the file in a new tab)
            const file = event.clipboardData.files[0]; // get the file
            const pos = view.state.selection.from; // get the position in the document

            // startImageUpload(file, view, pos); // start the upload (will trigger the upload plugin)
            return true;
        }
        return false;
    },
    handleDrop: (view, event, _slice, moved) => {
        event.preventDefault(); // ...prevent default behavior

        console.log('here', event.cancelable);
        if (
            // If a file is dropped...
            !moved && // ...and it's not a moved element inside the editor...
            event.dataTransfer &&
            event.dataTransfer.files &&
            event.dataTransfer.files[0]
        ) {
            event.preventDefault(); // ...prevent default behavior
            console.log(event.dataTransfer.files[0].name);
            const file = event.dataTransfer.files[0]; // get the file from the event
            const coordinates = view.posAtCoords({
                // get the coordinates of the drop
                left: event.clientX,
                top: event.clientY,
            });
            // here we deduct 1 from the pos or else the image will create an extra node
            // TODO: what??
            // startImageUpload(file, view, coordinates?.pos || 0 - 1); // start the upload (will trigger the upload plugin)
            return true;
        }
        return false;
    },
};
