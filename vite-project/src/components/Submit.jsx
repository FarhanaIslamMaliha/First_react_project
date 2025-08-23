import React from 'react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import Logo from "../assets/logo.png"



const Submit = () => {
  return (
    <>
    <div className="bg-[#313131] pt-[130px]  pb-[130px]">
        

        <SectionHeader
                border="!border-none !pb-0"
                text1 = "Ready To Get Insured? Submit Your Request And Hear Back As Soon As Tomorroe." 
            className= "!text-white leading-[60px] w-[893px] !pt-0"
            text2="Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day."
            color="!text-[#a49e9e] w-[555px]"
            >
            
                 <input type="text" name='email' className = 'bg-white py-[15px] pl-[16px] mt-[20px] w-[320px] rounded-[10px] mr-[8px]' placeholder='Your Email'/>
                <Button>
                    Get started
                </Button>

        </SectionHeader>

             
    </div>
    
       
    
    </>
  )
}

export default Submit
