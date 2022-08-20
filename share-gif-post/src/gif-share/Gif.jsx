import React from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Flex,
  Textarea,
  Stack,
  HStack,
  SimpleGrid,
  Button,
  Select,
  Container,
  Center,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaUserFriends, FaLocationArrow } from "react-icons/fa";
import { AiOutlineFileGif, AiFillTags } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
const Gif = () => {
  const [showGif, setShowGif] = useState(false);
  const [searchText, setSearchText] = useState("laugh");
  const [gif, SetGif] = useState([]);
  const [userEnteredData, setUserEnteredData] = useState({
    text: "",
    gif: "",
  });
  const [posts, setPosts] = useState([
    {
      text: "Hi family",
      gif: "https://media2.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.gif?cid=f23b8b95emqezfprxqoo2mmmeea7k0onp6b08pvgeviyb3d7&rid=giphy.gif&ct=g",
    },
 
  ]);

  const fetchGif = async () => {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=Sw5qxCIDBmVT8Jlw1zLmRrIn6ZwmAzVQ&q=${searchText}&limit=20&offset=0&rating=g&lang=en`
      );
      SetGif(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchGif()
  },[searchText])
  const handleGif = () => {
    setShowGif((pre) => !pre);
  };
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
          <Textarea
            bg={"white"}
            onChange={(e) =>
              setUserEnteredData({ ...userEnteredData, text: e.target.value })
            }
          ></Textarea>
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
            <Flex alignItems={"center"} pos={"relative"} onClick={handleGif}>
              <AiOutlineFileGif />
              GIF
            </Flex>
            {showGif && (
              <Box
                pos={"absolute"}
                zIndex="2"
                width="300px"
                height="400px"
                borderWidth="2px"
                borderColor="gray.500"
                bg="#fff"
              >
                <Input
                  
                  onChange={(e)=>setSearchText(e.target.value)}
                  placeholder="Search Your favorite GIF..."
                  s
                  ize="sm"
                />
                <Box
                  overflowY="scroll"
                  overflowX="hidden"
                  width="100%"
                  height="90%"
                >
                  {gif.map((item) => {
                    return (
                      <Image
                        onClick={() => {
                          setShowGif(false);
                          setUserEnteredData({
                            ...userEnteredData,
                            gif: item.images.original.url,
                          });
                        }}
                        margin={4}
                        src={item.images.original.url}
                        key={item.id}
                      />
                    );
                  })}
                </Box>
              </Box>
            )}
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
          <Button
            colorScheme="blue"
            onClick={() => {
              setPosts([userEnteredData, ...posts]);
            }}
          >
            Post
          </Button>
        </Flex>
      </Box>
      {posts.map((post) => (
        <Post key={uuid()} {...post} />
      ))}
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
            <Center fontSize={12}>{props.time}</Center>
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
