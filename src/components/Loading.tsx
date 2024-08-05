import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      exit={{ opacity: 0 }}
    >
      <Center bg="#FAF4E9" h="100vh">
        <Flex direction="column">
          <Image src={"/assets/jm-svg.svg"} alt="johnmiicheal" />
          <Flex gap={-1} overflow="hidden">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <Image src={"/assets/mini-1.svg"} alt="johnmiicheal" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <Image src={"/assets/mini-2.svg"} alt="johnmiicheal" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <Image src={"/assets/mini-3.svg"} alt="johnmiicheal" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <Image src={"/assets/mini-4.svg"} alt="johnmiicheal" />
            </motion.div>
          </Flex>
        </Flex>
      </Center>
    </motion.div>
  );
};
