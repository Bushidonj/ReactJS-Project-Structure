
import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'


export function SpaceHome({ children }: { children: any }) {
  return (
    <>
      <Box bg='#E5E5E5' >
        {/* <Nav /> */}
        {/* <SocialLogin /> */}
        <Center
          w='621px'
          h='42px'
          mt='124px'
          ml='638px'
        >
          <Heading fontFamily='roboto'
            fontSize="44px"
            lineHeight="51px"
            textAlign='center'
            color="#454545">
            Espaço Live
          </Heading>
        </Center>
        <Flex justify="center"
          mt='89px'
          gap='10'>
          <Button textColor='#FFFFFF' h='60px' w='186px' rounded='45px' bg='#454545'>Home</Button>
          <Button h='60px' w='186px' rounded='45px' border='2px' borderColor='#DFDFDF'>sobre</Button>
        </Flex>
        {children}
      </Box>
      <Footer />
    </>
  )
}
