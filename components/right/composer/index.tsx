'use client'

import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Composer = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div className="editor-container min-h-[44px] rounded-lg px-4" style={{ background: 'rgb(64,68,75)' }}>
      <EditorContent editor={editor} />
    </div>
  )
}

export default memo(Composer)
