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
import Snowfall from "react-snowfall";

const Home = () => {

  const color = useColorModeValue("blackAlpha.400", "gray.500");
  const bgColor = useColorModeValue("#f2f2f2", "gray.900");
  const border = useColorModeValue("1px solid #e2e2e2", "1px solid #333");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const router = useRouter();
  return (
    <AnimatePresence>
      <Snowfall />
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 6.5 }}
      >
        <Center
          bg={'#f2f2f2'}
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
            <About bgColor={bgColor} color={color} border={border} />
            <Projects bgColor={bgColor} color={color} border={border} />
          </Flex>
        </Center>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
