import { Box, Flex, Text, Link, Center } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Center width="100%"
      h="95px"
      borderTop="1px solid #f2f2f2f2"
      p="20px"
      as="footer"
      justifyContent="space-between"
      bottom='0'
      flexDirection={{ base: 'column', md: 'row' }}
    > <Flex lineHeight='26px'>
        <Text mr={{ base: 0, md: "10px" }} fontWeight="300" fontFamily='Roboto' fontSize={{ base: '18px', md: '20px' }} color='#000000'>
          Feito por
        </Text>
        <Text
          color="#FDC921"
          fontWeight="bold"
          fontSize={{ base: '18px', md: '24px' }}
          ml={{ base: '5px', md: 0 }}
          cursor="pointer"
          onClick={() =>
            window.open("https://goblockchain.io/gotokens/", "_blank")
          }
        >GoTokens
        </Text>
      </Flex>
      <Flex fontFamily="Roboto"
        fontWeight="400"
        fontSize={{ base: '18px', md: '20px' }}
      >
        <Text
          color="#A19D9D"
          ml={{ base: '25px', md: "51px" }}
          cursor="pointer"
          line-height="23px"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1D8bSTcXUmKjAj7AgUJWIPccmE6XItKt2/view?usp=sharing",
              "_blank"
            )
          }
        >
          Política de Privacidade
        </Text>
        <Text
          color="#A19D9D"
          ml={{ base: '5px', md: "51px" }}
          mr={{ base: '25px', md: 0 }}
          cursor="pointer"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1D8bSTcXUmKjAj7AgUJWIPccmE6XItKt2/view?usp=sharing",
              "_blank"
            )
          }
        >
          Termos de uso
        </Text>
      </Flex>
    </Center>
  )
}

export default Footer