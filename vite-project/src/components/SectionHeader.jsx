import React from 'react'

const SectionHeader = ({text, text1, text2,border, className, children, color}) => {
  return (
    <div className='mt-[130px] mb-12 mx-auto text-center w-[746px]'>
              <h5 className={`${border} uppercase font-bold text-[16px] !text-[#89D32A] text-center border-b-2 border-dashed border-black mx-auto pb-5 w-[262px]`}>{text}</h5>                   
          <h2 className={`${className} font-bold text-[40px] text-[#313131] text-center pt-[30px]`}>{text1}</h2>
          {children}
         <p className={`${color} font-normal text-[16px] text-[#676767] text-center w-[529px] mx-auto mt-[20px] leading-[26px] mb-5`}>{text2}</p>

    
      
     

    </div>
    
  )
}

export default SectionHeader
