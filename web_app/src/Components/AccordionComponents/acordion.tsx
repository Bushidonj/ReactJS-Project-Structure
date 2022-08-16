import Icon from "../Buttons/IconLink";
import open from '../components/icons/open.svg'
import {
    Text,
    useDisclosure,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Flex,
    Center,

} from "@chakra-ui/react";

export const Acordion = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Popover isLazy>
                <PopoverTrigger>
                    <Flex gap='20px' >
                        <Text _focus={{ outline: 0, bg: "#FFFFFF", }}
                            _hover={{
                                transform: 'translateY(0)'
                            }}
                            fontFamily='Roboto'
                            fontStyle='normal'
                            fontSize="18px"
                            fontWeight="300"
                            lineHeight="21px"
                        >
                            Mais relevantes
                        </Text>
                        <Center>
                            <Icon icon={open} ></Icon>
                        </Center>
                    </Flex>
                </PopoverTrigger>
                <PopoverContent mr='10px' w='252px' h='225px'>
                    <PopoverBody >
                        <Text mt='20px'>Novos</Text>
                        <Text mt='20px'>Preço 1</Text>
                        <Text mt='20px'>Preço 2</Text>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
};
