import React, { ReactElement, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  Link,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button as ChakraButton,
  Tooltip,
} from "@chakra-ui/react";

import { IoIosArrowBack } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { RiGroup2Line } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";


import { Nav } from "../../Components/NavButtons";
import { BuyButton, ImageTextLinkButton } from "../../Components";
import { DescriptionAccordion } from "../../Components/AccordionComponents/descriptionAccordion";
import { BenefitsAccordion, DetailsAccordion } from "../../Components/AccordionComponents";
import { PurchaseCheckIcon, EtherscanGrayscaleIcon, BoxIcon, ViewIcon } from "../../Assets/Icons";
import { GrTextAlignFull } from "react-icons/gr";

import Footer from "../../Layouts/Footer";

import share from "../../Assets/Icons/share.png"
import purchasedBadge from '../../Assets/Icons/purchased-badge.png'
import raribleimg from "../../Assets/Icons/rarible.png";
import ShareIcon from '../../Assets/Icons/ShareIcon.png';
import Reload from '../../Assets/Icons/Reload.png';

import { VscSearch } from "react-icons/vsc";
import openseaimg from "../../Assets/Icons/opensea.svg";

type NftLinksProps = {
  text?: string;
  url?: string;
  icon?: JSX.Element;
};

const NftLinks = ({ text, url, icon }: NftLinksProps) => (
  <Flex
    alignItems="center"
    mt="15px"
    _first={{
      marginTop: "0px"
    }}
  >
    <Link isExternal={true} href={url} display="flex" alignItems="center">
      <Text
        color="#A19D9D"
        fontFamily="roboto"
        fontWeight="500"
        fontSize="18px"
        lineHeight="21px"
        mr="20px"
      >
        {text}
      </Text>
      {icon}
    </Link>
  </Flex>
);

