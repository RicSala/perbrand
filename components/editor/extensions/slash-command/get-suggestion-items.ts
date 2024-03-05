import {
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    MessageSquarePlus,
    Text,
    TextQuote,
    Image as ImageIcon,
    Code,
    CheckSquare,
    MessageCircleIcon,
    LucideWrapText,
} from 'lucide-react';
import Spinner from '@/components/icons/spinner';

// Given a query, return a list of items to display in the slash command menu that match the query
export const getSuggestionItems = ({ query }) => {
    // Complete list of items
    const suggestionItems = [
        {
            title: 'Continue writing',
            description: 'Use AI to expand your thoughts.',
            searchTerms: ['gpt', 'ai', 'complete'],
            icon: MessageCircleIcon,
            shortCut: {
                windows: '⌘,+',
                macos: '⌘,+',
                linux: '⌘,+',
            },
        },
        {
            title: 'Send Feedback',
            description: 'Let us know how we can improve.',
            icon: MessageSquarePlus,
            shortCut: {
                windows: '⌘,f',
                macos: '⌘,f',
                linux: '⌘,f',
            },
            command: ({ editor, range }) => {
                editor.chain().focus().deleteRange(range).run();
                window.open('/feedback', '_blank');
            },
        },
        {
            title: 'Text',
            description: 'Just start typing with plain text.',
            searchTerms: ['p', 'paragraph'],
            icon: Text,
            shortCut: {
                windows: '⌘,p',
                macos: '⌘,p',
                linux: '⌘,p',
            },
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleNode('paragraph', 'paragraph')
                    .run();
            },
        },
        {
            title: 'To-do List',
            description: 'Track tasks with a to-do list.',
            searchTerms: ['todo', 'task', 'list', 'check', 'checkbox'],
            shortCut: {
                windows: '⌘,d',
                macos: '⌘,d',
                linux: '⌘,d',
            },
            icon: CheckSquare,
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleTaskList()
                    .run();
            },
        },
        {
            title: 'Heading 1',
            description: 'Big section heading.',
            searchTerms: ['title', 'big', 'large', 'h', 'h1'],
            icon: Heading1,
            shortCut: {
                windows: '⌘,1',
                macos: '⌘,1',
                linux: '⌘,1',
            },
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setNode('heading', { level: 1 })
                    .run();
            },
        },
        {
            title: 'Heading 2',
            description: 'Medium section heading.',
            searchTerms: ['subtitle', 'medium', 'h', 'h2'],
            icon: Heading2,
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setNode('heading', { level: 2 })
                    .run();
            },
        },
        {
            title: 'Heading 3',
            description: 'Small section heading.',
            searchTerms: ['subtitle', 'small', 'h', 'h3'],
            icon: Heading3,
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setNode('heading', { level: 3 })
                    .run();
            },
        },
        {
            title: 'Bullet List',
            description: 'Create a simple bullet list.',
            searchTerms: ['unordered', 'point'],
            icon: List,
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleBulletList()
                    .run();
            },
        },
        {
            title: 'Numbered List',
            description: 'Create a list with numbering.',
            searchTerms: ['ordered'],
            icon: ListOrdered,
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleOrderedList()
                    .run();
            },
        },
        {
            title: 'Quote',
            description: 'Capture a quote.',
            searchTerms: ['blockquote'],
            icon: TextQuote,
            command: ({ editor, range }) =>
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleNode('paragraph', 'paragraph')
                    .toggleBlockquote()
                    .run(),
        },
        {
            title: 'Code',
            description: 'Capture a code snippet.',
            searchTerms: ['codeblock'],
            icon: Code,
            command: ({ editor, range }) =>
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleCodeBlock()
                    .run(),
        },
        {
            title: 'Image',
            description: 'Upload an image from your computer.',
            searchTerms: ['photo', 'picture', 'media'],
            icon: ImageIcon,
            command: ({ editor, range }) => {
                editor.chain().focus().deleteRange(range).run();
                // upload image
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = async () => {
                    if (input.files?.length) {
                        const file = input.files[0];
                        const pos = editor.view.state.selection.from;
                        console.log({ file });
                        // startImageUpload(file, editor.view, pos);
                    }
                };
                input.click();
            },
        },
    ];

    // We return the items that match the query
    return suggestionItems.filter((item) => {
        if (typeof query === 'string' && query.length > 0) {
            const search = query.toLowerCase();
            return (
                item.title.toLowerCase().includes(search) ||
                item.description.toLowerCase().includes(search) ||
                (item.searchTerms &&
                    item.searchTerms.some((term) => term.includes(search)))
            );
        }
        return true;
    });
};
