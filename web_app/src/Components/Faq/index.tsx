import React from "react";
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
  Tooltip,
  Link,
  Center,
  Box,
} from "@chakra-ui/react";
//import { MinusIcon, AddIcon } from '@chakra-ui/icons'

type BoxDropdawnProps = {
  title: string;
  content: JSX.Element;
};

const BoxDropdawn = ({ title, content }: BoxDropdawnProps) => {
  return (
    <Accordion allowToggle maxW="813px" w="100%" border="none" mt={{ base: "12px", md: "38px" }} >
      <AccordionItem border="none" borderRadius="15px" boxShadow="0px 6px 23px rgba(0, 0, 0, 0.1)" overflow="hidden" >
        <Text fontFamily='Roboto' bg='#FFFF'>
          <AccordionButton h="94px" _focus={{ outline: 0 }} >
            <Text ml={{ base: "8px", md: "47px" }}
              flex='1'
              textAlign='left'
              fontSize={{ base: "18px", md: "26px" }}
              fontWeight="700"
              lineHeight="30px"
            >
              {title}
            </Text>
          </AccordionButton>
        </Text>
        <AccordionPanel maxW="710px">{content}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export const FAQ = () => {


  return (
    <Center flexDir="column"
      fontFamily="roboto"
      paddingTop={{ base: "70px", md: "100px", xl: "194px" }}
      id="FAQ"
    >
      <Text
        h='99px'
        fontFamily="roboto"
        fontWeight='700'
        fontSize="36px"
        lineHeight="42px"
        color="#454545"
        textAlign={{ base: "center", xl: "left" }}
      >
        FAQ
      </Text>
      <Center flexDir="column" mb="195px" p="0 20px" mt='9px'>

        <BoxDropdawn
          title="Pergunta 1"
          content={
            <>
              <Text
                mt="29px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
              <Text
                mt="15px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
              <Text
                mt="15px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
            </>
          }
        />
        <BoxDropdawn
          title="Pergunta 2"
          content={
            <>
              <Text
                mt="29px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
              <Text
                mt="15px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
              <Text
                mt="15px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
            </>
          }
        />
        <BoxDropdawn
          title="Pergunta 3"
          content={
            <>
              <Text
                mt="29px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
              <Text
                mt="15px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
            </>
          }
        />
        <BoxDropdawn
          title="Pergunta 4"
          content={
            <>
              <Text
                mt="29px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
              <Text
                mt="15px"
                color="#afb2b8"
                // fontFamily="Roboto"
                fontWeight="400"
                fontSize="22px"
                lineHeight="26px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi natus eligendi ut praesentium vero maxime magnam deserunt corporis at nostrum voluptatibus molestias tempore pariatur, impedit itaque rem velit recusandae.
              </Text>
            </>
          }
        />
      </Center>
    </Center>
  );
};
