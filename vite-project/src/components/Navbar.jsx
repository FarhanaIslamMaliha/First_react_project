import React from 'react'
import Logo from "../assets/logo.png"
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import Banner from './Banner'

const Navbar = () => {
  return (
    <>
      <nav>
       <Container className="mt-[50px]">
         <Flex className="justify-between items-center">
          <div>
          <img src={Logo} alt=""/>
        </div>
        <div>
          <ul className='flex gap-10'>
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>
           <div>
              <Button> Contact </Button>
            </div>
         </Flex>
       </Container>
       
      </nav>
    </>
    
  )
}

export default Navbar
