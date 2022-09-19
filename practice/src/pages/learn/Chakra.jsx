import React from "react";
import { Container, Tooltip } from "@chakra-ui/react";

const Chakra = () => {
  return (
    <Container bg="red">
      <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
        <i class="fa-solid fa-magnifying-glass"></i>
      </Tooltip>
    </Container>
  );
};

export default Chakra;
