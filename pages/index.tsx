import React, { useEffect, useState } from "react";
import {
  Center,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Loading } from "../src/components/Loading";
import { About } from "../src/components/About";
import { Projects } from "../src/components/Projects";
import { JMItems } from "../src/components/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 6.5 }}
      >
        <Center
          bg={"#0f0f0f"}
          minH="100vh"
        >
          <Flex
            direction="column"
            w={{ base: "full", sm: "460px", md: "768px", lg: "980px" }}
            gap={5}
            mt={{ base: 0, lg: 20 }}
            px={{ base: 4, lg: 4 }}
            pt={10}
          >
            <About />
            <Projects />
            <Flex
              justify="space-between"
              align="center"
              w="full"
              mt={10}
              color="#74747480"
            >
              <Text>Copyright © 2025 Johnmicheal Elijah</Text>
              <Text>{"</"} For Humans, ♥︎ Robots{">"}</Text>
            </Flex>
            <Flex justify="center" align="start" w="full" h="300px" overflow="hidden">
              <JMItems width="1920" height="500" />
            </Flex>
          </Flex>
          
        </Center>
        
        <Flex
          bgImg="/paper-texture.png"
          mixBlendMode={"hard-light"}
          opacity={0.3}
          bgAttachment={"fixed"}
          w="full"
          h="full"
          position="absolute"
          inset={0}
          pointerEvents={"none"}
          overflow="hidden"
        ></Flex>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
