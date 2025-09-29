import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      exit={{ opacity: 0 }}
      style={{ height: "100vh" }}
    >
      <Center bg="#FAF4E9" h="100vh" overflow="hidden">
        <Flex direction="column" w="full" align="center" justify="start">
          <Image
            src={"/assets/jm-header.svg"}
            alt="johnmiicheal"
            w="full"
            className="test"
            sx={{ animation: "squiggly-anim 0.34s linear infinite" }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{ display: "none" }}
          >
            <defs>
              {Array.from({ length: 5 }, (_, i) => (
                <filter key={`squiggly-${i}`} id={`squiggly-${i}`}>
                  <feTurbulence
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                    seed={i}
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale={i % 2 === 0 ? 6 : 8}
                  />
                </filter>
              ))}
            </defs>
          </svg>

          <style jsx>{`
            @keyframes squiggly-anim {
              0% {
                filter: url("#squiggly-0");
              }
              25% {
                filter: url("#squiggly-1");
              }
              50% {
                filter: url("#squiggly-2");
              }
              75% {
                filter: url("#squiggly-3");
              }
              100% {
                filter: url("#squiggly-4");
              }
            }
          `}</style>
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
      <Flex
        bgImg="/paper-texture.png"
        mixBlendMode={"hard-light"}
        opacity={0.6}
        bgRepeat={"repeat"}
        w="full"
        h="full"
        position="absolute"
        inset={0}
        pointerEvents={"none"}
      ></Flex>
    </motion.div>
  );
};
