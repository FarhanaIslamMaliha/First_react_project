import React from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'

import Insurance from './Insurance'
import Img1 from "../assets/I1.png"
import Img2 from "../assets/I2.png"
import Img3 from "../assets/I3.png"
import { FaArrowRight } from "react-icons/fa";
import Flex from './Flex'




const OurServices = () => {
  return (
    <>
        <Container className = "mb-[130px]">
            <SectionHeader 
              text = "Out of service" 
              text1 = "Insurance made simple for you" 
              text2="We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."
              
            />
            
            
            
            <Flex className = "gap-[30px]">
              
              <Insurance
               className="mt-[107px]"
                image={Img1} 
                det = "Home insurance" 
                det1="Home insurance is a type of insurance policy that provides cover for your home."
                
                
              >
                
                 <a href="#" className="flex items-center justify-center gap-[5px] mt-[10px] font-bold">
      Learn more <FaArrowRight />
    </a>
                </Insurance>

              
    

              <Insurance
                
                image={Img2} 
                det = "Life insurance" 
                det1="Helping you bridge gaps in your health care coverage during times of transition" 
                
               >
                 <a href="#" className="flex items-center justify-center gap-[5px] mt-[10px] font-bold">
                    Learn more <FaArrowRight />
                </a>
                
                </Insurance>


              <Insurance
              
                className="mt-[107px]"
                image={Img3} 
                det = "Car insurance" 
                det1="Car insurance is a type of insurance policy that provides cover for your car." 
                
                >
                <a href="#" className="flex items-center justify-center gap-[5px] mt-[10px] font-bold">
                    Learn more <FaArrowRight />
                </a>

                </Insurance>

            </Flex>


        </Container>
    </>
  )
}

export default OurServices
