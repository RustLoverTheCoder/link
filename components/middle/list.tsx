'use client'

import React, { memo, useRef } from 'react'
import Channel from './channel'
import { useVirtualizer } from '@tanstack/react-virtual'
import { VirtualItem } from 'components/type'

const List = () => {
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: 200,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 34,
    debug: false,
    initialRect: { width: 72, height: 1080 },
  })
  return (
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
            className="absolute top-0 left-0 flex w-full items-center justify-center"
            style={{
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <Channel />
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(List)
