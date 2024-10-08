import React, { useEffect, useState } from "react";
import {
  Center,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { initialBlobityOptions } from "../src/utils/blobConfig";
import useBlobity from "blobity/lib/react/useBlobity";
import { AnimatePresence, motion } from "framer-motion";
import { Loading } from "../src/components/Loading";
import { About } from "../src/components/About";
import { Projects } from "../src/components/Projects";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("blackAlpha.400", "gray.500");
  const text = useColorModeValue("blackAlpha.800", "gray.300");
  const bg = useColorModeValue("#f9f9f9", "gray.800");
  const frame = useColorModeValue("/frame.png", "/white.png");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const router = useRouter();
  return (
    <AnimatePresence>
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 6.5 }}
      >
        <Center
          bg={bg}
          bgSize="cover"
          bgPos="center"
          bgImg="/bg.png"
          minH="100vh"
        >
          <Flex
            direction="column"
            w={{ base: "full", sm: "460px", md: "768px", lg: "980px" }}
            gap={5}
            mt={{ base: 0, lg: 20 }}
            px={{ base: 2, lg: 4 }}
            py={10}
          >
            <About />
            <Projects />
          </Flex>
        </Center>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
