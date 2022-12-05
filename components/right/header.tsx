import React, { memo } from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section className="flex h-12 w-full items-center justify-between pl-4 pr-2" aria-label="频道标题">
      <div className="flex items-center space-x-2.5">
        <div className="group relative h-8 w-8 cursor-pointer">
          <Image src={'https://avatar.vercel.sh/rauchg'} alt="avatar" width={32} height={32} className="rounded-full"></Image>
        </div>
        <div className="flex flex-col">
          <div className="text-base text-white">Tourssliver</div>
          <div className="text-sm text-[#adb5bd]">last seen 12/1/2022</div>
        </div>
      </div>
      <h1 className="text-base leading-5 text-white">123</h1>
    </section>
  )
}

export default memo(Header)
