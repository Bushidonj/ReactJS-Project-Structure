import {
    Center,
    Text,
    Image,
  } from "@chakra-ui/react"

  type RoomsProps = {
    image: string
    name: string
  }
  
  export const Rooms = ({ image, name }: RoomsProps) => {
    return (
      <Center mt="20px"
      w="auto" h="auto"
        minH="110px"
        minW="110px"
        borderRadius="15px"
        flexDir="column"
        boxShadow="0px 6px 23px rgba(0, 0, 0, 0.1)"
      >
        <Image src={image} />
        <Text mt="13px">
          {name}
        </Text>
      </Center>
    )
  }