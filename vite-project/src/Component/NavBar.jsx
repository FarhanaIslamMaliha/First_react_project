import React from 'react'
import Container from './Container'
import p from "../assets/p.png"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const NavBar = () => {
    return (
        <>
            <Container>
                <div className='bg-black h-[80px] flex justify-between border-b-2 border-gray-300'>
                 
                    
                    <div className='flex gap-[50px] mt-6'>
                        <div className='w-[25px] h-[32px]'>
                            <img src={p} alt="" className='ml-10'/>
                        </div>
                        <div className='text-white flex gap-8 ml-15'>
                            <FaFacebookF />
                            <IoLogoTwitter />
                            <FaLinkedinIn />
                        </div>
                    </div>

                    
                    <div>
                        <ul className='text-white flex gap-6 mt-6 text-[12px] ml-[350px]'>
                            <li>
                                <Link to="/" className="text-[#B66449]">
                                    HOME
                                </Link>
                            </li>
                            <li>PROJECTS</li>
                            <li>AWWARDS</li>
                            <li>TESTMONIALS</li>
                            <li>BLOG</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>

                   
                    <div className='text-white flex mt-6'>
                        <h3 className='mr-[14px]'>+2(315) 590 83 68</h3>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default NavBar
