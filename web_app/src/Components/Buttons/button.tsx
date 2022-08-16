import { Center, Button } from '@chakra-ui/react'
import React from 'react'
type ButtonProps = {
  text?: string;
}
export default function ButtonModel({text, }: ButtonProps) {
  return (
    < >
          <Center mt='82px'  mb='222px'>
            <Button border={'2px' } borderColor='#DFDFDF' bg='#FFFFFF' fontSize='22px' w='157px' 
            rounded='45px' p='16px 38px; gap: 10px;'
            h='58px'
            >
             {text}
            </Button>
          </Center>
    </>
  );
}
