'use client'
import React, { memo } from 'react'
import { EditorContent, useEditor, Editor as EditorType } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'

const Editor = () => {
  const CustomBulletList = BulletList.extend({
    addKeyboardShortcuts() {
      return {
        Enter: ({ editor }: { editor: EditorType }) => {
          /// 发送
          /// 删除内容
          editor.commands.clearContent(true)
          return true
        },
      }
    },
  })
  const editor = useEditor({
    extensions: [StarterKit, CustomBulletList],
    content: '<p>Hello World!</p>',
  })

  return <EditorContent editor={editor} />
}

export default memo(Editor)
