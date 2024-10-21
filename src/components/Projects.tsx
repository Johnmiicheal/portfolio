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
      img: "/images/work/ojami.gif",
      title: "Ojà mi",
      caption: "Digital marketplace powered by Kora",
      path: "https://www.youtube.com/watch?v=HhOyK0ckJGU",
    },
    {
      img: "/images/work/hectrework.png",
      title: "The Hectre",
      caption: "Product designs for a property tech startup",
      path: "https://thehectre.com",
    },
    {
      img: "/images/work/udcwork.png",
      title: "Untitled Designers Conference 2024",
      caption: "Event Day Designs and AR Filters for a design conference",
      path: "https://x.com/untitledsgnrs",
    },
    {
      img: "/images/work/stugnwork.png",
      title: "Greynote Students",
      caption: "Design and Illustrations for Greynote Student Web Application",
      path: "https://greynote.app",
    },
    {
      img: "/images/work/lmwork.png",
      title: "Lecture Mate AI",
      caption: "GPT Chatbot for Exam Preparation",
      path: "https://github.com/johnmiicheal/lecturemate",
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
                border="1px solid #e2e2e2"
              />
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      <Box w="full" border="1px solid #e2e2e2" bg="white" overflow="hidden" rounded="20px">
        <Flex p={5} justify="space-between" align="center" w="full">
          <Text color="#747474">Let's build something cool, together</Text>
        <Box>
            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                w="fit-content"
                bg="#f0f0f0"
                border="1px solid #e2e2e2"
                _hover={{ bg: "#e2e2e2"}}
                fontWeight={300}
                py={5}
                rounded="20px"
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
      </Box>
      <Image src={"/assets/jm-svg.svg"} alt="johnmiicheal" opacity={0.2} className="test" sx={{ animation: 'squiggly-anim 0.34s linear infinite',}} />
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
                <defs>
                    {Array.from({ length: 5 }, (_, i) => (
                        <filter key={`squiggly-${i}`} id={`squiggly-${i}`}>
                            <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed={i} />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale={i % 2 === 0 ? 6 : 8} />
                        </filter>
                    ))}
                </defs>
            </svg>

            <style jsx>{`
                @keyframes squiggly-anim {
                    0% {
                        filter: url('#squiggly-0');
                    }
                    25% {
                        filter: url('#squiggly-1');
                    }
                    50% {
                        filter: url('#squiggly-2');
                    }
                    75% {
                        filter: url('#squiggly-3');
                    }
                    100% {
                        filter: url('#squiggly-4');
                    }
                }
            `}</style>        
    </Flex>
  );
};
