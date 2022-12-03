'use client'

import React, { memo, useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { VirtualItem } from 'components/type'

const MessageList = () => {
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: 200,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 34,
    debug: false,
    initialRect: { width: 72, height: 700 },
  })
  return (
    <div className="relative h-full w-full">
      <div className="hidden-scrollbar absolute top-0 right-0 bottom-0 left-0 overflow-y-auto" ref={parentRef}>
        <div
          className="relative w-full"
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem: VirtualItem) => (
            <div
              key={virtualItem.key}
              className="absolute top-0 left-0 w-full"
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              123
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(MessageList)
