import React from 'react'
import Flex from './Flex'

const Profiles = ({image1, icon1, det2,det3}) => {
  return (
    <>
    <Flex>
          <div>
            <img className='mr-[16px] w-[45px] h-[45px]' src={image1} alt=""/>
        </div>
        <div>
             <h5 className='!font-semibold text-[20px] text-left'>{det2}</h5>
              <p className='flex text-[#676767] italic text-[14px]'>{icon1 && <span className='text-[#36B37E] mt-[2px] mr-[8px]'>{icon1}</span>}{det3}</p>
        </div>
                    

    </Flex>
         
    
    </>
  )
}

export default Profiles
