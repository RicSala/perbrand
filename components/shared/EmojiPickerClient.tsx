'use client';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';

type EmojiPickerClientProps = {};
export function EmojiPickerClient(props: EmojiPickerClientProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    if (!isOpen) return <button onClick={() => setIsOpen(true)}>Open</button>;

    return (
        <EmojiPicker
            open={isOpen}
            onEmojiClick={() => {
                setIsOpen(false);
            }}
        />
    );
}
// REVIEW: Another way of doing this:

// import dynamic from 'next/dynamic';

// const Picker = dynamic(
//   () => {
//     return import('emoji-picker-react');
//   },
//   { ssr: false }
// );
