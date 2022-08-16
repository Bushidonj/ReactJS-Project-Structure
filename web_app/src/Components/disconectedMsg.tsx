import {
    Box,
    Center,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import Icon from "./Buttons/IconLink";
import closed from "../components/icons/closed.svg";

export const DisconectedMsg = () => {
    return (
        <>
            <Center position="relative" width="100%">
                <Center mt={{ base: '50px', md: '100px', lg: '168px' }}
                    mb={{ base: '70px', md: '150px', lg: '247px' }}
                    bg='#EFEFEF'
                    w={{ base: '350px', md: '600px', lg: "791px" }}
                    h={{ base: '250px', md: '250px', lg: "336px" }}
                    rounded="15px"
                    overflow='hidden'>
                    <Box maxW='480px'
                        m='10px'
                        fontStyle='normal'
                        fontFamily='Roboto'
                        fontSize={{ base: "20px", md: "30px" }}
                        fontWeight="300"
                        textAlign='center'
                        lineHeight={{ base: "25px", md: "35px" }}
                        color="#000000">
                        <Icon icon={closed} url={"#"}></Icon>
                        <Text mt='30px'>
                            Conecte-se para visualizar o Feed da Comunidade Buddha Spa
                        </Text>
                    </Box>

                </Center>
            </Center>
        </>

    )
};
