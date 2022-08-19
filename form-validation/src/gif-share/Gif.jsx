import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Textarea,
  Stack,
  HStack,
  VStack,
  SimpleGrid,
  Button,
  Select,
  SelectField,
  Container,
  Center,
  Image,
} from "@chakra-ui/react";
import { FaUserFriends, FaLocationArrow } from "react-icons/fa";
import { AiOutlineFileGif, AiFillTags } from "react-icons/ai";
import { LockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {v4 as uuid} from "uuid"
const Gif = () => {
  const [posts, setPosts] = useState([
    {
      text: "Hi family",
      gif: "https://media2.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.gif?cid=f23b8b95emqezfprxqoo2mmmeea7k0onp6b08pvgeviyb3d7&rid=giphy.gif&ct=g",
    },
    {
        text: "Hi family",
        gif: "https://media2.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.gif?cid=f23b8b95emqezfprxqoo2mmmeea7k0onp6b08pvgeviyb3d7&rid=giphy.gif&ct=g",
      },
  ]);
  return (
    <>
      <Box bg="#e9eff0" w="100%" p={4} mb={10}>
        <Flex margin="5, 0" justifyContent={"space-between"} fontWeight="bold">
          <Button padding={2} bg={"#f1f3f3"} cursor="pointer">
            compose Post
          </Button>
          <Button padding={2} bg={"#f1f3f3"} cursor="pointer">
            Photo/video Album
          </Button>
          <Button padding={2} bg={"#f1f3f3"} cursor="pointer">
            Live Video
          </Button>
        </Flex>
        <Flex margin={5} alignItems={"center"}>
          <Avatar src="https://bit.ly/broken-link" marginEnd={2} />
          <Textarea bg={"white"}></Textarea>
        </Flex>
        <HStack spacing="10px">
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="pink.100"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="pink.100"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="pink.100"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="pink.100"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="pink.100"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="pink.100"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="pink.100"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="yellow.200"></Box>
          <Box borderRadius={5} w="30px" h="30px" bg="tomato"></Box>
        </HStack>
        <SimpleGrid columns={2} spacing={5} marginTop="3">
          <Box borderRadius={5} bg="#f4f8fa" cursor={"pointer"} padding={3}>
            <Flex alignItems={"center"}>
              <FaUserFriends />
              Tag Friends
            </Flex>
          </Box>
          <Box borderRadius={5} bg="#f4f8fa" cursor={"pointer"} padding={3}>
            <Flex alignItems={"center"}>
              <FaLocationArrow />
              Check in
            </Flex>
          </Box>
          <Box borderRadius={5} bg="#f4f8fa" cursor={"pointer"} padding={3}>
            <Flex alignItems={"center"}>
              <AiOutlineFileGif />
              GIF
            </Flex>
          </Box>
          <Box borderRadius={5} bg="#f4f8fa" cursor={"pointer"} padding={3}>
            <Flex alignItems={"center"}>
              <AiFillTags />
              Tag Event
            </Flex>
          </Box>
        </SimpleGrid>
        <Flex justifyContent={"flex-end"} marginTop={3}>
          <Stack spacing={3} marginEnd={3}>
            <Select>
              <option value="option1">Only me</option>
              <option value="option2">Public</option>
            </Select>
          </Stack>
          <Button colorScheme="blue">Post</Button>
        </Flex>
      </Box>
      {posts.map(post=>
        
      <Post key={uuid()} {...post}/>
        )}
    </>
  );
};

const Post = (props) => {
  return (
    <Container bg={"#e3e7e7"} p={4} mb={5}>
      <Flex justifyContent={"space-between"} marginBottom={2}>
        <Flex>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            marginEnd={2}
          />
          <Flex flexDir={"column"}>
            <Center fontWeight={"bold"}>Jack White</Center>
            <Center fontSize={12}>8 July at 21:30</Center>
          </Flex>
        </Flex>
        <Box>...</Box>
      </Flex>
      <Box>{props.text}</Box>
      <Box maxH={"300px"}>
        {props.gif && <Image src={props.gif} alt="Dan Abramov" />}
      </Box>
    </Container>
  );
};

export default Gif;
