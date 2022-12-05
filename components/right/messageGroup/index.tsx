'use client'
import React, { memo } from 'react'

const messageGroup = () => {
  return (
    <div className="message-date-group h-auto w-full">
      <div className="pointer-events-none sticky top-0.5 z-[9] my-4 text-center select-none">
        <span className='text-white inline-block'>August 29</span>
      </div>
      <div>123</div>
    </div>
  )
}

export default memo(messageGroup)
