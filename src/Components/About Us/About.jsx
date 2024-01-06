import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box w={{base:"95%",md:"90%",lg:"80%"}} m={"auto"} pb={{base:"4rem",md:"4rem",lg:"7.5rem"}} name="About Us">
      <Text color={"#FFF"} textAlign={"center"} fontFamily={"Clash Display"} fontSize={{ base: "2rem", md: "2.5rem", lg: "3.5rem" }} fontWeight={600} lineHeight={"3.75rem"} mb={{md:"1rem",lg:"2rem"}}>About Us</Text>

      <Text color={"#FFF"} textAlign={"center"} fontFamily={"Inter"} fontSize={{ base: "1rem", md: "1rem", lg: "1.25rem" }} fontWeight={400} lineHeight={{md:"1.5rem",lg:"2.11788rem"}} w={{base:"100%",md:"100%",lg:"70%"}} m={"auto"} mb={{base:"1.25rem",md:"2rem",lg:"3rem"}}>
        A leading institution that specializes in providing top-notch distance MBA training programs and professional training programs in the fields of Banking, Finance, and Information Technology.
      </Text>
      <Box justifyContent={"center"} display={"flex"} h={{base:"350px",md:"550px"}}>
      <iframe
        width="90%"
        src="https://www.youtube.com/embed/SbTq_1xjawM"
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </Box>


    </Box>
  )
}

export default About