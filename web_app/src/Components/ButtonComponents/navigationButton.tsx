import { Button, Image } from '@chakra-ui/react'
import React from 'react'

type ButtonHomeProps = {
    bg: string;
    text: string
    textColor?: string
    icon?: string
    onClick: () => void
};

export const NavigationButton = ({ bg, text, textColor, icon, onClick }: ButtonHomeProps) => {
    return (
        <Button
            bg={bg}
            _hover={{
                transform: 'translateY(0)'
            }}
            onClick={onClick}
            border='2px solid #DFDFDF'
            fontWeight="400"
            fontSize="22px"
            lineHeight="26px"
            fontFamily="roboto"
            _focus={{ outline: 0, bg: '#848484', color: "#FFFFFF" }}
            _active={{ outline: 0, bg:'#848484', color: "#FFFFFF"}}
            textColor={textColor}
            gridGap="10px"
            p="16px 38px"
            h="60px"
            w={{ base: "160px", lg: "186px" }}
            rounded="45px"
        >
            <Image src={icon} />
            {text}
        </Button>
    )
}