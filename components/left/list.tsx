'use client'

import Avatar from './Avatar'
import { useVirtualizer } from '@tanstack/react-virtual'
import React, { memo, useRef } from 'react'

const list = () => {
  const parentRef = useRef<HTMLDivElement>()

  const rowVirtualizer = useVirtualizer({
    count: 10,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 56,
    debug: true,
    initialRect: { width: 72, height: 700 },
  })

  return (
    <div className="hidden-scrollbar relative w-full overflow-y-auto" ref={parentRef}>
      <div
        className="relative w-full"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {/* Only the visible items in the virtualizer, manually positioned to be in view */}
        {rowVirtualizer.getVirtualItems().map((virtualItem, index) => (
          <div
            key={virtualItem.key}
            className="absolute top-0 left-0 flex w-full items-center justify-center"
            style={{
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <Avatar />
          </div>
        ))}
      </div>
    </div>
  )
}
export default memo(list)
