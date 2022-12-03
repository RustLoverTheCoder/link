'use client'

import React, { memo, Fragment } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { Transition, Popover } from '@headlessui/react'

const Plus = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <BsPlusCircleFill className="h-6 w-6 cursor-pointer text-[rgb(185,187,190)] hover:text-white" />
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
              <Popover.Panel className="absolute bottom-[42px] -left-4 z-10">
                <div className="h-[78px] w-[216px] rounded-lg bg-[rgb(64,68,75)]">213</div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}

export default memo(Plus)
