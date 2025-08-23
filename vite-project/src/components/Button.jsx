import React, { Children } from 'react'

const Button = ({children}) => {
  return (
    <div className='inline-block px-[30px] py-[15px] bg-[#89D32A] rounded-[10px] text-white font-bold'>
      {children}
    </div>
  )
}

export default Button
