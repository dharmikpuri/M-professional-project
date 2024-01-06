import { Box, Image, Text } from '@chakra-ui/react'
import Marquee from "react-fast-marquee";
import React from 'react'
import SGVU from "../../assets/Images/Placements Partners/SGVU.png"
import SBI from "../../assets/Images/Placements Partners/SBI.png"
import Manipal from "../../assets/Images/Placements Partners/Manipal.png"
import Kotak from "../../assets/Images/Placements Partners/Kotak.png"
import JNU from "../../assets/Images/Placements Partners/JNU.png"
import JECRC from "../../assets/Images/Placements Partners/JECRC.png"
import HDFC from "../../assets/Images/Placements Partners/HDFC.png"
import AXix from "../../assets/Images/Placements Partners/Axix.png"
import Lphaone from "../../assets/Images/Placements Partners/Lphaone.png"
import Utkarsh from "../../assets/Images/Placements Partners/Utkarsh.png"


const OurStudents = () => {
  const data = [
    {
      image: SGVU,
    },
    {
      image: SBI,
    },
    {
      image: Manipal,
    },
    {
      image: Kotak,
    },
    {
      image: JNU,
    },
    {
      image: JECRC,
    },
    {
      image: HDFC,
    },
    {
      image: AXix,
    },
    {
      image: Lphaone,
    },
    {
      image: Utkarsh,
    }
  ];
  return (
    <Box pb={{base:"4rem",md:"4rem",lg:"7.5rem"}}>
    <Box mb={{base:"0rem",md:"2rem",lg:"3rem"}} >
      <Text color={"#FFF"} textAlign={"center"} fontFamily={"Clash Display"} fontStyle={"normal"} fontSize={{base:"1.725rem",md:"2.5rem",lg:"3.5rem"}} fontWeight={600}>Our  Students  are  placed  in</Text>
    </Box>
        <Marquee  speed={100}>
          {data?.map((item, index) => (
            <Box key={item.id}>
              <Box key={index}   ml={{base:"2rem",md:"2rem",lg:"3rem"}} >
                <Image src={item.image} alt="logo" w={"10rem"} h={'8rem'} />
              </Box>
            </Box>
          ))}
        </Marquee>
      
    </Box>
  )
}

export default OurStudents