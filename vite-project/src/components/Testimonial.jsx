import React from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import { FaRegStar } from "react-icons/fa";
import Pro1 from "../assets/T1.png"
import Pro2 from "../assets/T2.png"
import Pro3 from "../assets/T3.png"
import { IoIosCheckmarkCircle } from "react-icons/io";

import Flex from './Flex'
import Insurance from './Insurance'
import Profiles from './Profiles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="text-red-500 absolute top-50 right-5 block"
      onClick={onClick}>
        <FaArrowRight />
        
      </div>
   
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="text-red-500 absolute top-50 left-5 block"
      onClick={onClick}>
        
        <FaArrowLeft />
      </div>
  
  );
}


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
   <>
    <Container>
        <SectionHeader text = "testimonial" 
        text1 = "What Our Customer Have To Says" 
        text2="We share common trends, strategies ideas, 
        Opinion, short & log stories from the team behind company"
        />



         <Slider {...settings}>

              <Insurance
                icon={<>
                <div className='flex gap-x-[9px]'>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                </div>
                    
                </>
                }
               
                det1="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality." 
                 className3 ="!text-left leading-[32px] mb-[32px]"
              
              
              
              >
                

                <Profiles
                image1={Pro1} 
                 det2 = "Viola Manisa"
                 icon1={
                  <>
                  <IoIosCheckmarkCircle />
                  </>
                 }
                 det3= "Verified customer"
              
              
              />

              </Insurance>


                <Insurance
                icon={<>
                <div className='flex gap-x-[9px]'>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                </div>
                    
                </>
                }
               
                det1="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality." 
                 className3 ="!text-left leading-[32px] mb-[32px]"
              
              
              
              >
                

                <Profiles
                image1={Pro2} 
                 det2 = "Viola Manisa"
                 icon1={
                  <>
                  <IoIosCheckmarkCircle />
                  </>
                 }
                 det3= "Verified customer"
              
              
              />

              </Insurance>



                <Insurance
                icon={<>
                <div className='flex gap-x-[9px]'>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                    <FaRegStar className="text-[#F3A100]"/>
                </div>
                    
                </>
                }
               
                det1="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality." 
                 className3 ="!text-left leading-[32px] mb-[32px]"
              
              
              
              >
                

                <Profiles
                image1={Pro3} 
                 det2 = "Viola Manisa"
                 icon1={
                  <>
                  <IoIosCheckmarkCircle />
                  </>
                 }
                 det3= "Verified customer"
              
              
              />

              </Insurance>
    

            

             
              
               
         </Slider>

    </Container>
   </>
  )
}

export default Testimonial
