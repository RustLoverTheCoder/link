import React, { memo } from 'react'
import Image from 'next/image'
import vel from 'public/avatar.jpeg'

const Avatar = () => {
  return (
    <div className="group relative h-12 w-12 cursor-pointer">
      <Image src={'https://avatar.vercel.sh/rauchg'} alt="avatar" width={48} height={48} className="rounded-full group-hover:rounded-xl"></Image>
    </div>
  )
}

export default memo(Avatar)
