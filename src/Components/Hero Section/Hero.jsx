import React from 'react'
import heroBg from "../../assets/Images/Hero Section/HeroBg.png"
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import HreoSectionImg from "../../assets/Images/Hero Section/HreoSectionImg.png"
const Hero = () => {
  return (
    <Box w={"100%"} m={"auto"}
      backgroundImage={`${heroBg}`} h={{ base: "55rem", md: "35rem", lg: "55rem" }} justifyContent={"center"} display={"flex"} alignItems={"center"} bgRepeat={"no-repeat"} backgroundSize={"cover"}>

      <Flex w={{ base: "90%", md: "90%", lg: "80%" }} m={"auto"} gap={{ base: "2rem", md: "2rem", lg: "3rem" }} mt={{ base: "6.5rem", md: "7rem", lg: "8rem" }} flexDir={{ base: "column", md: "row" }}>
        {/* FLEX BOX 1  */}
        <Box display={"flex"} alignItems={"center"}>
          <Box >
            <Text color={"#F0F6FB"} fontFamily={"Clash Display"} fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }} fontStyle={"normal"} fontWeight={600} mb={{ base: "1.25rem", md: "1.8rem", lg: "2rem" }}>
              A Great Career Start Here
            </Text>
            <Text color={"#B6B6B6"} fontFamily={"Inter"} fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }} fontStyle={"normal"} fontWeight={400} mb={{ base: "1.25rem", md: "2rem", lg: "3rem" }}>More than 10000+ Students Trained | 650+ Job Placed</Text>
          <a href='https://linktr.ee/itaruntak?fbclid=PAAabokVcmbHjWXgUdUMBbU6O3md0Be3BpFpCfGPQCIE2LvbmkmA5maColmtA_aem_AVDP9DCHIinEcSNyBo2FVtklEGp-1p_YRmd7MCQSbJ_UB-7gSP27b5SnJmim6_DVLxc' target='_blank'>
              <Button bg={"#FECC00"} borderRadius={"0.5rem"} color={"#000"} textAlign={"center"} fontFamily={"Inter"} fontSize={"1.25rem"} fontStyle={"normal"} fontWeight={600} lineHeight={"1.5rem"} p={{ base: "1.25rem", md: "2rem" }} _hover={{
                bg: " #FECC00",
                boxShadow: "0 0 20px 5px #f2ce3f"
              }}>Know More About Director</Button>
            </a>
          </Box>
        </Box>
        {/* FLEX BOX 2  */}
        <Box>
          <Image src={HreoSectionImg} alt='heroSection-img' />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero