import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import { Button } from "@/components/ui/button";
import {
  BoldIcon,
  ItalicIcon,
  ListIcon,
  QuoteIcon,
  UnderlineIcon,
} from "lucide-react";

export default function Description({ field }: { field: any }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Bold.configure({
        HTMLAttributes: {
          class: "dark:text-white text-black",
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "dark:text-white text-black",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: `prose mt-6 min-h-[300px] p-2 focus:outline-none dark:text-white  border max-w-full rounded-lg`,
      },
    },
    content: field.value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      field.onChange(html);
    },
  });

  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 w-full items-center border border-gray-200 dark:border-neutral-800 p-3 rounded-lg ">
        <Button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="font-bold "
        >
          <BoldIcon />
        </Button>
        <Button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="italic"
        >
          <ItalicIcon />
        </Button>
        <Button
          type="button"
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className="underline"
        >
          <UnderlineIcon />
        </Button>
        <Button
          type="button"
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        >
          <QuoteIcon />
        </Button>
        <Button
          type="button"
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        >
          <ListIcon />
        </Button>
      </div>
      <div>
        <EditorContent editor={editor} height={50} />
      </div>
    </div>
  );
}
