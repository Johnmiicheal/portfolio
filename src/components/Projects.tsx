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
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectPageProps {
  bgColor: string;
  border: string;
  color: string;
}

export const Projects: React.FC<ProjectPageProps> = ({ border, bgColor, color }) => {
  const bgWhite = "#fff"

  const projects = [
    {
      img: "/images/work/nestwork.png",
      title: "Nest App",
      caption: "Find roommates and apartments, create new memories",
      path: "https://github.com/johnmiicheal/nest",
    },
    {
      img: "/images/work/langwork.png",
      title: "Lang Games",
      caption: "2D Illustration + Animations",
      path: "https://langgames.vercel.app",
    },
    {
      img: "/images/work/ojami.gif",
      title: "Ojà mi",
      caption: "Digital marketplace powered by Kora Payments",
      path: "https://github.com/johnmiicheal/ojami",
    },
    {
      img: "/images/work/udcwork.png",
      title: "Untitled Designers Conference 2024",
      caption: "Event Day Designs and AR Filters for a design conference",
      path: "https://x.com/untitledsgnrs",
    },
    {
      img: "/images/work/greysswork.png",
      title: "Greynote Studio",
      caption: "Comprehensive dashboard for Content Creators and Tutors on Greynote",
      path: "https://www.youtube.com/@GreynoteLimited/videos",
    },
    {
      img: "/images/work/tabetwork.png",
      title: "Tabetai",
      caption: "AI Agent for Cooking Recipes and Food Planner",
      path: "https://trytabetai.vercel.app",
    },
    {
      img: "/images/work/chiwork.png",
      title: "Chipay by Chimoney",
      caption: "Fintech Dashboard for Chimoney",
      path: "https://chiprime.vercel.app",
    },
    {
      img: "/images/work/greywork-sm.png",
      title: "The Greynote Project",
      caption: "The simplified digital assistant for K-12 education",
      path: "https://greynote.app",
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
            border={border}
            bg={bgWhite}
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
                border={border}
              />
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      <Box w="full" border={border} bg={bgWhite} overflow="hidden" rounded="20px">
        <Flex p={5} justify="space-between" align="center" w="full">
          <Text color="#747474">Let's build something cool, together</Text>
        <Box>
            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                w="fit-content"
                color={"#747474"}
                bg={bgColor}
                border={border}
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
    </Flex>
  );
};
