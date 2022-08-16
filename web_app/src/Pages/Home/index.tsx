import React, { ReactElement, useState } from "react";
import { Box, Button, Center, Flex, Heading, Text, Image as ChakraImage } from "@chakra-ui/react";
import { useConfig } from "../../Hooks";

import Home1 from '../../Assets/Images/Home.svg';
import Info from '../../Assets/Images/Info.svg';
import Home2 from '../../Assets/Images/Home2.svg'
import Info2 from '../../Assets/Images/Info2.svg'

import { NavigationButton } from "../../Components";
import { Nav } from "../../Components/NavButtons";
import Footer from "../../Layouts/Footer";
import { SpaceHome } from "../../Routes/spaceHome";
import { About } from "../../Components/viewAbout";
import ViewHome from "../../Components/viewHome";

export default function Home() {
  const [visivel, setVisivel] = useState<'Home' | 'About'>('Home')
  const { config } = useConfig();

  return (
    <>

      <Box bg="#292929" position="relative" width="100%">
        <Nav />
        <Box
          h={{ base: '512px', md: '512px', lg: "512px" }}
          w='100%'
          mt='-50px'
          zIndex="40"
          backgroundPosition="center"
          bg='red'
        >
          <Flex bg='yellow'
            w='100%'
            h='100%'
            flexDir={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }}
            justifyContent='space-between'
          >
            <Box bg='green'
              w={{ base: '100%' }}
            >
              <Text w='100%'
                bg='red'
                mt={{ base: '25px', md: '25px' }}
                ml={{ base: '15px', md: '55px' }}
                fontSize={{ base: '25px', md: '35px' }}
                fontWeight='700'
                color='#fff'
              >
                TITULO <br />CHAMADA<br /> SOBRE O NFT <br />DA FTM
              </Text>
              <Text bg='yellow'
                mt={{ base: '25px', md: '25px' }}
                ml={{ base: '15px', md: '55px' }}
                w={{ base: '120px', md: '450px' }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae placeat ipsam saepe officiis laudantium, iusto praesentium doloribus quas temporibus error velit beatae ratione maxime, doloremque numquam cum architecto, ab provident.
              </Text>
              <Button bg='#ffffff'
                mt={{ base: '25px', md: '25px' }}
                ml={{ base: '15px', md: '55px' }}
                w={{ base: '120px', md: '120px' }}
                borderRadius='none'
              >
                SAIBA MAIS
              </Button>
            </Box>
            <Center bg='orange'
              w={{ base: '100%' }}
            >
              <Box w='350px'
                h='350px'
                bg='gray'
              >

              </Box>
            </Center>
          </Flex>
        </Box>
        <Center h="42px" mt="34px" >
          <Text
            m='4px'
            height="52px"
            fontFamily='Roboto'
            fontSize={{ base: "31px", md: "44px" }}
            fontWeight="700"
            lineHeight={{ base: "36px", md: "51px" }}
            textAlign="center"
            color="#000000"
          >
            Comunidade
          </Text>
        </Center>
        <Center gridGap={{ base: '15px', md: '30px' }} mt="89px" flexWrap={"wrap"} >

          <NavigationButton onClick={() => setVisivel('Home')}
            bg={visivel === 'Home' ? '#454545' : '#FFFFFF'}
            textColor={visivel === 'Home' ? '#FFFFFF' : '#454545'}
            text="Home"
            icon={visivel === 'Home' ? Home1 : Home2}
          />
          <NavigationButton onClick={() => setVisivel('About')}
            bg={visivel === 'About' ? '#454545' : '#FFFFFF'}
            textColor={visivel === 'About' ? '#FFFFFF' : '#454545'}
            text="About"
            icon={visivel === 'About' ? Info2 : Info}
          />
        </Center>
        <Box>
          {visivel === "Home" && (
            <ViewHome />
          )}
          {visivel === "About" && (
            <About />
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <SpaceHome>{page}</SpaceHome>;
};
