import React, { memo } from 'react'
import { BsFillEmojiSmileFill } from 'react-icons/bs'

const Emoji = () => {
  return <BsFillEmojiSmileFill className="h-6 w-6 cursor-pointer text-[#b9bbbe] hover:text-white" />
}

export default memo(Emoji)
