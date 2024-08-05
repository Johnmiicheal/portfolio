import { Flex, Box, Image, Stack } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface ImageMarqueeProps {
  images: string[];
}
export const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
  const [topRotateValues, setTopRotateValues] = useState<number[]>([]);
  const [btmRotateValues, setBtmRotateValues] = useState<number[]>([]);

  useEffect(() => {
    // Generate random rotation values between -10 and 10 degrees for each image
    const topValues = images.map(() => Math.floor(Math.random() * 90 - 40));
    const btmValues = images.map(() => Math.floor(Math.random() * 90 - 45));
    setTopRotateValues(topValues);
    setBtmRotateValues(btmValues);
  }, [images]);

  return (
    <Stack
      border="1px solid"
      borderColor={"#e2e2e2"}
      borderRadius="20px"
      w={{ lg: "full" }}
      overflow="hidden"
    >
      <Flex mt={-8} zIndex={2}>
        <Marquee speed={20}>
          <Flex minH="10em">
            {images.slice(10,19).map((p, index) => (
              <Image
                key={index}
                src={p} 
                pointerEvents={"none"}
                w="50%"
                h="100%"
                ml={-2}
                style={{ transform: `rotate(${topRotateValues[index]}deg)` }}
                boxShadow={"md"}
              />
            ))}
          </Flex>
        </Marquee>
      </Flex>
      <Flex mt={-16}>
        <Marquee direction="right" speed={20}>
          <Flex minH="10em" overflow="hidden">
            {images.slice(0,10).map((p, index) => (
              <Image
                mt={6}
                key={index}
                pointerEvents={"none"}
                src={p}
                w="50%"
                h="100%"
                ml={-2}
                style={{ transform: `rotate(${btmRotateValues[index]}deg)` }}
                boxShadow="md"
              />
            ))}
          </Flex>
        </Marquee>
      </Flex>

      <Box borderTop={"1px solid #e2e2e2"} mt={-10} h="3em" px={5} pt={2} pb={5} bg={"white"} zIndex="2"></Box>
    </Stack>
  );
};
