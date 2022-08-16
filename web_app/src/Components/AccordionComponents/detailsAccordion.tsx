import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Link,
  TextProps,
  Flex,
} from "@chakra-ui/react";

type DetailsAccordionProps = {
  title: string;
  //icon: string;
  icon: JSX.Element;
  details: any;
};

export const DetailsAccordion = ({ title, icon, details }: DetailsAccordionProps) => {
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

  type NftDetailsProps = {
    title?: string;
    text?: string;
    url?: string;
    color?: string;
  };

  const NftDetails = ({ title, text, url, color }: NftDetailsProps) => {
    const renderText = () => {
      if (url === undefined) {
        return (
          <Text
            color="#454545"
            fontFamily="Roboto"
            fontWeight="700"
            fontSize="18px"
            lineHeight="21px"
          >
            {text}
          </Text>
        );
      } else {
        return (
          <Text
            color={color === undefined ? "#454545" : color}
            fontFamily="Roboto"
            fontWeight="700"
            fontSize="18px"
            lineHeight="21px"
          >
            <Link isExternal={true} href={url}>
              {text}
            </Link>
          </Text>
        );
      }
    };

    return (
      <Flex
        mt="10px"
        justifyContent="space-between"
        _first={{
          marginTop: "0px",
        }}
        _last={{
          marginBottom: "0px",
        }}
      >
        <Text
          fontFamily="Roboto"
          fontWeight="700"
          fontSize="18px"
          lineHeight="21px"
          color="#454545"
        >
          {title}
        </Text>
        {renderText()}
      </Flex>
    );
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
          <Box>
            {/*   {details.map((detail, index) => ( */}
            <NftDetails
              //key={index}
              //title={detail.title}
              title="Contract address"
              //text={detail.text}
              text="0xF5D6...f723"
              //url={detail.url}
              url="https://www.google.com"
              //color={detail.color}
              color="#454545"
            />
            {/* ))} */}
          </Box>
          <Box mt='5px'>
            {/*   {details.map((detail, index) => ( */}
            <NftDetails
              //key={index}
              //title={detail.title}
              title="Token ID"
              //text={detail.text}
              text="Matic"
              //url={detail.url}
              //color={detail.color}
              color="#454545"
            />
            {/* ))} */}
          </Box>
          <Box mt='5px'>
            {/*   {details.map((detail, index) => ( */}
            <NftDetails
              //key={index}
              //title={detail.title}
              title="Standard Token"
              //text={detail.text}
              text="ERC-1155"
              //url={detail.url}
              //color={detail.color}
              color="#454545"
            />
            {/* ))} */}
          </Box>
          <Box mt='5px'>
            {/*   {details.map((detail, index) => ( */}
            <NftDetails
              //key={index}
              //title={detail.title}
              title="Blockchain"
              //text={detail.text}
              text="Mumbai"
              //url={detail.url}
              //color={detail.color}
              color="#454545"
            />
            {/* ))} */}
          </Box>
          <Box mt='5px'>
            {/*   {details.map((detail, index) => ( */}
            <NftDetails
              //key={index}
              //title={detail.title}
              title="Metadata"
              //text={detail.text}
              text="Decentralizada"
              //url={detail.url}
              //color={detail.color}
              color="#454545"
            />
            {/* ))} */}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