const NFT = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const NFT_BENEFITS = [
    {
      icon: <RiGroup2Line size="40px" />,
      title: "Meet & Greet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <IoTicketOutline size="40px" />,
      title: "Sorteio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const NFT_DETAILS = [
    {
      title: 't("ctt_addr")',
      text: '0xD9D6...f723'
    },
    {
      title: "Token ID",
      text: '?'
    },
    {
      title: 't("ctt_standard")',
      text: "ERC-1155",
    },
    {
      title: "Blockchain",
      text: 'Mumbai'
    },
    {
      title: "Metadata",
      text: "Decentralized",
    },
  ];
  function handleClick() {
    window.open("/", "_self");
  }

  return (
    <>
      <Nav />
      <Flex
        flexWrap="wrap"
        flexDirection={{ base: "column", md: "column", xl: "row" }}
        minH="2000px"
        w='100%'
        p={{ base: "0px ", xl: "0px 40px" }}
      >

        <Box
          p="0 60px"
          borderRight={{ base: "0px", xl: "1px solid #DFDFDF" }}
          flex={{ base: "0", md: "0", xl: "1" }}
          display="flex"
          justifyContent="center"
          mx={{ base: "auto", md: "30px", xl: "auto" }}
          mt={{ base: "120px", md: "140px", xl: " 140px" }}
        >
          <IconButton
            aria-label="Back button"
            onClick={handleClick}
            icon={<IoIosArrowBack />}
            bg="#FFFF"
            border="solid 1px #DFDFDF"
            _hover={{ bg: "#DFDFDF" }}
            ml={{ base: "0", xl: "-40px" }}
            borderRadius="50%"
            position={{ base: "absolute", xl: "fixed" }}
            left="10%"
          />
          <Box
            position={{ base: "relative", xl: "fixed" }}
            ml={{ xl: "60px" }}
            mt={{ lg: 0, base: "80px" }}
          >
            <Image
              w={{ base: "341px", md: "381px", xl: "415px", "2xl": "515px" }}
              h={{ base: "341px", md: "381px", xl: "415px", "2xl": "515px" }}
              borderRadius="15px"
              // src={}
              bg='#848484'
            />
            <>
              <Center justifyContent="center" mt="20px" flexWrap="wrap">
                <ImageTextLinkButton
                  tooltip="Ver no OpenSea"
                  image={openseaimg}
                  url={'https://opensea.io/assets/'}
                />
                <ImageTextLinkButton
                  tooltip="Ver na Rarible"
                  image={raribleimg}
                  url={'https://rarible.com/'}
                />
              </Center>
            </>
          </Box>
        </Box>
        <Box
          p={{ base: "0 60px", md: "0 75px", xl: "0 90px" }}
          flex="1"
          mb={{ base: "40px", md: "1px", xl: "30px" }}
          h="100%"
          mt={{ base: "30px", md: "30px", xl: "101px" }}
        >
          <Flex alignItems="center"
            flexDirection={{ base: "column", md: "row", xl: "row" }}
            justifyContent='space-between'
          >
            <Heading
              mt="35px"
              fontSize="32px"
              lineHeight="37px"
              fontFamily="roboto"
              color={'#454545'}
            >
              Live #01
            </Heading>
            <Flex bg='yellow' w='103px' h='44px' >
              <Image

                p="0px 38px"
                _hover={{ bg: '#454545' }}
                bg="#FFFFFF"
                borderRadius="45px"
                boxShadow='0px 1px rgba(0, 0, 0, 0.19)'
                src={ShareIcon}
              >
              </Image>
              <Image

                p="0px 38px"
                _hover={{ bg: '#454545' }}
                bg="#FFFFFF"
                borderRadius="45px"
                boxShadow='0px 1px rgba(0, 0, 0, 0.19)'
                src={Reload}
              >
              </Image>
            </Flex>
          </Flex>
          <Center
            mt={{ base: "20px", md: "10px", xl: "10px" }}
            justifyContent={{ base: "center", xl: "flex-start" }}
          >
            <Text
              mt='4px'
              fontFamily="Roboto"
              fontWeight="bold"
              fontSize="16px"
              lineHeight="18px"
              color="#A19D9D"
              casing="uppercase"
            >
              Criado em JAN 07, 2022{" "}
            </Text>
            <Link
              isExternal={true}
              href={'https://opensea.io/assets/'}
            >
              <Image ml="25px" h="14px" w="14px" src={share} />
            </Link>
          </Center>
          <Box
            m="auto"
            display={"flex"}
            mt="40px"
            mb="50px"
            alignItems="center"
            flexWrap="wrap"
            justifyContent={{ base: "center", xl: "flex-start" }}
          >
            <BuyButton />
            <Flex
              alignItems="center"
              borderRadius="15px"
              width="fit-content"
              p="20px"
              shadow="0px 6px 23px rgba(0, 0, 0, 0.15);"
              id="OIE"
            >
              <Text
                fontSize="16px"
                lineHeight="19px"
                fontWeight="400"
                fontFamily="Roboto"
                color="#FDC921"
                ml="10px"
                mr="15px"
                casing={"uppercase"}
              >
                Você já possui esta NFT
              </Text>
              <span>
                <PurchaseCheckIcon boxSize={7} />
              </span>
            </Flex>
          </Box>

          <DescriptionAccordion
            title="Descrição"
            icon={<GrTextAlignFull />}
            description={'Benefícios da NFT'}
            creator_url="https://google.com/"
            creator_name="Live Club"
          // creator_image={}
          />

          <BenefitsAccordion
            title="Benefícios"
            icon={<BsStar />}
            benefits={NFT_BENEFITS}
          ></BenefitsAccordion>

          <DetailsAccordion
            title="Detalhes"
            icon={<VscSearch />}
            details={NFT_DETAILS}
          />
          <Box mt="40px" borderBottom="1px solid #DFDFDF"></Box>
          <Box mt="20px" mb="20px">
            <NftLinks
              text="Block Explorer"
              url={"https://explorer.matic.network/tx/"}
              icon={<EtherscanGrayscaleIcon boxSize={6} />}
            />
            <>
              <NftLinks
                text="Metadata"
                url={"https://opensea.io/assets/"}
                icon={<BoxIcon boxSize={6} />}
              />
              <NftLinks
                text="IPFS"
                url={"https://ipfs.io/ipfs/"}
                icon={<ViewIcon boxSize={6} />}
              />
            </>
          </Box>
        </Box>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalCloseButton border="1px solid #000" color="#000" />
          <ModalBody>
            <Image
              borderRadius="15px"
              // src={}
              bg='#454545'
            >
            </Image>
            <Image src={purchasedBadge} position="absolute" top="0" />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
};


export default NFT;
