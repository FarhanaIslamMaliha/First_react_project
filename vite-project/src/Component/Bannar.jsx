import React from 'react'
import Container from './Container'

import bgimg from '../assets/bgimg.png'
import one from '../assets/one.png'
import name from '../assets/name.png'
import { FaLongArrowAltRight } from "react-icons/fa"



const Bannar = () => {
  return (
    <>
      <Container>

        <div className=''>
          <img src={bgimg} alt="" />
          <div className='flex'>
            <div className='space-y-60 mt-[-800px] ml-10 '>
              <img src={one} alt="" />
              <img src={name} alt="" />

            </div>



            <div >
              <div className=' mt-[-709px] text-white  ml-20'>
                <div className='font-medium text-[76px]'>
                  <h2 className=' mt-[-30px]'>GET</h2>
                  <h2 className=' mt-[-110px] ml-[250px]'>YOUR</h2>
                </div>
                <p className='mt-[-20px]'>Always available for freelance work, contact me and get your greate design ;</p>
                <div className='font-medium text-[76px]'>
                  <h3 className='mt-[-20px]'>GREAT</h3>
                  <h3 className='mt-[-40px] ml-[100px]'>Design</h3>
                </div>
                <p>Hello, my name is Pattison and i am UX/UI designer and <br /> front-end developer, im working via developer 9 years <br /> and i know all about design</p>

                <div className='flex mt-[100px] gap-4 ml-[350px]'>
                  <h3>(hire me :)</h3>
                  <button className='px-8 py-4 bg-[#B66449] rounded-2xl '><FaLongArrowAltRight /></button>
                </div>
              </div>



              <div className="col-span-6 relative flex items-center justify-center mt-[-280px] ml-[680px]">
                
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_2px,transparent_2px,transparent_24px)] mt-[-250px] h-[1000px]" />

               
                <div className="relative flex items-center ">
                 
                  <div className="w-[22rem] h-[22rem] rounded-full bg-white relative z-10" />
                 
                  <div className="w-[22rem] h-[22rem] rounded-full bg-black/40 -ml-28 z-0" />
                </div>

               
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-end gap-8 z-20">
                  <div className='mt-[80px] '>
                    <p className="text-sm   text-white underline ">
                      Fill out the<br />brief to find out<br />the cost
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='mt-[-420px] ml-[1350px]'>
            <div className="flex flex-col gap-3 items-center">
              <span className="w-2 h-2 rounded-full bg-red-600 " />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
            </div>
          </div>

          <div className='ml-[150px]'>
            {/* <Countdown className="text-center text-white mt-[160px] " /> */}
          </div>
        </div>
      </Container>

    </>
  )
}

export default Bannar