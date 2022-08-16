import React from "react";
import { Box, Flex, Text, Button as ChakraButton } from "@chakra-ui/react";

import { CartIcon } from "../../Assets/Icons/CartIcon";

type BuyButtonProps = {
  isOverColor?: string;
  symbol?: string;
  currency?: string;
  fixedPrice?: number;
  currencyPrice?: number;
  purchased?: boolean;
  handlePaymentModal?: () => void;
  isOver?: boolean;
  setIsOver?: (isOver: boolean) => void;
  isPaymentInProgress?: boolean;
};

export const BuyButton = ({
  isOverColor,
  symbol,
  currency,
  fixedPrice,
  currencyPrice,
  purchased,
  handlePaymentModal,
  setIsOver,
  isOver,
  isPaymentInProgress,
}: BuyButtonProps) => {

  return (
    <Flex
      w="fit-content"
      // h="71px"
      alignItems="center"
      justifyContent="center"
      mr="21px"
      borderRadius="15px"
      boxShadow={"0px 6px 23px rgba(0, 0, 0, 0.15)"}
      //borderColor={purchasedMainBorderColor(purchased)}
      borderColor={'gray.100'}
      p="20px 30px"
    >
      <Box>
        <Text
          fontSize="16px"
          fontWeight="300"
          lineHeight="19px"
          fontFamily='Roboto'
          mb="7px"
          //color={purchasedDarkTextColor(purchased)}
          color='#454545'
        >
          Preço fixo
        </Text>
        <Flex alignItems="center" flexWrap="wrap">
          <Text
            fontSize="16px"
            fontWeight="700"
            lineHeight="19px"
            //color={purchasedDarkTextColor(purchased)}
            color={'#000000'}
          >
            {fixedPrice} {symbol}
          </Text>
          <Text
            fontWeight="700"
            ml="9px"
            fontFamily="Roboto"
            fontStyle="Bold"
            fontSize="16px"
            lineHeight="20px"
            //color={purchasedDarkTextColor(purchased)}
            color={'#454545'}
          >
            {currencyPrice} {currency} R$185,00
          </Text>
        </Flex>
      </Box>
      <ChakraButton
        //isDisabled={purchased || isPaymentInProgress || !hasSalesStarted}
        ml="25px"
        borderRadius="10px"
        border="1px solid #dfdfdf"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="0"
        //_hover={{ borderColor: purchased ? "#dfdfdf" : isOverColor }}
        _hover={{ borderColor: "#dfdfdf" }}
        _focus={{ outline: 0 }}
        w="44px"
        h="44px"
        p="10px"
        onClick={handlePaymentModal}
      //onMouseOver={() => setIsOver(true)}
      //onMouseOut={() => setIsOver(false)}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          h="100%"
          w="100%"
          mr="3px"
        >
          <CartIcon
            boxSize={5}
            //color={isOver === true && purchased === false ? isOverColor : undefined}
            color={'#000000'}
          />
        </Flex>
      </ChakraButton>
    </Flex>
  );
};
