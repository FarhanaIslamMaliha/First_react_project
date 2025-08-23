import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Insurance = ({image, det, det1, className, children, className1, className2, icon, className3}) => {
  return (
     <>
  
            <div className= {`text-center mx-auto py-[38px] px-[45px] rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] w-[370px] h-[377px] ${className}`}>
                    <img className='mx-auto' src={image} alt=""/>
                        <h2 className={`${className1} ${className2} text-[25px] pt-[30px] pb-5`}>{det} {icon && <span>{icon}</span>}</h2>
                        <p className={`${className3} w-[280px] leading-[28px] text-[16px] mx-auto`}>{det1}</p>
                        {children}

                       

                       
                  
            </div>
            
  </>
  )
}

export default Insurance
