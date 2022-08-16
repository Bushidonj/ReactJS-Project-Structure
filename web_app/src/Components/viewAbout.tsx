import React from 'react'
import {
  AspectRatio,
  Box,
  Center,
  Text,
} from '@chakra-ui/react'
import { AboutSite } from '../Utils/aboutSite';
// import { AboutSite } from '../Services/Utils/AboutSite';

type BenefitsProps = {
  title1?: string;
  title2?: string;
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
};

const TextComponet = ({ title2, title1, text, text2, text3, text4, text5 }: BenefitsProps) => {

  const textComponetProps = {
    fontFamily: 'Roboto',
    fontStyle: "normal",
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "23px",
    color: "##454545",
  }

  return (
    <>
      <Text mt="30px" textAlign="center"  {...textComponetProps}>
        {text}
      </Text>
      <Text mt="20px" textAlign="center" {...textComponetProps}>
        {text2}
      </Text>
      <Text mt="20px" textAlign="center" {...textComponetProps}>
        {text3}
      </Text>
      <Text mt="20px" textAlign="center" {...textComponetProps}>
        {text4}
      </Text>
    </>
  );
};

export function About() {
  return (
    <>
      <Center mt="70px" flexDir="column" mb="70px" p="20px" >
        <Text textAlign="center"
          fontFamily='Roboto'
          fontStyle="normal"
          fontSize="30px"
          fontWeight="700"
          lineHeight="35px"
          color="#000000"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        </Text>
        <Box mt="71px" maxW="981px" >
          {AboutSite.map((i) => (
            <TextComponet key={i.title1}
              text={i.paragrafo1}
              text2={i.paragrafo2}
              text3={i.paragrafo3}
              text4={i.paragrafo4}
            />
          ))}
        </Box>
        <Box mt={{base: '20px', md:'84px'}} mb={{base: '20px', md:'173px'}} >
              <AspectRatio mt='30px' w={{ base: '350px', md: '660px', lg: "812px" }}
                h={{ base: '250px', md: '290px', lg: "454px" }}
                rounded='15px'
                ratio={1} overflow='hidden'>
                <iframe title='Buddha Spa'
                  src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
      </Center>
    </>
  )
}
