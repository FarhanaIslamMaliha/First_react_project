import React from 'react'

const Footertext = ({txt,txt1, txt2, txt3,txt4, txt5}) => {
  return (
    <>
        <div>
            <h5 className='text-[18px] font-bold text-[#313131] mb-[31px]'>{txt}</h5>
            <ul className='text-[16px] text-[#676767]'>
                <li className='mb-[24px]'>{txt1}</li>
                <li className='mb-[24px]'>{txt2}</li>
                <li className='mb-[24px]'>{txt3}</li>
                <li className='mb-[24px]'>{txt4}</li>
                <li className='mb-[24px]'>{txt5}</li>
            </ul>
        </div>

        
    </>
  )
}

export default Footertext
