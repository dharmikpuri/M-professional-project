import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react"

import HimanshiKothari from "../../assets/Images/Placements/HimanshiKothari.png"
import VarshaMali from "../../assets/Images/Placements/VarshaMali.png"
import MukeshSwarnkar from "../../assets/Images/Placements/MukeshSwarnkar.png"
import ManishNagda from "../../assets/Images/Placements/ManishNagda.png"
import NikhilMenaria from "../../assets/Images/Placements/NikhilMenaria.png"
import DhruvanshPanwar from "../../assets/Images/Placements/DhruvanshPanwar.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";


let data = [
  {
    image: HimanshiKothari,
    name: "Himanshi Kothari",
    post: "Finance Manager",
    company: "Kalpatru Credit Co. Society",
    course: "Distance - MBA",
    desc: "I am Himanshi, I came to know about M Professional Education from a friend. I have recently completed my Distance MBA training and got placed in Kalpatru Credit. It was such a great experience. Thank you Tarun sir for your guidance."
  },
  {
    image: VarshaMali,
    name: "Varsha Mali",
    post: "Customer Service Officer",
    company: "Utkarsh Small Finance",
    course: "Program in Banking",
    desc: "I learned about this place from a friend and came in contact with Tarun sir. It is a great opportunity to meet him and he guided me on lot of things and also supported me. I choose to start my journey with Tarun sir. He is very helpful. As a Housewife it is a great opportunity to pursue Banking Training. After training I got placement. Right now I am in Utkarsh Small Finance Bank. "
  },
  {
    image: MukeshSwarnkar,
    name: "Mukesh Swarnkar",
    post: "MIS Executive",
    company: "SBI Life Insurance",
    course: "Program in Finance & Accounts",
    desc: "I am truly thankful to M Professional Education for making my career and life in the Finance Industry. It is a good place to make your career and professional life in the Banking & Finance Sector. Thanks a lot for supporting Tarun Sir. I will recommend everyone to join training for Banking & Finance Careers from here!"
  },
  {
    image: ManishNagda,
    name: "Manish Nagda",
    post: "Web Developer",
    company: "World SEO Service",
    course: "Program in Website Development",
    desc: "I always worried about my career and a secure job.......while I was searching for that I got to know about my professional education from one of my relatives, there I met Mr. Tarun sir, and he guided me on why I should choose Website Development as a career.....so that my skills, knowledge, and experience will be sharpened. I'm very glad that I joined those classes, and got Placement as a Web Developer."
  },
  {
    image: NikhilMenaria,
    name: "Nikhil Menaria",
    post: "Founder",
    company: "Inpllen Web Development",
    course: "Program in Software Development",
    desc: "It was a great experience for me to learn in M Professional Education. I like the way of teaching, it is very easy to understand and also the friendly atmosphere. The course is also structured very well by the teachers. I'm glad that I joined this coaching and got to know many things and also enjoyed it. I would highly recommend others to join. Tarun Tak sir is very helpful"
  },
  {
    image: DhruvanshPanwar,
    name: "Dhruvansh Panwar",
    post: "Manager ",
    company: "Tata Capital",
    course: "Program in Banking",
    desc: " My experience with M Professional Education has been largely positive. The institute is dedicated to providing a high-quality education and supporting the holistic development of its students. I appreciate the effort and commitment of the staff and faculty in making this educational journey valuable and enriching."
  },

]
const Placements = () => {
  return (
    <Box bg={"#FECC00"} py={{ base: "1.5rem", md: "3rem", lg: "2rem" }} name="Placements" mb={{base:"4rem",md:"4rem",lg:"7.5rem"}}>
      <Box w={{ base: "95%", md: '95%', lg: "90%" }} m={"auto"} >
        <Text color={"#000"} fontFamily={"Clash Display"} fontSize={{ base: "2rem", md: "2.8rem", lg: "3.5rem" }} fontWeight={700} fontStyle={"normal"} lineHeight={"normal"} mb={"0.75rem"} w={"90%"} m={"auto"}>Placements</Text>
        <Text color={"rgba(0, 0, 0, 0.80);"} fontFamily={"Inter"} fontSize={{ base: "1rem", md: "1.25rem", lg: "1.25rem" }} fontWeight={600} fontStyle={"normal"} lineHeight={"normal"} w={"90%"} m={"auto"} mb={{ base: "2rem", md: "3rem", lg: "3.5rem" }}>This Can Be You!</Text>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              //   spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              //   spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              //   spaceBetween: 50,
            },
          }}
          // navigation={true}
          // pagination={{
          //     clickable: false
          // }}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          <Box >

            {data.map((el, i) => (
              <SwiperSlide>
                <Box  >
                  <Box w={{ base: "95%", md: "95%", lg: '90%' }} m={"auto"}>
                    <Image src={el.image} alt={`${el.name}-img`} borderRadius={"1.25rem"} w={"100%"} />

                    <Text color={"#000"} fontFamily={"Inter"} fontSize={{ base: "1.1rem", md: "1.25rem", lg: "1.4rem" }} fontWeight={700} fontStyle={"normal"} lineHeight={"2rem"} mt={"1rem"}>{el.name}</Text>

                    <Text color={"#4B5563"} fontFamily={"Inter"} fontSize={{ base: "1.1rem", md: "1.25rem", lg: "1.4rem" }} fontWeight={500} fontStyle={"normal"} >{el.post}</Text>

                    <Text color={"#4B5563"} fontFamily={"Inter"} fontSize={{ base: "1.1rem", md: "1.25rem", lg: "1.5rem" }} fontWeight={500} fontStyle={"normal"}>{el.company}</Text>

                    <Text color={"#000"} fontFamily={"Inter"} fontSize={{ base: "1.1rem", md: "1.25rem", lg: "1.5rem" }} fontWeight={600} fontStyle={"normal"} mt={"0.725rem"}>Course:
                      <Text as={"span"} color={"#4B5563"} fontFamily={"Inter"} fontSize={{ base: "1.1rem", md: "1.25rem", lg: "1.5rem" }} fontWeight={500} fontStyle={"normal"}> {el.course}</Text>
                    </Text>

                    <Text color={"#374151"} fontFamily={"Inter"} fontSize={"1.1rem"} fontWeight={400} fontStyle={"normal"} mt={"1rem"}>{el.desc}</Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Box>
        </Swiper>
      </Box>
    </Box>
  )
}

export default Placements


// HK
// VM
//MS
//MNAGDA
//NM