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
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiMailAiLine } from "react-icons/ri";

export const Projects = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      img: "/images/work/flowwork.png",
      title: "Flowdeck",
      caption: "AI Agent for appointment based businesses",
      path: "https://github.com/johnmiicheal",
    },
    {
      img: "/images/work/airwork.png",
      title: "AI Rankia",
      caption: "AI-powered SEO tool for content creators and marketers",
      path: "https://airankia.com",
    },
    {
      img: "/images/work/greywork-sm.png",
      title: "Greynote Platform",
      caption: "Web application for K-12 academic and content management",
      path: "https://greynote.app",
    },
    {
      img: "/images/work/greysswork.png",
      title: "Greynote Studio",
      caption:
        "Comprehensive dashboard for Content Creators and Tutors on Greynote",
      path: "https://www.youtube.com/@GreynoteLimited/videos",
    },
    {
      img: "/images/work/ojami.gif",
      title: "Ojà mi",
      caption: "Digital marketplace powered by Kora Payments",
      path: "https://github.com/johnmiicheal/ojami",
    },
    {
      img: "/images/work/nestwork.png",
      title: "Nest App",
      caption: "Find roommates and apartments, create new memories",
      path: "https://github.com/johnmiicheal/nest",
    },
    {
      img: "/images/work/langwork.png",
      title: "Rive Animations",
      caption: "2D Illustration + Animations",
      path: "https://langgames.vercel.app",
    },

    {
      img: "/images/work/udcwork.png",
      title: "Untitled Designers Conference 2024",
      caption: "Event Day Graphic Designs for UDC24 conference",
      path: "https://x.com/untitledsgnrs",
    },

    {
      img: "/images/work/tabetwork.png",
      title: "Tabetai",
      caption: "AI Agent for Cooking Recipes and Food Planner",
      path: "https://trytabetai.vercel.app",
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ width: "100%" }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} w="full">
          {projects.map((item, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card
                key={index}
                rounded={"20px"}
                border={"1px solid #45454570"}
                bg={"#00000080"}
                boxShadow="none"
                cursor="pointer"
                _hover={{ "& img": { transform: "rotate(-2deg)" } }}
                onClick={() => window.open(item.path)}
              >
                <CardBody display="flex" flexDirection="column" h="full">
                  <Stack spacing="2" mb={3}>
                    <Heading size="md" color="#AAA">
                      {item.title}
                    </Heading>
                    <Text color="#747474" fontWeight={400}>
                      {item.caption}
                    </Text>
                  </Stack>
                  <Image
                    mt="auto"
                    src={item.img}
                    alt={item.title}
                    borderRadius="lg"
                    h="380px"
                    objectFit={"cover"}
                    objectPosition={"top"}
                    w="full"
                    transition="transform 0.8s ease"
                    pointerEvents={"none"}
                    border={"1px solid #45454570"}
                  />
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ width: "100%" }}
      >
        <Box
          w="full"
          border={"1px solid #45454570"}
          bg={"#00000080"}
          overflow="hidden"
          rounded="20px"
        >
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
                  bg={"#00000080"}
                  border={"1px solid #45454570"}
                  _hover={{ bg: "pink.700", color: "white" }}
                  fontWeight={300}
                  py={5}
                  rounded="20px"
                  onClick={() =>
                    window.open(
                      "mailto:michealelijah301@gmail.com?subject:Lets build something cool"
                    )
                  }
                >
                  <Icon as={RiMailAiLine} mr={2} />
                  michealelijah301@gmail.com
                </Button>
              </motion.button>
            </Box>
          </Flex>
        </Box>
      </motion.div>
    </Flex>
  );
};
