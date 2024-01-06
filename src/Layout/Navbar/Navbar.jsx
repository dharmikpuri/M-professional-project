import React from 'react'
import Logo from "../../assets/Images/Navbar/Logo.png"
import { Box, Button, Flex, Image, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll"
import { useState } from 'react';
import { TbPhone } from "react-icons/tb"

const Navbar = () => {
  const navBarLists = [

    { to: "About Us", name: "About Us" },
    { to: "Training Programs", name: "Our Courses" },
    { to: "Placements", name: "Placements" },
    { to: "Contact Us", name: "Contact Us" },

  ];
  const { isOpen, onToggle } = useDisclosure();
  const [isOpenn, setIsOpen] = React.useState(false);

  // const toggleMenu = () => {
  //      setIsOpen(!isOpenn);
  // };

  // const [activeLink, setActiveLink] = useState("home"); // "home" is the initial active link

  // const handleLinkClick = (linkName) => {
  //      setActiveLink(linkName);
  // };
  return (
    <Box as="nav" w="100%" position={"fixed"} transform={"translate(-50%,-50%)"} left={"50%"} top={{ base: "5%", md: "5%", lg: "6%" }} backgroundRepeat={"no-repeat"} borderRadius={"0.5rem"} zIndex={100} justifyContent={"space-between"}
      px={{ base: '0rem', md: '2rem', lg: "2.5rem" }} py={"1rem"} maxW={"1600px"} m={'auto'} bg={"#000"} border={"0.5px solid rgba(0, 0, 0, 0.70);"}  backdropFilter={"blur(15px)"}>

      <Flex fontFamily={"Outfit"} justifyContent={"space-between"} alignItems={"center"}
        px={4}>
        <Flex alignItems={"center"} gap={{ base: "", md: "", lg: "24px" }} >
          <a href='#hero'>
            <Image src={Logo} alt="mProfessional Logo" w={{ base: "150px", md: "auto" }} h={{ base: "40px", md: "auto" }} />
          </a>
        </Flex>

        {/* Hamburger Menu Button for Small Screens */}
        {/* <Text border={"2px solid red"}>Abc</Text> */}
        <IconButton
          display={{ base: "block", md: "block", lg: 'none', xl: "none" }}
          onClick={onToggle}
          icon={isOpen ? <HiOutlineX size="2rem" color="#FFF" className='shadow' /> : <HiOutlineMenu size="2rem" color="#FFF" />}
          aria-label="Toggle Menu"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _focus={{ outline: "none" }}
          // size="xl" // Adjust the size as needed
          // left="0.5rem" // Position from the right
          // border={"2px dashed red"}
          // ml={"12.5rem"}
          right={5}
          position={"absolute"}
        />

        {/* Full Menu for Medium and Larger Screens */}
        <Flex
          display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap="1.75rem"
          fontWeight={400}
          fontSize={"1.125rem"}
          color={"#FFF"}
          fontFamily={"Outfit"}

        >
          {navBarLists.map(({ to, name, targett }, i) => {
            return (
              // <a href={to} target={targett}>
              <Box>
                <Text color={"#FFF"} fontFamily={"Inter"} fontSize={"1.25rem"} fontWeight={500} cursor={"pointer"} pos={"relative"}>
                  <Link activeClass="active" to={to} spy={true} smooth={true} duration={500} className="hoverEffect" offset={-100} >{name}
                  </Link>
                  {/* <Text justifyContent={"center"} display={"flex"} >
                                             <Link>Dot</Link>
                                        </Text> */}

                </Text>

              </Box>
              // </a>
              // : <NavLink to={to} key={i}>
              //      <Text >
              //           {name}
              //      </Text>
              // </NavLink>


            );
          })}
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdXg8WL8OACwCd3N4dVMaRsJpKFVq-9SxyAGSVkSjBAvrj5QQ/viewform' target='_blank'>
            <Button
              display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
              bg={"#FECC00"}
              fontSize={"1.25rem"}
              textAlign={"center"}
              color={"#000000"}
              fontFamily={"Inter"}
              fontWeight={600}
              fontStyle={"normal"}
              borderRadius={"1rem;"}
              px={"2.5rem"}
              py={"1.75rem"}
              // pos={"absolute"}
              right={"-0.01188rem"}
              left={"-0.03125rem"}
              _hover={{
                bg: " #FECC00",
                boxShadow: "0 0 20px 5px #f2ce3f"
              }}
              className='navContactBtn'
              gap={"0.5rem"}
            >
              Enquire Now
            </Button>
          </a>

        </Flex>

      </Flex>

      {/* Responsive Menu for Small Screens */}
      <Box justifyContent={"space-between"} display={"flex"}>
        <Flex
          position={"absolute"} right={"4px"} top={"4rem"}
          flexDir="column"
          // alignItems="center"
          justifyContent={"center"}
          // display={isOpen ? "flex" : "none"}
          display={isOpen ? { base: "flex", md: "flex", lg: "none", xl: "none" } : "none"}
          mt={isOpen ? "24px" : "0"}
          pt={isOpen ? "24px" : "0"}
          pb={isOpen ? "30px" : "0"}
          // width={"40%"}
          // ml={"1000px"}
          // right="45px"
          // border={"5px solid red"}
          lineHeight={"3rem"}
          zIndex={101}
          bg={"#000"}
          w={"250px"}
          h={"250px"}
          borderRadius={"12px"}
          color={"#FFF"}
        >
          {navBarLists.map(({ to, name, targett }, i) => {
            return (
              <Text w="100%" textAlign="center" fontSize={{ base: "18px", md: "20px", lg: "20px", xl: "30px" }} color={"#FFF"}>
                <Link activeClass="active" to={to} spy={true} smooth={true} duration={500} className="hoverEffect" offset={-100} >{name}
                </Link>
              </Text>

            );
          })}
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdXg8WL8OACwCd3N4dVMaRsJpKFVq-9SxyAGSVkSjBAvrj5QQ/viewform' target='_blank'>
            <Button
              bg={"#FECC00"}
              fontSize={"1.25rem"}
              textAlign={"center"}
              color={"#000"}
              fontFamily={"Inter"}
              fontWeight={600}
              display={"flex"}
              justifyContent={"center"}
              borderRadius={"1rem"}
              px={"1.5rem"}
              py={"1.5rem"}
              mt={"1.2rem"}
              w={"80%"}
              m={"auto"}
              _hover={{
                bg: " #FECC00",
                boxShadow: "0 0 20px 5px #f2ce3f"
              }}
            >
              Contact Us
            </Button>
          </a>

        </Flex>
      </Box>
    </Box>
  )
}

export default Navbar