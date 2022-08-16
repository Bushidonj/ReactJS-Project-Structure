import React from "react";
import { Box, Flex, Link, Text, Image, Center, Button as ChakraButton, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button } from "@chakra-ui/react";

import group from "../../Assets/Icons/group.svg"

import nft from "../../Assets/Images/nft.png";
import acount from "../../Assets/Images/acount.svg"
import coin from "../../Assets/Images/coin.svg"

import Icon from "../Buttons/IconLink";

function NftCard() {
    function handleClick() {
        window.open("page2", "_self");
    }
    return (
        <Box>
            <Box bg='#FFFFFF'
                rounded="15px"
                shadow="0px 4px 19px rgba(0, 0, 0, 0.15)"
                minH="556px"
                maxH="764px"
                w="377px"
            >
                <Box // bgImage={nft}
                    bg='#454545'
                    backgroundSize='contain'
                    bgRepeat={"no-repeat"}
                    backgroundPosition='center'
                    rounded="15px"
                    w="377px"
                    h="322px">
                    <Center h='52px' backdropFilter="blur(20px)"
                        w="377px" position='absolute'
                        mt='270px'
                        zIndex='100'
                    >
                        <Text
                            fontStyle='normal'
                            fontFamily='Roboto'
                            fontSize="18px"
                            fontWeight="700"
                            lineHeight="21px"
                            color="#FFFFFF"
                        >   Nome Do NFT #2292
                        </Text>
                    </Center>
                </Box>
                <Flex justifyContent='space-between' >
                    <Center>
                        <Image src={acount} />
                        <Text fontStyle='normal'
                            fontFamily='Roboto'
                            fontSize="16px"
                            fontWeight="700"
                            lineHeight="19px"
                            color="#454545">Buddha Spah</Text>
                    </Center>
                    <Center mr='30px'>
                        <Text fontStyle='normal'
                            fontFamily='Roboto'
                            fontSize="16px"
                            fontWeight="400"
                            lineHeight="19px"
                            color="#454545">100/100</Text>
                    </Center>
                </Flex>
                <Center flexDir="row" mt="16px" justifyContent="space-between"
                    m='0px 30px 0px 30px'>
                    <Box >
                        <Text fontStyle='normal'
                            fontSize="16px"
                            fontWeight="300"
                            lineHeight="19px"
                            fontFamily='Roboto'
                            mb="7px"
                        >
                            FIXED PRICE:
                        </Text>
                        <Flex gap='6px'>
                            <Icon icon={coin} url={"#"} />
                            <Text fontStyle='normal'
                                fontSize="16px"
                                fontWeight="700"
                                lineHeight="19px"
                                fontFamily='Roboto'
                                color='#454545'
                            >
                                0,05
                            </Text>
                            <Text fontStyle='normal'
                                fontSize="16px"
                                fontWeight="700"
                                lineHeight="19px"
                                fontFamily='Roboto'
                                color='#454545'
                            >
                                BUDDHAS
                            </Text>
                        </Flex>
                    </Box>
                    <ChakraButton
                        w={{ base: '100px', md: '127px' }}
                        h={{ base: '40px', md: '48px' }}
                        fontWeight='400px'
                        fontSize={{ base: '18px', md: '18px' }}
                        padding='16px 38px'
                        lineHeight='21px'
                        fontFamily='Roboto'
                        textColor="#FFFFFF"
                        p='16px 38px;
                        gap: 10px'
                        borderRadius='45px'
                        _focus={{ outline: 0, bg: '#454545', color: "#FFFFFF" }}
                        _active={{ outline: 0, bg: '#454545', color: "#FFFFFF" }}
                        bg='#454545'
                        _hover={{ bg: '#454545' }}
                    >
                        Comprar
                    </ChakraButton>
                </Center>
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem border='none'>
                        <Center m='45px 42px 0px 127px'>
                            <AccordionButton
                                _focus={{ outline: 0, bg: "#FFFFFF", }}
                                _hover={{ transform: 'translateY(0)' }}>
                                <Text
                                    fontWeight='400px'
                                    fontSize='14px'
                                    lineHeight='16px'
                                    fontFamily='Roboto'
                                    textColor="#000000">
                                    Ver beneficios
                                </Text>
                                <AccordionIcon />
                            </AccordionButton>
                        </Center>
                        <AccordionPanel ml='31px' >
                            <Flex>
                                <Icon icon={group} url={"#"} />
                                <Text ml='7px' >Beneficio 1</Text>
                            </Flex>
                            <Flex>
                                <Icon icon={group} url={"#"} />
                                <Text ml='7px' >Beneficio 1</Text>
                            </Flex>
                            <Flex>
                                <Icon icon={group} url={"#"} />
                                <Text ml='7px' >Beneficio 1</Text>
                            </Flex>
                            <Flex>
                                <Icon icon={group} url={"#"} />
                                <Text ml='7px' >Beneficio 1</Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    );
}

export default NftCard;
