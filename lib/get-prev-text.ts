// TODO: Remove ts-nocheck and fix the types
// @ts-nocheck

import { Editor } from '@tiptap/core';

/**
 * Get the previous text from the current cursor position
 * @param {Editor} editor
 * @param {Object} options
 * @param {number} [options.chars=100] Number of characters to get
 * @param {number} [options.offset=0] Offset from the current cursor position
 */
export const getPrevText = (editor, { chars, offset = 0 }) => {
    // for now, we're using textBetween for now until we can figure out a way to stream markdown text
    // with proper formatting: https://github.com/steven-tey/novel/discussions/7
    return editor.state.doc.textBetween(
        Math.max(0, editor.state.selection.from - chars),
        editor.state.selection.from - offset,
        '\n'
    );
    // complete(editor.storage.markdown.getMarkdown());
};

export const getContextText = (editor, { chars, offset = 0 }) => {
    const instructions = `Given the following text, generate a well written paragraph of about 200 chars that could fit in in the PLACEHOLDER if there is any.

  Do not write any intro, or boilerplate. Do not write anything like "this is the text for the placeholder", just write the text.
  Example:
  user: <TEXT START>2. Setting up a React Environment 
  [[CHATGPT-GENERATED TEXT PLACEHOLDER GOES HERE]]
  3. Hooks in React
  <TEXT END>

  assistant: The first thing you need to start working with React is setting up your environment. In order to do that...

  The text must be:
  - Well formatted: used bold, italic, and other formats when necesary. Also use lists and other elements that help structure the text.
  - Don't repeat the boilerplate
  - Use break lines to make the text easier to read!


  If no PLACEHOLDERS is provided, just create the requested text

  
  Here is the current text with the placeholder: <TEXT START>

  `;

    const previousText = editor.state.doc.textBetween(
        Math.max(0, editor.state.selection.from - chars),
        editor.state.selection.from - offset,
        '\n'
    );

    const nextText = editor.state.doc.textBetween(
        editor.state.selection.from,
        Math.min(
            editor.state.selection.from + chars,
            editor.state.doc.content.size - 1
        ),
        '\n'
    );

    const placeholderText =
        '  [[CHATGPT-GENERATED TEXT PLACEHOLDER GOES HERE]]  ';

    return (
        instructions + previousText + placeholderText + nextText + `<TEXT END>`
    );
};
