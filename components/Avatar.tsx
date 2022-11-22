import React from 'react'
import Image from 'next/image'
import vel from 'public/avatar.jpeg'

const Avatar = () => {
  return (
    <div className="relative h-12 w-12 rounded-full cursor-pointer">
      <Image src={vel} alt="avatar" width={48} height={48} className='rounded-full'></Image>
    </div>
  )
}

export default Avatar
