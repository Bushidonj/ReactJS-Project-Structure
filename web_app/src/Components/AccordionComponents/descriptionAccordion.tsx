import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Center,
  Image,
  Link,
  TextProps,
} from "@chakra-ui/react";

import share from '../../Assets/Icons/share.png';


type DescriptionAccordionProps = {
  title?: string;
  icon?: JSX.Element;
  description?: string;
  creator_url?: string;
  creator_name?: string;
  creator_image?: string;
}

export const DescriptionAccordion = ({
  title,
  icon,
  description,
  creator_url,
  creator_name,
  creator_image,
}: DescriptionAccordionProps) => {
  const accordionProps = {
    p: "15px 15px",
    borderRadius: "10px",
    border: "1px solid #DFDFDF",
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

  return (
    <Accordion allowMultiple {...accordionProps}>
      <AccordionItem borderStyle={"none"}>
        <h2>
          <AccordionButton _focus={{ outline: "0" }} _hover={{ bg: "#ffff" }}>
            <Box display={"flex"} alignItems="center" flex="1" textAlign="left">
              {icon}
              <Text {...titleProps}>{title}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pt={"20px"}>
          <Text
            fontSize="20px"
            fontWeight="400"
            lineHeight="24px"
            fontFamily="Roboto"
          >
            {description} Drescrição
          </Text>

          <Box>
            <Text
              fontSize="20px"
              fontWeight="700"
              lineHeight="23px"
              fontFamily="Roboto"
              casing={"uppercase"}
              color={"#A19D9D"}
              mt={"20px"}
            >
              Criador            </Text>
            <Center justifyContent="start" mt="10px">
              <Image width="80px" src={creator_image}></Image>
              <Link href={creator_url} isExternal _focus={{ outline: 0 }}>
                <Text
                  ml="16px"
                  fontSize="20px"
                  lineHeight="23px"
                  fontWeight="700"
                  fontFamily="Roboto"
                  color={"#454545"}
                >
                  {creator_name}
                </Text>
              </Link>
              <Link href={creator_url} isExternal _focus={{ outline: 0 }}>
                <Image ml="10px" h="18px" w="18px" src={share} />
              </Link>
            </Center>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
