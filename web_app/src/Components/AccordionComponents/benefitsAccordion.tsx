import React from "react";
import { IconType } from "react-icons/lib";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Text,
  TextProps,
  Flex,
  Icon,
} from "@chakra-ui/react";

import group from "../../Assets/Icons/group.png";
import finger from "../../Assets/Icons/finger.png"
import mao from "../../Assets/Icons/mao.png"
import box from "../../Assets/Icons/box.png"

type BenefitsAccordionProps = {
  title?: string;
  //icon?: IconType;
  icon?: JSX.Element;
  //benefits: string;
  benefits?: any;
}

export const BenefitsAccordion = ({ title, icon, benefits }: BenefitsAccordionProps) => {
  const accordionProps = {
    p: "15px 15px",
    borderRadius: "10px",
    border: "1px solid #dfdfdf",
    bg: "#fff",
    transition: "all 250ms",
    color: "#454545",
    m: "24px 0",
  };

  const titleProps: TextProps = {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px",
    ml: "20px",
    casing: "uppercase",
    fontFamily: "Roboto",
  };

  type NftBenefitsProps = {
    title?: string;
    description?: string;
    icon?: IconType;
  };


  return (
    <Accordion allowMultiple {...accordionProps}>
      <AccordionItem borderStyle={"none"}>
        <>
          <AccordionButton _focus={{ outline: "0" }} _hover={{ bg: "#ffff" }}>
            <Box display={"flex"} alignItems="center" flex="1" textAlign="left">
              {icon}
              <Text {...titleProps}>{title}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </>
        <AccordionPanel pb={4} pt={"20px"}>
          <Flex
            flexDirection={"row"}
            wrap="wrap"
            justifyContent={"space-evenly"}
            mt="20px"
          >
            {/*   {details.map((detail, index) => ( */}
            <Flex
              flexDirection={"column"}
              //key={index}
              alignItems="center"
              borderRadius={"15px"}
              shadow="0px 6px 22px rgba(0, 0, 0, 0.1);"
              minH={"300px"}
              w={{ xl: "40%", lg: "40%", md: "40%", sm: "100%" }}
              minW={"240px"}
              mx={"16px"}
              mb={"33px"}
              justifyContent={"center"}
            >
              {/* <Box m={"10px 0px"}>{benefit.icon}</Box> */}
              <Image src={group} />

              <Text
                color="#414141"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="24px"
                maxW={"60%"}
                textAlign="center"
                mt="25px"
              >
                Meet & Greet
              </Text>
              <Text
                color="#929292"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="22px"
                maxW={"60%"}
                textAlign="center"
                mt="40px"
                mb="20px"
              >
                {/*   {benefit.description} */}
                Descrição dos Beneficios
              </Text>
            </Flex>
            <Flex
              flexDirection={"column"}
              //key={index}
              alignItems="center"
              borderRadius={"15px"}
              shadow="0px 6px 22px rgba(0, 0, 0, 0.1);"
              minH={"300px"}
              w={{ xl: "40%", lg: "40%", md: "40%", sm: "100%" }}
              minW={"240px"}
              mx={"16px"}
              mb={"33px"}
              justifyContent={"center"}
            >
              <Image src={finger} />

              <Text
                color="#414141"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="24px"
                maxW={"60%"}
                textAlign="center"
                mt="25px"
              >
                Sorteio
              </Text>
              <Text
                color="#929292"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="22px"
                maxW={"60%"}
                textAlign="center"
                mt="40px"
                mb="20px"
              >
                {/*   {benefit.description} */}
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </Flex>
            <Flex
              flexDirection={"column"}
              //key={index}
              alignItems="center"
              borderRadius={"15px"}
              shadow="0px 6px 22px rgba(0, 0, 0, 0.1);"
              minH={"300px"}
              w={{ xl: "40%", lg: "40%", md: "40%", sm: "100%" }}
              minW={"240px"}
              mx={"16px"}
              mb={"33px"}
              justifyContent={"center"}
            >
              <Image src={mao} />

              <Text
                color="#414141"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="24px"
                maxW={"60%"}
                textAlign="center"
                mt="25px"
              >
                Ação Social
              </Text>
              <Text
                color="#929292"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="22px"
                maxW={"60%"}
                textAlign="center"
                mt="40px"
                mb="20px"
              >
                {/*   {benefit.description} */}
                Descrição da Ação Social
              </Text>
            </Flex>
            <Flex
              flexDirection={"column"}
              //key={index}
              alignItems="center"
              borderRadius={"15px"}
              shadow="0px 6px 22px rgba(0, 0, 0, 0.1);"
              minH={"300px"}
              w={{ xl: "40%", lg: "40%", md: "40%", sm: "100%" }}
              minW={"240px"}
              mx={"16px"}
              mb={"33px"}
              justifyContent={"center"}
            >
              <Image src={box} />

              <Text
                color="#414141"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="24px"
                maxW={"60%"}
                textAlign="center"
                mt="25px"
              >
                BENEFÍCIO
              </Text>
              <Text
                color="#929292"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="20px"
                lineHeight="22px"
                maxW={"60%"}
                textAlign="center"
                mt="40px"
                mb="20px"
              >
                {/*   {benefit.description} */}
                Descrição dos Beneficios
              </Text>
            </Flex>

          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
