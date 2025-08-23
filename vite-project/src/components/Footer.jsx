import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import icon1 from "../assets/ic1.png"
import icon2 from "../assets/ic2.png"
import icon3 from "../assets/ic3.png"
import icon4 from "../assets/ic4.png"
import Footertext from './Footertext'


const Footer = () => {
  return (
    
    <>
        <Container className="mt-[130px]">

            <Flex className="gap-x-[108px]">
                 <div>
                    <img src={Logo} alt=""/>
                    <p className='mt-[15px] w-[263px]'>Build a modern and creative website with crealand</p>
                    <ul className='flex mt-[32px]'>
                        <li className='mr-[6px]'><img src={icon1} alt=""/></li>
                        <li className='mr-[6px]'><img src={icon2} alt=""/></li>
                        <li className='mr-[6px]'><img src={icon3} alt=""/></li>
                        <li className='mr-[6px]'><img src={icon4} alt=""/></li>
                    </ul>


                            
                 </div>


                 <Footertext
                    txt="Product"
                    txt1= "Landingpage"
                    txt2= "Features"
                    txt3= "Documentation"
                    txt4= "Referral Program"
                    txt5= "Pricing"
                
                
                
                />
                 <Footertext
                    txt="Services"
                    txt1= "Documentation"
                    txt2= "Design"
                    txt3= "Themes"
                    txt4= "Illustrations"
                    txt5= "UI Kit"
                
                
                
                />

                 <Footertext
                    txt="Company"
                    txt1= "About"
                    txt2= "Terms"
                    txt3= "Privacy Policy"
                    txt4= "Careers"
                  
                
                
                
                />

                 <Footertext
                    txt="More"
                    txt1= "Documentation"
                    txt2= "License"
                    txt3= "Changelog"
                    
                />


            </Flex>

          

        </Container>
    
    </>
  )
}

export default Footer
