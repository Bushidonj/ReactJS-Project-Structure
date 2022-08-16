import React from "react";
import { Text, Link, Image, Tooltip } from "@chakra-ui/react";

type ImageTextLinkButtonProps = {
  image?: string;
  text?: string;
  url?: string;
  tooltip?: string;
};
export const ImageTextLinkButton = ({
  image,
  text,
  url,
  tooltip,
}: ImageTextLinkButtonProps) => {
  const renderLinkButton = () => {
    return (
      <>
        <Link
          mt={{ base: "10px", md: "0px" }}
          mx="10px"
          display="flex"
          alignItems="center"
          isExternal={true}
          href={url}
          textDecoration="none"
          borderRadius="10px"
          border="2px solid #DFDFDF"
          textAlign="center"
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="20px"
          lineHeight="26px"
          color="#717171"
          h="70px"
          p="0 20px"
          bg="0"
          //_hover={{ borderColor: config.mainColor }}
          _hover={{ borderColor: '#000000' }}
          _focus={{ outline: 0 }}
        >
          {image !== undefined && <Image src={image} h="35px" w="35px" />}
          {text !== undefined && (
            <Text fontWeight={400} mx="9px">
              {text}
            </Text>
          )}
        </Link>
      </>
    );
  };

  return (
    <>
      {tooltip !== undefined && (
        <Tooltip hasArrow label={tooltip} shouldWrapChildren bg={"#454545"}>
          {renderLinkButton()}
        </Tooltip>
      )}
      {tooltip === undefined && renderLinkButton()}
    </>
  );
};
