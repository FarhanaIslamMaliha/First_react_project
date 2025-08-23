import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import BannerImg from "../assets/banner.png"


const Banner = () => {
  return (
   <>
        <Container>
            <Flex className= "items-center">
              <div className='pt-32'>
                
                <h1 className='w-[680px] text-[70px] font-bold text-[#313131]'>We Are Ready To Make Your New Life Happier.</h1>
                <p className='text-xl leading-9 w-[627px] pt-[30px] pb-10'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
             
                <Button>Get a consultation</Button>
              </div>
              <div className='absolute right-0 pt-[44px]'>
                <img src={BannerImg} alt="" />
              </div>
            </Flex>
        </Container>
        
   </>
  )
}

export default Banner
