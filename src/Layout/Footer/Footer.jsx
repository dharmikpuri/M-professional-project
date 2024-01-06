import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import LogoFooter from "../../assets/Images/Footer/LogoFooter.png";
import LinkTree from "../../assets/Images/Footer/Linktree.png";
import Mail from "../../assets/Images/Footer/Mail.png";
import LinkdIn from "../../assets/Images/Footer/Linkedin.png";
import Instagram from "../../assets/Images/Footer/Instagram.png";

import LinktreeHover from "../../assets/Images/Footer/LinktreeHover.png";
import MailHover from "../../assets/Images/Footer/MailHover.png";
import LinkdinHover from "../../assets/Images/Footer/LinkdinHover.png";
import InstagramHover from '../../assets/Images/Footer/InstagramHover.png';

const Footer = () => {
  const [image, setImage] = useState(LinkTree);
  const [image1, setImage1] = useState(Mail);
  const [image2, setImage2] = useState(LinkdIn);
  const [image3, setImage3] = useState(Instagram);

  const MouseEnter = () => {
    setImage(LinktreeHover);
  }
  const MouseLeave = () => {
    setImage(LinkTree);
  }

  const MouseEnter1 = () => {
    setImage1(MailHover);
  }
  const MouseLeave1 = () => {
    setImage1(Mail);
  }

  const MouseEnter2 = () => {
    setImage2(LinkdinHover);
  }
  const MouseLeave2 = () => {
    setImage2(LinkdIn);
  }

  const MouseEnter3 = () => {
    setImage3(InstagramHover);
  }
  const MouseLeave3 = () => {
    setImage3(Instagram);
  }

  return (
    <Box bg={"#4C4C4C"} py={"3.75rem"} px={{ base: "2rem", md: "3rem", lg: "7.5rem" }} display={"flex"} justifyContent={{ base: "none", md: "space-between" }} flexDirection={{ base: "column", md: "row" }} gap={{ base: "4rem", md: "2rem" }} alignItems={{ base: "none", md: "end" }} >
      {/* FLEX BOX 1  */}
      <Box >
        <Image src={LogoFooter} alt='mproffessinal-logo' mb={"1.5rem"} w={'100%'} />
        <Text color={"#FFF"} fontFamily={"Inter"} fontSize={"1rem"} fontStyle={"normal"} fontWeight={400} lineHeight={"1.6rem"}>Address:- 59, C- Block, Sector-9,</Text>
        <Text color={"#FFF"} fontFamily={"Inter"} fontSize={"1rem"} fontStyle={"normal"} fontWeight={400} lineHeight={"1.6rem"}>Udaipur, Rajasthan (India) </Text>
        <Text color={"#FFF"} fontFamily={"Inter"} fontSize={"1rem"} fontStyle={"normal"} fontWeight={400} lineHeight={"1.6rem"}>Pin Code: 313001 </Text>
      </Box>
      {/* FLEX BOX 2  */}
      <Box >
        <Text color={"rgba(255, 255, 255, 0.80);"} fontFamily={"Clash Display"} fontSize={"1.25rem"} fontStyle={"normal"} fontWeight={700} lineHeight={"1.59375rem"} mb={"1rem"} display={"flex"} justifyContent={{ base: "none", md: "flex-end" }}>
          Follow Us on :
        </Text>

        <Flex gap={"0.75rem"} justifyContent={{ base: "none", md: "flex-end" }}>
          <a href='https://linktr.ee/mprofessional' target='_blank'>
            <Image src={image} alt='linktree-logo' onMouseEnter={() => MouseEnter()} onMouseLeave={() => MouseLeave()} />
          </a>

          <a href='Ertaruntak@gmail.com' >
            <Image src={image1} alt='mail-logo' onMouseEnter={() => MouseEnter1()} onMouseLeave={() => MouseLeave1()} />
          </a>

          <a href='https://www.linkedin.com/company/mprofessionaleducationlearning/' target='_blank'>
            <Image src={image2} alt='linkdin-logo' onMouseEnter={() => MouseEnter2()} onMouseLeave={() => MouseLeave2()} />
          </a>

          <a href=' https://instagram.com/m_professional_education' target='_blank'>
            <Image src={image3} alt='instagram-logo' onMouseEnter={() => MouseEnter3()} onMouseLeave={() => MouseLeave3()} />
          </a>
        </Flex>

        <Text color={"rgba(255, 255, 255, 0.80);"} fontFamily={"Inter"} fontSize={{ base: "1rem", md: "1rem", lg: "1.25rem" }} fontStyle={"normal"} fontWeight={400} lineHeight={"1.59375rem"} mt={"1rem"}>© 2023 Mprofesssional. All rights reserved</Text>
      </Box>

    </Box>
  )
}

export default Footer