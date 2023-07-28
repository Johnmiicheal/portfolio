import React, { useEffect } from "react";
import {
  Center,
  Flex,
  Text,
  Image,
  Icon,
  Box,
  Link,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { RxArrowRight } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/router";
import { PDFViewer } from "../src/components/PDFViewer";
import { ScrollerMotion } from "scroller-motion";
import { initialBlobityOptions } from "../src/utils/blobConfig";
import useBlobity from "blobity/lib/react/useBlobity";
import { motion } from "framer-motion";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Home = () => {
  const images = [
    "/greybox.jpg",
    "/lm7.jpg",
    "/qps.jpg",
    "/swiss.jpg",
    "/zcamp.jpg",
  ];

  const links = [
    { path: "https://twitter.com/johnmiiiicheal", text: "Twitter" },
    { path: "https://linkedin.com/in/johnmiicheal", text: "Linkedin" },
    { path: "https://github.com/johnmiicheal", text: "Github" },
    { path: "https://behance.net/johnmiicheal", text: "Behance" },
  ];

  const works = [
    {
      path: "https://greynote.app",
      image: "/greymood.png",
      text: "Greynote - Client Dashboard",
    },
    {
      path: "https://github.com/QuasarPay",
      image: "/quasar.png",
      text: "Quasar Payment System",
    },
    {
      path: "https://lecturemate.vercel.app",
      image: "/lm.png",
      text: "Lecture Mate AI",
    },
    {
      path: "https://github.com/zcamp-inc",
      image: "/zcamp.png",
      text: "The ZCAMP Network",
    },
  ];

  const {
    isOpen: isFileOpen,
    onOpen: onFileOpen,
    onClose: onFileClose,
  } = useDisclosure();

  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("blackAlpha.400", "gray.500");
  const text = useColorModeValue("blackAlpha.800", "gray.300");
  const bg = useColorModeValue("white", "gray.800");
  const frame = useColorModeValue("/frame.png", "/white.png");

  const router = useRouter();
  return (
    <ScrollerMotion>
      <Center bg={bg}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Flex
            direction="column"
            w={{ base: "full", lg: "980px" }}
            justify="start"
            gap={5}
            mt={{ base: 0, lg: 20 }}
            px={{ base: 2, lg: 4 }}
            py={10}
          >
            <Text
              color={text}
              w={{ base: "full", lg: "760px" }}
              fontSize={{ base: "1.4em", lg: "1.3em" }}
            >
              <Text color="gray.400" display="inline">
                Hi, My name is Johnmicheal.👋
              </Text>{" "}
              I design and develop web and mobile applications. I convert
              concepts and ideas into high-fidelity interfaces🎨. Currently, I
              work as a
              <Text display="inline" fontWeight={500}>
                {" "}
                Senior Software Engineer at Greynote
              </Text>{" "}
              but still available for freelance & contract jobs👨‍💻
            </Text>
            {/** Intro Section */}
            <Flex
              justify="space-between"
              gap={5}
              direction={{ base: "column", lg: "row" }}
            >
              <Flex direction="column" gap={5}>
                <Box
                  w={{ lg: "30em" }}
                  h={{ base: "24em", lg: "17.9em" }}
                  bgImg="/me.png"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  bgPos={{ base: "center", lg: "center -190px" }}
                  borderRadius="15px"
                  data-blobity-tooltip="AI Model"
                  data-blobity-invert="false"
                />
                <Flex
                  w="full"
                  border="1px solid"
                  borderColor={color}
                  borderRadius="15px"
                  px={{ base: "10", lg: "5" }}
                  py={6}
                  fontSize={16}
                  align="center"
                  justify="space-between"
                >
                  {links.map((link) => (
                    <Link
                      href={link.path}
                      color={color}
                      _hover={{ color: color }}
                      target="_blank"
                    >
                      {link.text}
                    </Link>
                  ))}
                </Flex>
              </Flex>
              <Flex direction="column" w={{ lg: "30em" }} gap={5}>
                <Flex
                  border="1px solid"
                  borderRadius="15px"
                  borderColor={color}
                  w="full"
                  px="5"
                  py={6}
                  fontSize={20}
                  fontWeight={500}
                  align="center"
                  justify="space-between"
                  cursor="pointer"
                  bgImg={frame}
                  onClick={onFileOpen}
                  data-blobity
                >
                  Check out my Resume
                  <Icon as={RxArrowRight} />
                </Flex>
                <Flex
                  border="1px solid"
                  borderColor={color}
                  borderRadius="15px"
                  w={{ lg: "full" }}
                  gap={2}
                  overflow="hidden"
                  direction="column"
                >
                  <Marquee speed={20}>
                    <Flex h="10em" mt={-20}>
                      {images.map((p) => (
                        <Image
                          src={p}
                          w="50%"
                          h="100%"
                          borderRadius="8px"
                          ml={2}
                        />
                      ))}
                    </Flex>
                  </Marquee>

                  <Marquee direction="right" speed={20}>
                    <Flex h="10em">
                      {images.map((p) => (
                        <Image
                          src={p}
                          w="50%"
                          h="100%"
                          borderRadius="8px"
                          ml={2}
                        />
                      ))}
                    </Flex>
                  </Marquee>

                  <Box px={5} pt={2} pb={5} bg={bg} mt={-20} zIndex="2">
                    I am a hobbyist photographer 📷 and an experimental
                    interface designer✨.
                    <br /> Tech Stack: Next.js | Typescript | GraphQL | Figma
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            {/** Works Section */}
            <Flex direction="column" w="full" gap={5}>
              {works.map((work) => (
                <Box
                  w="full"
                  h="24em"
                  px={4}
                  bgImg={work.image}
                  border="1px solid"
                  borderColor={color}
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  borderRadius="15px"
                  cursor="pointer"
                  onClick={() => router.push(work.path)}
                  role="group"
                >
                  <Box
                    border="1px solid"
                    transition="1s ease"
                    _groupHover={{ bg: "#202020", color: "white" }}
                    borderColor="blackAlpha.500"
                    bg="white"
                    color="black"
                    borderRadius="7px"
                    p={3}
                    w="14.6em"
                    mt="20em"
                    data-blobity
                  >
                    {work.text}
                  </Box>
                </Box>
              ))}
            </Flex>

            {/** Pseudo Footer Section */}
            <Flex align="center" justify="space-between">
              <Text>Built with ❤ by Johnmiicheal</Text>
              <Flex gap={3} align="center">
                <IconButton
                  aria-label="toggle dark"
                  border="1px solid"
                  transition="1s ease"
                  borderColor="blackAlpha.500"
                  bg="white"
                  color="black"
                  p={3}
                  _hover={{ bg: "#202020", color: "white" }}
                  icon={
                    colorMode === "light" ? (
                      <IoMoonOutline />
                    ) : (
                      <IoSunnyOutline />
                    )
                  }
                  size="lg"
                  onClick={toggleColorMode}
                />
                <Box
                  border="1px solid"
                  transition="1s ease"
                  _hover={{ bg: "#202020", color: "white" }}
                  borderColor="blackAlpha.500"
                  bg="white"
                  color="black"
                  borderRadius="7px"
                  p={3}
                  w="16.4em"
                  data-blobity
                  onClick={() =>
                    router.push("mailto:michealelijah301@gmail.com")
                  }
                >
                  💌 michealelijah301@gmail.com
                </Box>
              </Flex>
            </Flex>
          </Flex>

          <PDFViewer isOpen={isFileOpen} onClose={onFileClose} />
        </motion.div>
      </Center>
    </ScrollerMotion>
  );
};

export default Home;
