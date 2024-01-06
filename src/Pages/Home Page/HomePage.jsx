import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { About, ContactUs, Hero, OurStudents, Placements, TrainingProgram, WhyJoinUs } from '../../Components'
import { Footer, Navbar } from '../../Layout'
import WhatsApp from "../../assets/WhatsApp.png"
const HomePage = () => {
  return (
    <Box>
      <a href='https://wa.me/919783855007' target='_blank'>
      <Image src={WhatsApp} alt='whatsapp-logo' className='WhatsApp-Logo' ml={{base:"75%",md:"85%",lg:"90%"}} mt={{base:"100%",md:"50%",lg:"38%"}}   w={{base:"5rem",md:"auto",lg:"auto"}} />
      </a>
      <Navbar />
      <Hero />
      <About />
      <TrainingProgram />
      <Placements/>
      <WhyJoinUs />
      <ContactUs />
      <OurStudents />
      <Footer />
     
    </Box>
  )
}

export default HomePage