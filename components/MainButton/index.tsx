import { IButton } from '@/INterface/INterface'
import React from 'react'



const index = ({text, isOutline=false,onClick}:IButton) => {
  return (
    <div className=''>
        <button  onClick={onClick} className={isOutline ?  `text-white bg-[#311F09] px-9 py-3 rounded-full `: `bg-[#D0CCC7] px-9 py-3 rounded-full`}>
          {text}
        </button>
    </div>
  )
}

export default index