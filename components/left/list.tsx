'use client'

import Avatar from './Avatar'
import { useVirtualizer, useWindowVirtualizer } from '@tanstack/react-virtual'
import React, { memo, useRef } from 'react'
import { VirtualItem } from 'components/type'

const list = () => {
  const parentRef = useRef<HTMLDivElement>(null)

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
        {rowVirtualizer.getVirtualItems().map((virtualItem: VirtualItem) => (
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
