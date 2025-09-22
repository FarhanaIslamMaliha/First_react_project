import React from 'react'
import Container from './Container'
import bgimg from '../assets/bgimg.png'
import prot from '../assets/prot.png'
import two from '../assets/two.png'
import { GoArrowUpRight } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa"

const Testy = () => {
    return (
        <>
            <Container>

                <div className=''>
                    <div>
                        <img src={bgimg} alt="" />
                    </div>

                    <div>
                        <div className=''>
                            <div className=' space-y-60 mt-[-800px] ml-10 '>
                                <img src={two} alt="" />
                                <img src={prot} alt="" />
                            </div>
                        </div>

                        <div className=' mt-[-400px] text-white  ml-[150px] space-y-20 flex'>
                            <div className=''>
                                <h2 className='text-white text-[76px]'>PROJECTS</h2>

                                <div className='text-white border-t-2  border-white inline-block w-[450px] text-[20px] mt-[80px]'>
                                    <div className='space-y-4 '>
                                        <div className='flex  gap-4 border-b-2 border-white mt-2'>
                                            <p>BERLING AGENCY WEBSITE</p>
                                            <GoArrowUpRight className='ml-[150px]' />
                                        </div>

                                        <div className='flex  gap-4 border-b-2 border-white mt-2'>
                                            <p>PRETTYLITTLETHING AMERICAN SHOP</p>
                                        </div>

                                        <div className='flex  gap-4 border-b-1 border-white mt-2'>
                                            <p>BENHOME - ARCHITECTURE THEME</p>
                                        </div>

                                        <div className='flex  gap-4 border-b-1 border-white mt-2'>
                                            <p>GILHOUSE - ARCHITECTURE WEBSITE</p>
                                        </div>

                                        <div className='flex  gap-4 border-b-1 border-white mt-2'>
                                            <p>GILBER - PERSONAL  WEBSITE</p>
                                        </div>

                                        <div className='flex  gap-4 border-b-1 border-white mt-2'>
                                            <p>JONNY - PERSONAL  WEBSITE</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='flex mt-[80px] gap-4 ml-[350px]'>
                                    <h3>View all works</h3>
                                    <button className='px-8 py-4 bg-[#B66449] rounded-2xl '><FaLongArrowAltRight /></button>
                                </div>

                            </div>


                            <div className='w-[700px] h-[600px] bg-[#C4C4C4] mt-10 ml-10'>

                            </div>

                            <div className='mt-[300px] ml-10'>
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
                </div>


            </Container>
        </>
    )
}

export default Testy