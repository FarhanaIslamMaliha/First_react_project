import React from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import Insurance from './Insurance'
import Im1 from "../assets/P1.png"
import Im2 from "../assets/P2.png"
import Im3 from "../assets/P3.png"
import Flex from './Flex'




const Protection = () => {
  return (
   <>
        <Container>
            <SectionHeader text = "our tips for you" text1 = "Reinventing Your Protection" text2="We share common trends, strategies ideas, opinion, 
            short & log stories from the team behind company"/>


          <Flex>
            <div className='w-full h-[460px]'>
              <img src={Im1} alt=""/>
            </div>
              
              <Insurance
              
              className='w-full h-[460px] shadow-none !py-0' image={Im2} 
              det = "How to prevent and protect your family from Carbon monoxide" 
              det1="We share common trends, strategies ideas, opinion, short & log 
                    stories from the team behind company."
              className2= "font-semibold"
              
              />

             
             <div className='w-full h-[460px]'>
              <img src={Im3} alt="" />
            </div>
               

            </Flex>



            {/* <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-x-[30px] shadow-none'>
                    <img src={Im1} alt="" />
                    <Insurance image={Im2} det = "How to prevent and protect your family from Carbon monoxide" det1="We share common trends, strategies ideas, opinion, short & log 
                    stories from the team behind company."></Insurance>


            </div> */}

        </Container>
   </>
  )
}

export default Protection
