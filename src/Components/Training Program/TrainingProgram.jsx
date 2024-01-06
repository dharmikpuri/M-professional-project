import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Banking from '../../assets/Images/Training Program/Banking.png';
import Distance from '../../assets/Images/Training Program/Distance.png';
import IT from '../../assets/Images/Training Program/IT.png';
import Finance from '../../assets/Images/Training Program/Finance.png';
import ProfessionalSkills from '../../assets/Images/Training Program/ProfessionalSkills.png';
import DigitalMarketing from '../../assets/Images/Training Program/Digital Marketing.png';

let data=[
  {
    image:Banking,
    name:"Program in Banking for leading Pvt sector Banks",
    desc:"From College Students to become a Banker in just 4 Months. Join our Program in Banking for students and become a Customer Relationship Officer at Leading Banks."
  },
  {
    image:Distance,
    name:"Distance Learning Degree",
    desc:"Presenting Next - Generation Online MBA, BCA, BA, BCom Enroll NOW in Online Degree Programs from Top Universities . Designed for you to study effectively & get a career boost. Get a UGC-Entitled, Rated A+ by NAAC online MBA degree for a successful professional career."
  },
  {
    image:IT,
    name:"Program in Website Development",
    desc:"Learn Website & Software Development with Real time Developers. Gain Expertise in Front-end, Back-end, Web and App. Get Ready to Dive into the World of Computer Science."
  },
  {
    image:Finance,
    name:"Program in Finance & Accounts",
    desc:"A career in finance & Accounts can be a great way to build an interesting and rewarding career. You can work for the banks, Finance companies, accountants and even set up your own business! "
  },
  {
    image:ProfessionalSkills,
    name:"Professional Skills",
    desc:"A course that helps students and working professionals to prepare for job interviews, Soft Skills, resume writing and dressing formally. With a well-planned course of action, you can be better prepared for your next big opportunity. Join our professional skills Program and Learn how to present yourself in an Interview "
  },
  {
    image:DigitalMarketing,
    name:"Digital Marketing",
    desc:"Increase your employability quotient with the right theoretical and practical skills in Digital Marketing. Learn from the industry experts and start your Digital Marketing journey. Become a Google certified Digital Marketing Expert. join our 90 days digital marketing training program. Fast track your career in Digital Marketing with us."
  },
]
const TrainingProgram = () => {
  return (
    <Box pb={{base:"4rem",md:"4rem",lg:"7.5rem"}} w={"95%"} m={"auto"}>
      <Text fontFamily={"Clash Display"} color={"#FFF"} textAlign={"center"} fontSize={{base:"2rem",md:"2.8rem",lg:"3.5rem"}} fontStyle={"normal"} fontWeight={600}  mb={{base:"1rem",md:"2rem",lg:"3rem"}} name="Training Programs">Training  Programs</Text>

      <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={{base:"2rem",md:"3rem",lg:"5rem"}} w={"90%"} m={"auto"}>
        {data.map((el,i)=>(
          <GridItem bg={"#FFF"} borderRadius={"0.75rem"} key={el.id}>
            <Image src={el.image} alt={el.name} w={"100%"} borderRadius={"0.75rem 0.75rem 0rem 0rem"}/>
            <Box px={"1rem"} py={"1rem"}>
            <Text color={"#000"} fontFamily={"Inter"} fontSize={{base:"1.1rem",md:"1.25rem"}} fontStyle={"normal"} fontWeight={700} letterSpacing={"0.02425rem"} mt={{base:"0.725rem",md:"1.5rem"}}>{el.name}</Text>
            <Text color={"#4D4D4D"} fontFamily={"Inter"} fontSize={{base:"1rem",md:"1.1rem"}} fontStyle={"normal"} fontWeight={400} mt={'1rem'}>{el.desc}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>

    </Box>
  )
}

export default TrainingProgram