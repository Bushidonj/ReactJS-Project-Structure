import React from "react";
import { Center, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { ModalNavConnect } from "../ModalNavConnect/modalNavConnect";

import iconBR from "../../Assets/Icons/PT-BR.png";

export const Nav = ({ ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        w="100%"
        h={{ base: "50px", md: "60px" }}
        backdropFilter="blur(60px)"
        position="fixed"
        top="0px"
        zIndex="40"
        {...rest}
      >
      </Flex>
      <Image
        ml="-45px"
        // src={}
        bg='#454545'
        zIndex="45"
        _hover={{
          transform: "translateY(-4px)",
        }}
        _focus={{ outline: 0 }}
        h="45px"
      />

      <ModalNavConnect isopen={isOpen} onopen={onOpen} onclose={onClose} />

      <Center
        h={{ base: "50px", md: "60px" }}
        w="257px"
        fontStyle="normal"
        color="#454545"
        fontWeight="700"
        fontSize="18px"
        lineHeight="21px"
        fontFamily="roboto"
        backdropFilter="blur(120px)"
        position="fixed"
        right="0px"
        onClick={onOpen}
        top="0px"
        zIndex="40"
      >
        Connect Wallet
      </Center>
    </>
  );
};
