import React from "react";
import {
    Box,
    Center,
    Text,
    Flex,
    Image,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Stack,
    InputGroup,
    Input,
    InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineMail } from "react-icons/ai";
import { FiKey } from "react-icons/fi";

import WallPay from "../../Assets/Images/W_wallPay.png";
import Vector from "../../Assets/Images/Vector.png";
import Group from "../../Assets/Images/Group.png";
import Star from "../../Assets/Images/Star.png";
import Versatil from "../../Assets/Images/Versatil.png";

import { group } from "console";

type Props = {
    isopen: boolean;
    onclose: () => void;
    onopen: () => void;
};

export const ModalNavConnect = ({
    isopen,
    onclose,
    onopen,
    ...rest
}: Props) => {
    return (
        <Modal isOpen={isopen} onClose={onclose} >
            <ModalOverlay
                backdropFilter="blur(60px)"
                background="rgba(255, 255, 255, 0.32)"
            />
            <ModalContent bg="none" boxShadow="none">
                <Button w='45px'
                    bg="#fff"
                    borderRadius="full"
                    onClick={onclose}
                    color="#454545"
                    fontSize="28px"
                    top="10px"
                    right="10px"
                    _focus={{
                        boxShadow: "none",
                    }}
                >
                    X
                </Button>
                <ModalBody>
                    <Center >
                        <Flex maxW={{ base: '345px', md: '1213px', lg: '1213px' }}
                            flexDir={{ base: "column", md: "column", lg: "row" }}
                            mt={{ base: '10px', md: '15px', lg: '20px', xl: '169px' }}
                        >
                            <Center>
                                <Wallet />
                            </Center>
                            <Box w={{ base: '345px', md: '680px', xl: '680px' }}
                                // mt={{ base: '5px', md: '10px', xl: '0px' }}
                                ml={{ base: '0px', md: '0px', xl: '26px' }}
                                h='648px'
                            >
                                <Center flexDir={{ base: "column", md: "row", xl: "row" }}
                                    mt={{ base: '26px', md: '26px', xl: '26px' }}>
                                    <SmallBox image={Vector} title={'Transparência'} text={'Fique por dentro do curso de cada transação efetuada.'} />
                                    <SmallBox ml='26px' image={Group} title={'Experiência Amigável'} text={'Navegação prática e intuitiva. Pra que complicar?'} />
                                </Center>
                                <Center flexDir={{ base: "column", md: "row", xl: "row" }}
                                    mt={{ base: '26px', md: '26px', xl: '26px' }}>
                                    <SmallBox image={Star} title={'Gerencie Benefícios'} text={'Faça uso de cada benefício adquirido por um token.'} />
                                    <SmallBox ml='26px' image={Versatil} title={'Versátil'} text={'Compre fundos e gerencie seus tokens adquiridos. '} />
                                </Center>
                            </Box>
                        </Flex>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const Wallet = () => (
    <Box
        w={{ base: "345px", md: "507px", xl: "507px" }}
        h="648px"
        bg="#ffff"
        boxShadow="0px 6px 23px rgba(0, 0, 0, 0.15)"
        borderRadius="15px"
    >
        <Center mt="50px">
            <Text
                fontFamily="roboto"
                fontStyle="normal"
                fontWeight="700"
                fontSize="30px"
                lineHeight="36px"
                textAlign="center"
            >
                Log-in
            </Text>
        </Center>
        <Center mt="27px">
            <Text
                fontFamily="roboto"
                fontStyle="normal"
                fontWeight="400"
                fontSize="16px"
                lineHeight="21px"
                textAlign="center"
                maxW="407px"
                maxH="41px"
            >
                Logue com sua conta Buddha Spa para entrar na plataforma com nossa
                WallPay.
            </Text>
        </Center>
        <Center mt="42px">
            <Stack spacing={4}>
                <InputGroup>
                    <Input
                        w={{ base: "320px", md: "407px" }}
                        h="60px"
                        border="1px solid #dfdfdf"
                        fontFamily="roboto"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="21px"
                        placeholder="Digite aqui seu e-mail"
                    />
                    <InputRightElement
                        mt="10px"
                        children={<AiOutlineMail color="#454545" fontSize="25px" />}
                    />
                </InputGroup>
                <InputGroup mt="18px">
                    <Input
                        w={{ base: "320px", md: "407px" }}
                        h="60px"
                        border="1px solid #dfdfdf"
                        color="#C4C4C4"
                        fontFamily="roboto"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="21px"
                        placeholder="Digite aqui sua senha"
                    />
                    <InputRightElement
                        mt="10px"
                        children={
                            <FiKey
                                color="#454545"
                                fontSize="25px"
                                overlinePosition="Center"
                            />
                        }
                    />
                </InputGroup>
            </Stack>
        </Center>
        <Center mt="42px">
            <Button
                w={{ base: "320px", md: "407px" }}
                h="60px"
                bg="#454545"
                borderRadius="45px"
                fontFamily="roboto"
                fontStyle="normal"
                fontWeight="400"
                fontSize="18px"
                lineHeight="21px"
                textAlign="center"
                color="#ffffff"
                _hover={{ bg: "#454545" }}
            >
                Logar
            </Button>
        </Center>
        <Center mt="49px">
            <Image src={WallPay} alt="wallpay" width="135px" height="28px" />
        </Center>
        <Center mt="33px">
            <Text
                fontFamily="roboto"
                fontStyle="normal"
                fontWeight="400"
                fontSize="20px"
                lineHeight="24px"
                textAlign="center"
            >
                Sua carteira digital em apenas um clique.
            </Text>
        </Center>
        <Center>
            <Text
                fontFamily="roboto"
                fontStyle="normal"
                fontWeight="700"
                fontSize="20px"
                lineHeight="24px"
                textAlign="center"
            >
                Saiba mais.
            </Text>
        </Center>
    </Box>
);

type SmallBoxProps = {
    image?: string;
    title?: string;
    text?: string;
    ml?: string;
};

const SmallBox = ({ image, title, text, ...rest }: SmallBoxProps) => (
    <Box mt={{ base: '8px', md: '12px', xl: '0px' }}
        w={{ base: '327px', md: '260px', lg: '327', xl: '327px' }}
        h="310px"
        bg='#ffff'
        boxShadow="0px 6px 23px rgba(0, 0, 0, 0.15)"
        borderRadius="15px"
        {...rest}
    >
        <Center mt="66px">
            <Image src={image} />
        </Center>
        <Center mt="42px">
            <Text
                fontFamily="roboto"
                fontWeight="700"
                fontSize="16px"
                lineHeight="18px"
                textAlign="center"
                color="#454545"
            >
                {title}
            </Text>
        </Center>
        <Center mt="19px">
            <Text
                fontFamily="roboto"
                fontWeight="400"
                fontSize="16px"
                lineHeight="18px"
                textAlign="center"
                color="#454545"
                maxH="39"
                maxW="208"
            >
                {text}
            </Text>
        </Center>
    </Box>
);
