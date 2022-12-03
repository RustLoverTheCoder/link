import React, { memo } from 'react'
import { FaMicrophone } from 'react-icons/fa'

const Mic = () => {
  return <FaMicrophone className="h-6 w-6 cursor-pointer text-[#b9bbbe]" />
}

export default memo(Mic)
