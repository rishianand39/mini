import { Badge, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack  p="10px 0">
      <Link as={RouterLink} to="/">
        <Badge colorScheme="green">Home</Badge>
      </Link>
      <Link as={RouterLink} to="/modal">
        <Badge colorScheme="green">Modal</Badge>
      </Link>
      <Link as={RouterLink} to="/learnchakra">
        <Badge colorScheme="green">Learn Chakra</Badge>
      </Link>
      <Link as={RouterLink} to="/">
        <Badge colorScheme="green">Home</Badge>
      </Link>
      <Link as={RouterLink} to="/modal">
        <Badge colorScheme="green">Modal</Badge>
      </Link>
      <Link as={RouterLink} to="/learnchakra">
        <Badge colorScheme="green">Learn Chakra</Badge>
      </Link>
      
    </HStack>
  );
};

export default Navbar;
