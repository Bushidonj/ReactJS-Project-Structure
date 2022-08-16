import { Box, Button, Center, Flex, Heading, Text, Image, Link } from "@chakra-ui/react";
import { FAQ } from "./Faq";
import { useConfig } from "../Hooks";


export default function ViewHome() {
  const { config } = useConfig()
  function handleClick() {
    window.open("NFT", "_self");
  }
  return (
    <>
      <Center m={{ base: "20px", lg: "40px" }} mt="82px" w='100%' bg='gray' h='350px' >
        {/* <Link onClick={() => handleClick}> */}
          <Button borderRadius='45px'
            onClick={() => handleClick}
          >
            Buy
          </Button>
        {/* </Link> */}
      </Center>
      <FAQ />
    </>
  );

}
