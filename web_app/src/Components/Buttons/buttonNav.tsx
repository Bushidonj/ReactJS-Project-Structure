import { Button } from "@chakra-ui/react";
import React from "react";
import { useConfig } from "../../Hooks";


type NavProps = {
  icon?: string;
  url?: string;
  text?: string;
  action?: () => void;
  active?: boolean;
};
export const ButtonNav = ({ text, action, active, icon }: NavProps) => {

  const { config } = useConfig();
  const active_button = active
    ? "2px solid " + config.mainColor
    : "2px solid #dfdfdf";

  const styledProps = {
    height: "50px",
    p: "15px 33px",
    borderRadius: "42px",
    borderColor: config.mainColor,
    bg: "#FFF",
    color: config.mainColor,
    border: { active_button },
    _hover: {
      borderColor: config.mainColor,
      bg: config.mainColor,
      color: "white",
    },
    transition: "all 250ms",
  };

  return (
    <Button
      textColor="#FFFFFF"
      h="60px"
      w="186px"
      rounded="45px"
      onClick={action}
      {...styledProps}
    >
      {text}
    </Button>
  );
};

export default ButtonNav;
