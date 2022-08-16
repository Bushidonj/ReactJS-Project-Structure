import { Center, Box, Flex, Text, Image, Link } from "@chakra-ui/react";


type IconProps = {
  icon?: string;
  url?: string;
  text?: string;

}
export default function Social({ icon, url, text, }: IconProps) {
  return (
    < >
      <Link href={url} target="_blank"  >
        <Center>
          <Image src={icon} />
        </Center>
        <Text mt='11px'> {text} </Text>
      </Link>
    </>
  );
}
