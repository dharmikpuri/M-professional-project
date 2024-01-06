import { Box, Button, FormControl, FormHelperText, Input, Text, Textarea,  useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const ContactUs = () => {
    const toast = useToast()
    const [resize, setResize] = React.useState('none');
    let obj = {
        from_name: "",
        email: "",
        contact: "",
        message: ""
    }
    const [val, setVal] = useState(obj);
    const handleChange = (e) => {
        const { name, value } = e.target
        setVal({ ...val, [name]: value })
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nqrb8zn', 'template_t9if14f', form.current, '0KmWBShKv4PzvCfHM')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          setVal({
            from_name: "",
            email: "",
            contact: "",
            message: ""
        })
      };
    

    return (
        <Box pb={{ base: "4rem", md: "4rem", lg: "7.5rem" }} name="Contact Us">
            <Box bg={"#252529"} borderRadius={"1.25rem"} backdropFilter={"blur(8px)"} p={{ base: "1rem", md: "1.5rem", lg: "2.5rem" }} m={"auto"} w={{ base: "95%", md: "90%", lg: "80%" }}>
                <Text color={"#FFF"} textAlign={"center"} fontFamily={"Clash Display"} fontSize={{ base: "1.8rem", md: "2.5rem", lg: "3.5rem" }} fontWeight={600} lineHeight={"3.75rem"} mb={{ md: "1rem", lg: "2.5rem" }}>Contact Us</Text>

                <form ref={form} onSubmit={sendEmail}>
                    <FormControl  >

                        <Input placeholder='Enter Your Name' name='from_name' value={val.from_name} onChange={handleChange}  type='text' bg={"#DCDCDC"} borderRight={"0.5rem"} py={'1.1rem'} px={"1.25rem"} h={"3.5rem"} _placeholder={{ fontSize: { base: "1.15rem", md: "1.25rem", lg: "1.25rem" }, color: "rgb(0,0,0,0.60)", fontFamily: "Inter", fontWeight: 500 }} mb={"1.5rem"} />


                        <Input placeholder='Enter Your Email' name='email' value={val.email} onChange={handleChange}  bg={"#DCDCDC"} borderRight={"0.5rem"} py={'1.1rem'} px={"1.25rem"} h={"3.5rem"} _placeholder={{ fontSize: { base: "1.15rem", md: "1.25rem", lg: "1.25rem" }, color: "rgb(0,0,0,0.60)", fontFamily: "Inter", fontWeight: 500 }} />
                        <FormHelperText color={"#FFF"} mb={"1.5rem"}>We'll never share your email.</FormHelperText>

                        <Input placeholder='Enter Your Mobile Number' name='contact' value={val.contact} onChange={handleChange} bg={"#DCDCDC"} borderRight={"0.5rem"} py={'1.1rem'} px={"1.25rem"} h={"3.5rem"} _placeholder={{ fontSize: { base: "1.15rem", md: "1.25rem", lg: "1.25rem" }, color: "rgb(0,0,0,0.50)", fontFamily: "Inter", fontWeight: 500 }} mb={"1.5rem"} />

                        <Textarea value={val.message} onChange={handleChange} name='message' placeholder='Write Your Message' h={"8rem"} resize={resize} bg={"#DCDCDC"} borderRight={"0.5rem"} py={'1.1rem'} px={"1.25rem"} _placeholder={{ fontSize: { base: "1.15rem", md: "1.25rem", lg: "1.25rem" }, color: "rgb(0,0,0,0.60)", fontFamily: "Inter", fontWeight: 500 }}
                        />

                        <Button color={"#000"} fontFamily={"Inter"} fontSize={"1.25rem"} fontStyle={"normal"} fontWeight={600} padding={"2rem 2.5rem"} borderRadius={"0.5rem"} bg={"#FECC00"} h={"3rem"} mt={"2.5rem"} display={"flex"} justifyContent={"center"} _hover={{
                            bg: " #FECC00",
                            boxShadow: "0 0 20px 5px #f2ce3f"
                        }} type='submit' onClick={()=> toast({
                            title: 'Thank You For Contacting Us',
                            description: "We'll react out to you soon.",
                            status: 'success',
                            position: 'top-right',
                            duration: 4000,
                            isClosable: true,
                          })}>Submit</Button>

                    </FormControl>
                </form>


            </Box>
        </Box>
    )
}

export default ContactUs

// Public Key ="0KmWBShKv4PzvCfHM"
//Service Key = "service_nqrb8zn"
//Template Key = "template_t9if14f"