'use client'

import React, { memo, Fragment } from 'react'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { Transition, Popover } from '@headlessui/react'

const Emoji = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>
            <BsFillEmojiSmileFill className="h-6 w-6 cursor-pointer text-[#b9bbbe] hover:text-white" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute bottom-[42px] -right-[54px] z-50">
              <div className="h-[420px] w-[424px] rounded-lg bg-[rgb(64,68,75)]">213</div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default memo(Emoji)
