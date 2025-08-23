import React from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import Insurance from './Insurance'

import Img4 from "../assets/I4.png"
import Img5 from "../assets/I5.png"
import Img6 from "../assets/I6.png"
import Img7 from "../assets/I7.png"
import Img8 from "../assets/I8.png"
import Flex from './Flex'







const Benefits = () => {
  return (
   <>
        <Container>
            <SectionHeader text = "your benefits" text1 = "We’re Your Right Insurance Advocate" text2="We work with several leading insurance
             companies to secure insurance coverages tailored to meet your needs."/>
            
             <Flex className = "gap-[30px] !px-0">
              <Insurance
                className= "shadow-none hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]"
                image={Img4} 
                det = "We’re unbiased" 
                det1="Our online tools help you decide what
                product is best for you. We’re here to insurance plan you choose." 
                className1 ="!text-[22px]"
              />

              <Insurance
               className= "shadow-none hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]"
                image={Img5} 
                det = "We have the best prices" 
                det1="Our insurance plans offers are priced the same everywhere else. 
            We just make them easier for you to find." 
            className1 ="!text-[22px]"
              />

              <Insurance
                className= "shadow-none hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]"
                image={Img6} 
                det = "We’re your insurance advocate" 
                det1="We will deal with the insurance companies for you, even after you’ve bought your plan." 
                className1 ="!text-[22px] !w-[345px] ml"
                
                
              />
              
               
            </Flex>

            <Flex className="mt-20 ">
                <Insurance
                className="!mr-0 shadow-none hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]"
                image={Img7} 
                det = "We’re availabe 24/7" 
                det1="We have your back 24/7 between our online chat function, email and telephone support." 
                className1="!text-[22px] ml1"
              />
              <Insurance
              className="shadow-none hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)]"
                image={Img8} 
                det = "We make insurance simple" 
                det1="We’re commited to making applying for insurance as simple as can be for our customers." 
                className1="!text-[22px] ml1"
              />
            </Flex>

             {/* <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-x-[30px]'>
            <Insurance className="mt-[200px]" image={Img4} det = "We’re unbiased" det1="Our online tools help you decide what
                product is best for you. We’re here to insurance plan you choose."></Insurance>
            <Insurance image={Img5} det = "We have the best prices" det1="Our insurance plans offers are priced the same everywhere else. 
            We just make them easier for you to find."></Insurance>
            <Insurance image={Img6} det = "We’re your insurance advocate" det1="We will deal with the insurance companies for you, even after you’ve bought your plan."></Insurance>
            

            </div> */}

            {/* <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-x-[30px] mt-[70px]'>
                <Insurance image={Img7} det = "We’re availabe 24/7" det1="We have your back 24/7 between our
                            online chat function, email and telephone support."></Insurance>
            <Insurance image={Img8} det = "We make insurance simple" det1="We’re commited to making applying for insurance as 
            simple as can be for our customers."></Insurance>
            </div> */}
            
        </Container>
   </>
  )
}

export default Benefits
