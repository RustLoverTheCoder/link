'use client'
import React, { memo } from 'react'
import { EditorContent, useEditor, Editor as EditorType } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// @ts-ignore
import BulletList from '@tiptap/extension-bullet-list'
import Placeholder from '@tiptap/extension-placeholder'

const Editor = ({ onSend }: { onSend?: () => {} }) => {
  const CustomPlaceholder = Placeholder.configure({
    emptyEditorClass: 'is-editor-empty',
    placeholder: '消息@tourssliver',
  })
  const CustomBulletList = BulletList.extend({
    addKeyboardShortcuts() {
      return {
        Enter: ({ editor }: { editor: EditorType }) => {
          /// 发送
          /// 删除内容
          !!onSend && onSend()
          editor.commands.clearContent(true)
          return true
        },
      }
    },
  })
  const editor = useEditor({
    extensions: [StarterKit, CustomBulletList, CustomPlaceholder],
    autofocus: true,
  })

  return <EditorContent editor={editor} />
}

export default memo(Editor)
