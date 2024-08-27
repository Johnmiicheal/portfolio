import {
  Flex,
  Card,
  CardBody,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      img: "/images/work/udcwork.png",
      title: "Untitled Designers Conference 2024",
      caption: "Event Day Designs and AR Filters for a design conference",
      // path: "https://lecturemate.org",
    },
    {
      img: "/images/work/stugnwork.png",
      title: "Greynote Students",
      caption: "Design and Illustrations for Greynote Student Web Application",
      // path: "https://lecturemate.org",
    },
    {
      img: "/images/work/lmwork.png",
      title: "Lecture Mate AI",
      caption: "GPT Chatbot for Exam Preparation",
      path: "https://lecturemate.org",
    },
    {
      img: "/images/work/chiwork.png",
      title: "Chipay by Chimoney",
      caption: "Fintech Dashboard for Chimoney",
      path: "https://chiprime.vercel.app",
    },
    {
      img: "/images/work/gnwork.png",
      title: "The Greynote Project",
      caption: "The everything portal for K-12 education",
      path: "https://greynote.app",
    },
    {
      img: "/images/work/prjowork.png",
      title: "Project One S&R",
      caption: "Landing Page for Project One Agency",
      path: "https://projectosr.vercel.app",
    },
    {
      img: "/images/work/zcampwork.png",
      title: "ZCAMP Network",
      caption: "A Student hub with Reddit-like features",
      path: "https://github.com/zcamp-inc",
    },
    {
      img: "/images/work/qpswork.png",
      title: "Quasar Payment System",
      caption: "Implementing action models with AI for Fintech",
      path: "https://github.com/quasarpay",
    },
  ];
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      w="full"
      mt={5}
      gap={5}
    >
      <SimpleGrid columns={{ base: 1, lg: 2}} spacing={5} w="full">
        {projects.map((item, index) => (
          <Card
            key={index}
            rounded={"20px"}
            border="1px solid #e2e2e2"
            boxShadow="none"
            cursor="pointer"
            _hover={{ "& img": { transform: "rotate(-2deg)" } }}
            onClick={() => window.open(item.path)}
          >
            <CardBody>
              <Stack spacing="2">
                <Heading size="md">{item.title}</Heading>
                <Text color="#747474" fontWeight={400}>
                  {item.caption}
                </Text>
              </Stack>
              <Image
                mt={5}
                src={item.img}
                alt={item.title}
                borderRadius="lg"
                h="280px"
                objectFit={"cover"}
                objectPosition={"top"}
                w="full"
                transition="transform 0.8s ease"
                pointerEvents={"none"}
              />
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      <Box w="full" border="1px solid #e2e2e2" overflow="hidden" rounded="20px">
        <Flex
          w="full"
          justify="space-between"
          bg="white"
          py={5}
          px={[2, 3, 10]}
          direction={{ base: "column", md: "row"}}
          gap={2}
          align="center"
        >
          <Flex align="center" gap={8} w="full" direction={{ base: "column", md: "row"}}>
            <Image src="/assets/desk.svg" w="50px" pointerEvents={"none"} />
            <Text fontWeight={400} fontSize={26}>
              Wanna build cool stuff?
            </Text>
          </Flex>
          <Box>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                w="fit-content"
                bg="#f0f0f0"
                boxShadow={"5px 3px 4px #e2e2e2"}
                fontWeight={300}
                py={8}
                rounded="20px"
                data-no-blobity
                onClick={() =>
                  window.open(
                    "mailto:michealelijah301@gmail.com?subject:Lets build something cool"
                  )
                }
              >
                michealelijah301@gmail.com
              </Button>
            </motion.button>
          </Box>
        </Flex>
        <Flex
          bg="#e2e2e2"
          p={1}
          color="#747474"
          fontSize={14}
          justify="center"
          w="full"
          bgGradient="linear(to-r, #DB00D4, #FDCD52, #00FFF0)"
        ></Flex>
      </Box>
    </Flex>
  );
};
