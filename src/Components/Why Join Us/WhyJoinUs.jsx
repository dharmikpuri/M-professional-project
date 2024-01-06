import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import WhyJoinUsPhoto from "../../assets/Images/Why Join Us/WhyJoinUsPhoto.png"
import RightLogo from "../../assets/Images/Why Join Us/right-icon.svg"
const WhyJoinUs = () => {
  return (
    <Box w={{base:"90%",md:"85%",lg:"90%"}} m={"auto"} display={"flex"} flexDir={{base:"column",md:"row"}} gap={{base:"2rem",md:"3rem",lg:"5rem"}} pb={{base:"4rem",md:"4rem",lg:"7.5rem"}} justifyContent={"space-evenly"}>

      {/* //FLEX BOX - 1 */}
      <Box>
        <Text color={"#FFF"} fontFamily={"Clash Display"} fontWeight={600} fontStyle={"normal"} fontSize={{ base: "2rem", md: "2.5rem", lg: "3.5rem" }} mb={{ base: "1rem", md: "2rem", lg: "3rem" }} textAlign={{ base: 'center', md: 'left' }}>Why Join Us</Text>

        <Box display={"flex"} mb={"2rem"}>
          <Image src={RightLogo} alt='right-icon' />
          <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.25rem" }} color={"#FFF"} fontWeight={400} fontFamily={"Inter"} ml={"1rem"} display={"flex"} alignItems={"center"}>Working Professional Trainers</Text>
        </Box>

        <Box display={"flex"} mb={"2rem"}>
          <Image src={RightLogo} alt='right-icon' />
          <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.25rem" }} color={"#FFF"} fontWeight={400} fontFamily={"Inter"} ml={"1rem"} display={"flex"} alignItems={"center"}>Maximum Batch Strength is 4 only</Text>
        </Box>

        <Box display={"flex"} mb={"2rem"}>
          <Image src={RightLogo} alt='right-icon' />
          <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.25rem" }} color={"#FFF"} fontWeight={400} fontFamily={"Inter"} ml={"1rem"} display={"flex"} alignItems={"center"}>Placement Support after course completion</Text>
        </Box>

        <Box display={"flex"}>
          <Image src={RightLogo} alt='right-icon' />
          <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.25rem" }} color={"#FFF"} fontWeight={400} fontFamily={"Inter"} ml={"1rem"} display={"flex"} alignItems={"center"}>Role & Project based training</Text>
        </Box>

      </Box>

      {/* //FLEX BOX - 2 */}
      <Box>
        <Image src={WhyJoinUsPhoto} alt='whyJoinUs-photo'/>
      </Box>

    </Box>

  )
}

export default WhyJoinUs