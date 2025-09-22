import React from 'react'
import Container from './Container'
import bgimg from '../assets/bgimg.png'
import five from '../assets/five.png'
import working from '../assets/working.png'
import { BsFacebook } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";





const Working = () => {
    return (
        <>
            <Container>
                <div>

                    <div className=''>
                        <img src={bgimg} alt="" />
                    </div>


                    <div className='flex'>
                        <div className='space-y-60 mt-[-800px] ml-10'>
                            <img src={five} alt="" />
                            <img src={working} alt="" className='mt-[300px]' />
                        </div>

                        <div className=' mt-[-800px] text-white  ml-[130px]'>
                            <div className='font-medium text-[76px]'>
                                <h2 className=' mt-[-30px]'>EDUCATION</h2>
                                <h2 className=' mt-[-110px] ml-[450px]'>&</h2>
                            </div>

                            <p className='mt-[-20px]'>Professional awards I’ve reached during my working times. </p>
                            <div className='font-medium text-[76px]'>
                                <h3 className='mt-[-20px] ml-[150px]'>EXPERENCE</h3>
                            </div>

                            <p>I have been developing sites for 8 years and I know for <br /> sure the main trends and directions of modern design, <br /> you will get a decent result</p>
                        </div>

                        <div className='mt-[-420px] ml-[-200px]'>
                            <button className='px-15 py-4 bg-[#B66449] rounded-2xl text-white'>
                                RESUME
                            </button>
                        </div>

                        <div>
                            <div className=' flex gap-15 mt-[-750px] ml-[80px] text-white border-b-1 border-white pb-6'>
                                <BsFacebook className='w-[50px] h-[50px]' />

                                <div>
                                    <p>2019-2021</p>
                                    <h3 className='text-[20px]'>FACEBOOK</h3>
                                </div>

                                <p>Assertively exploit wireless initiatives rather than <br /> synergistic core competencies.</p>

                            </div>

                            <div className=' flex gap-15 mt-[70px] ml-[90px] text-white border-b-1 border-white pb-6'>
                                <FaBehanceSquare className='w-[50px] h-[50px]' />

                                <div>
                                    <p>2017-2019</p>
                                    <h3 className='text-[20px]'>BEHANCE</h3>
                                </div>

                                <p> im working via developer 9 years and i know all about <br /> design</p>

                            </div>

                            <div className=' flex gap-15 mt-[70px] ml-[90px] text-white border-b-1 border-white pb-6'>
                                <FaTwitter className='w-[50px] h-[50px]' />

                                <div>
                                    <p>2014-2017</p>
                                    <h3 className='text-[20px]'>TWITTER</h3>
                                </div>

                                <p> Credibly streamline mission-critical value with <br />multifunctional functionalities. Leading team designers.</p>

                            </div>

                            <div className=' flex gap-15 mt-[70px] ml-[90px] text-white border-b-1 border-white pb-6'>
                                <FaInstagram className='w-[50px] h-[50px]' />

                                <div>
                                    <p>2012-2014</p>
                                    <h3 className='text-[20px]'>INSTRAGRMM</h3>
                                </div>

                                <p> Proven ability to lead and manage a wide variety of <br />design and development projects in team and <br />independent situations.</p>

                            </div>

                            <div className=' flex gap-15 mt-[70px] ml-[90px] text-white border-b-1 border-white pb-6'>
                                <FaLinkedinIn className='w-[50px] h-[50px]' />

                                <div>
                                    <p>206-2012</p>
                                    <h3 className='text-[20px]'>LINKDIN</h3>
                                </div>

                                <p>Assertively exploit wireless initiatives rather than <br />synergistic core competencies.</p>

                            </div>


                        </div>


                        <div className='mt-[-500px] ml-[20px]'>
                            <div className="flex flex-col gap-3 items-center \">
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

export default Working