// @ts-nocheck
// @ts-ignore

import { Flex, Box, Icon, IconButton, Text } from "@chakra-ui/react"
import { color, frame } from "framer-motion"
import Link from "next/link"
import router from "next/router"
import Marquee from "react-fast-marquee"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { RxArrowRight } from "react-icons/rx"

const Deprecated = () => {
    return(
        <>
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
                  {links.map((link, index) => (
                    <Link
                    key={index}
                      href={link.path}
                      color={color}
                      _hover={{ color: text }}
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
                      {images.map((p, index) => (
                        <Image
                        key={index}
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
                          key={p}
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
                  key={work}
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
        </>
    )
}