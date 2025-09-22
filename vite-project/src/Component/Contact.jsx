import React from 'react'
import Container from './Container'
import bgimg from '../assets/bgimg.png'
import six from '../assets/six.png'
import contact from '../assets/contact.png'
import { GoArrowUpRight } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa"

const Contact = () => {
  return (
    <>
      <Container>
        <div>

          <div className=''>
            <img src={bgimg} alt="" />
          </div>

          <div className='flex'>
            <div className='space-y-60 mt-[-800px] ml-10'>
              <img src={six} alt="" />
              <img src={contact} alt="" className='mt-[300px]' />
            </div>

            <div className=' mt-[-800px] text-white  ml-[130px]'>
              <div className='font-medium text-[76px]'>
                <h2 className=' mt-[-30px]'>HIRE</h2>
              </div>

              <p className='mt-[-20px]'>Enjoy coffe with me  </p>
              <div className='font-medium text-[76px]'>
                <h3 className='mt-[-115px] ml-[250px]'>ME</h3>
              </div>

              <div className='text-white border-t-2  border-white inline-block w-[450px] text-[20px] mt-[80px]'>
                <div className='space-y-4 '>
                  <div className='flex  gap-4 border-b-1 border-white mt-2'>
                    <p>HOW TO DESUGN WELL?</p>
                    
                  </div>

                  <div className='flex  gap-4 border-b-1 border-white mt-2'>
                    <p>LEMON ILLUSTRATION DESIGN</p>
                  </div>

                  <div className='flex  gap-4 border-b-1 border-white mt-2'>
                    <p>PAUL THEME BRANDING</p>
                  </div>

                  <div className='flex  gap-4 border-b-1 border-white mt-2'>
                    <p>BEST TYPOGRAPHY 2020</p>
                    <GoArrowUpRight className='ml-[150px]' />
                  </div>

                  <div className='flex  gap-4 border-b-1 border-white mt-2'>
                    <p>MY NAME IS PATTISON</p>
                  </div>
                </div>

              </div>

              
            </div>

            <div>
              <div className=' mt-[-800px] ml-[90px] text-white text-[40px]'>
                <h3>Let's grab a coffee and <br /> jump on <span className='text-[#B66449]'>conversation</span>  chat <br /> with me.</h3>
              </div>

              <div className='text-white mt-[120px] ml-[90px] '>
                <h2 className='text-[18px]'>SEND A BRIEF</h2>
                <p className='mt-6'>I recommend filling out a brief to assess the <br /> cost of the project. <span className='text-[#B66449]'>Brief</span> </p>
              </div>
            </div>

            <div>
              <div className='mt-[-550px] text-[#E2DCC8]'>
              <input className='border-b-2 border-[#E2DCC8] ' placeholder='Name'  />
            </div>

            <div className='mt-[50px] text-[#E2DCC8]'>
              <input className='border-b-2 border-[#E2DCC8] ' placeholder='EMAIL*'  />
            </div>

            <div className='mt-[50px] text-[#E2DCC8]'>
              <input className='border-b-2 border-[#E2DCC8] ' placeholder='MASSEGE*'  />
            </div>

            <div className='flex mt-[60px] gap-4 '>
                
                <button className='px-8 py-4 bg-[#B66449] rounded-4xl '><FaLongArrowAltRight className='text-white'/></button>
              </div>
            </div>

            <div className='mt-[-500px] ml-[50px]'>
              <div className="flex flex-col gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-red-600 " />
                <span className="w-2 h-2 rounded-full bg-white/50" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
              </div>
            </div>


          </div>

        </div>

      </Container>
    </>
  )
}

export default Contact