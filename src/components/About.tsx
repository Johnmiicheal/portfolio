import {
  Text,
  Image,
  Flex,
  Stack,
  Link,
  Icon,
  Box,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ImageMarquee } from "./Fancy/ImageMarquee";
import {
  RiBehanceFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { useState } from "react";
import {
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { VscFilePdf } from "react-icons/vsc";

export const About = () => {
  const {
    isOpen: isFileOpen,
    onOpen: onFileOpen,
    onClose: onFileClose,
  } = useDisclosure();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.5 }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.5 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.5 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.5 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.7,
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  const images = [];
  for (let i = 1; i <= 20; i++) {
    images.push(`/images/carousel/${i}.png`);
  }
  const links = [
    {
      path: () => window.open("/assets/01_Johnmicheal_Elijah_Resume_2025_JUN_UPDATE_.pdf"),
      text: "Resume",
      icon: VscFilePdf,
    },
    {
      path: () => window.open("https://twitter.com/johnmiiiicheal"),
      text: "Twitter",
      icon: RiTwitterXFill,
    },
    {
      path: () => window.open("https://github.com/johnmiicheal"),
      text: "Github",
      icon: RiGithubFill,
    },
    {
      path: () => window.open("https://linkedin.com/in/johnmiicheal"),
      text: "Linkedin",
      icon: RiLinkedinBoxFill,
    },
    {
      path: () => window.open("https://behance.net/johnmiicheal"),
      text: "Behance",
      icon: RiBehanceFill,
    },
  ];

  const schemes = [
    {
      label: "Masters SWE @ NTU",
      icon: "/assets/svg/notts.svg",
      onClick: () => {},
      animation: "wiggle 2s ease-in-out infinite",
    },
    {
      label: "AI Engineer",
      icon: "/assets/svg/ai-man.svg",
      onClick: () => {},
      animation: "bounce 1s ease-in-out",
    },
    {
      label: "Experimental Designer",
      icon: "/assets/svg/designer.svg",
      onClick: () => {},
      animation: "wiggle 2s ease-in-out infinite",
    },
    {
      label: "Hobbyist Photographer",
      icon: "/assets/svg/photograph.svg",
      onClick: () => {},
      animation: "bounce 1s ease-in-out",
    },
  ];

  const [show, setShow] = useState(false);
  const [mine, setMine] = useState<number | null | undefined>(null);
  const bg = ["teal.500", "#00000080", "gray.500", "linkedin.500", "blue.700"];
  const powers = [
    {icon: SiNextdotjs, name: "Next.js"},
    {icon: SiReact, name: "React"},
    {icon: SiTypescript, name: "Typescript"},
    {icon: SiJavascript, name: "Javascript"},
    {icon: SiPython, name: "Python"},
    {icon: SiGraphql, name: "GraphQL"},
    {icon: SiFigma, name: "Figma"},
    {icon: SiNodedotjs, name: "Node.js"},
    {icon: SiPostgresql, name: "PostgreSQL"},
  ];

  return (
    <Stack>
      <Flex direction={"column"} gap={12} align="center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Flex direction="column" maxW={"680px"}>
            <Text fontSize={22} fontFamily={"Instrument Serif"} color={"#fff"}>
              <em>Hello,</em> I'm Johnmicheal{" "}
              <Text display={"inline"} color="#acacac">
                /ˈdʒɒn ˈmaɪkəl/
              </Text>
            </Text>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <Flex 
              gap={{ base: 2, md: 3 }} 
              mb={5} 
              align="center" 
              justify="start" 
              w="full"
              wrap="wrap"
            >
              {schemes.map((scheme) => (
                <motion.div
                  key={scheme.label}
                  variants={staggerItem}
                >
                  <Flex
                    align="center"
                    cursor="pointer"
                    transition="all 0.3s"
                    role="group"
                  >
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="semibold"
                  color="#aaa"
                  zIndex={2}
                >
                  {scheme.label}
                </Text>
                <Image
                  src={scheme.icon}
                  alt={scheme.label}
                  width={{ base: 5, md: 6 }}
                  height={{ base: 5, md: 6 }}
                  draggable={false}
                  ml={-2}
                  // zIndex={-2}
                  transition="all 0.3s"
                  _groupHover={{
                    ml: 1,
                    animation: scheme.animation,
                  }}
                />
                </Flex>
              </motion.div>
            ))}
          </Flex>
          </motion.div>

         

          <Text
            mt={5}
            fontStyle={"italic"}
            fontWeight={300}
            color="#c2c2c2"
            textAlign={"justify"}
          >
            I design and engineer interfaces that don’t just look clean — they
            move fast, scale well, and solve real problems.
            <br />
            <br />
            Most developers ignore design. Most designers avoid code. I live in
            the middle, turning rough ideas into production-ready web and mobile
            apps that users actually enjoy using. Right now, I’m building
            multi-agent AI systems as a Founding Engineer at{" "}
            <Link
              href="https://www.airankia.com"
              color="purple.300"
              target="_blank"
            >
              AI Rankia
            </Link>{" "}
            , but I’m still open to freelance and contract work.
            <br />
            <br />
            When I’m not coding, I’m watching
            <Link href="https://myanimelist.net/profile/neopnk" target="_blank" color="pink.300">
              {" "}
              anime
            </Link>
            , yelling at Liverpool matches, or grinding through games with a cup
            of coffee in one hand and a Red Bull in the other.
            <br />
            <br />
            Let’s build something that actually works. still available for
            freelance & contract jobs👨‍💻
          </Text>
        </Flex>
        </motion.div>
        <Flex my={"100px"} justify="center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <Flex
              w={["200px", "250px", "300px"]}
              direction="column"
              border={"1px solid #45454570"}
              p={2}
              bg={"black"}
              transition="all 0.3s ease"
              transform="rotate(12deg)"
            >
            <Image
              className="img"
              src="/images/me.png"
              alt="image of johnmiicheal"
              h={["200px", "250px", "300px"]}
              pointerEvents={"none"}
              objectFit={"cover"}
              transition="transform 1.1s ease"
            />
            <Flex w="full" justify="space-between" px={1} mt={6}>
              <Image src="/assets/cursive-text.svg" pointerEvents={"none"} />
              <Image src="/assets/barcode.svg" pointerEvents={"none"} />
            </Flex>
          </Flex>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            style={{ marginLeft: '-60px', marginTop: '-70px' }}
          >
            <Flex
              w={["200px", "250px", "300px"]}
              direction="column"
              border={"1px solid #45454570"}
              p={2}
              bg={"black"}
              transition="all 0.3s ease"
              transform="rotate(-5deg)"
            >
            <Image
              className="img"
              src="/images/udc.png"
              alt="image of johnmiicheal"
              h={["200px", "250px", "300px"]}
              pointerEvents={"none"}
              objectFit={"cover"}
              transition="transform 1.1s ease"
            />
            <Flex w="full" justify="space-between" px={1} mt={6}>
              <Image src="/assets/udc.svg" pointerEvents={"none"} />
              <Image src="/assets/barcode.svg" pointerEvents={"none"} />
            </Flex>
          </Flex>
          </motion.div>
        </Flex>
      </Flex>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Flex direction={"column"} gap={4} align="center" w="full" mt={10}>
            <Stack w={"full"} direction={{ base: "column", md: "row" }} gap={4}>
              <Flex
                px={3}
                color="#AAA"
                py={5}
                direction="column"
                w="full"
                bgImg="/images/currXP.png"
                bgColor="#00000080"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="right"
                border={"1px solid #45454570"}
                rounded="20px"
              >
                <Text fontSize={12}>Current Role</Text>
                <Text fontSize={24} fontWeight={600}>
                  AI Engineer
                </Text>
              </Flex>
              <Flex gap={2} align="center">
                {links.map((item, index) => (
                  <IconButton
                    w="full"
                    icon={<item.icon />}
                    aria-label={item.text}
                    onClick={item.path}
                    p={5}
                    h="100px"
                    bg={"#00000080"}
                    fontSize={26}
                    _hover={{ bg: "pink.700", color: "white" }}
                    rounded="80px"
                    border={"1px solid #45454570"}
                    color="#BBB"
                    key={index}
                    transition="0.3s ease"
                  />
                ))}
              </Flex>
              <Flex
                color="#AAA"
                px={3}
                py={5}
                direction="column"
                w="full"
                bgImg="/images/currIP.png"
                bgColor="#00000080"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="right"
                border={"1px solid #45454570"}
                rounded="20px"
              >
                <Text fontSize={12}>Based in</Text>
                <Text fontSize={24} fontWeight={600}>
                  Nottingham, UK
                </Text>
              </Flex>
            </Stack>
          </Flex>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <Box
          w="full"
          border={"1px solid #45454570"}
          overflow="hidden"
          rounded="20px"
        >
        <Flex
          bg="#00000080"
          p={1}
          color="#747474"
          fontSize={14}
          justify="center"
          w="full"
        >
          Languages - Frameworks - Tools
        </Flex>
        <Flex
          w="full"
          justify={{ base: "flex-start", md: "space-between" }}
          overflowX={{ base: "auto", md: "visible" }}
          gap={{ base: 4, md: 0 }}
          borderTop={"1px solid #45454570"}
          bg={"#00000080"}
          py={5}
          px={[2, 3, 14]}
          css={{
            '@media (max-width: 48em)': {
              '&::-webkit-scrollbar': {
                height: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#45454570',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#FFC4F9',
              },
            }
          }}
        >
          {powers.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Flex
                direction="column"
                align="center"
                gap={3}
                flexShrink={{ base: 0, md: 1 }}
              _hover={{
                "& .light": {
                  boxShadow: `
                    0 0 8px 2px #FFC4F9,  
                    0 0 7px 3px #FF80F2
                    `,
                  bg: "#FF80F2",
                },
                "& .iconBox": { transform: "scale(1.1)" },
                "& .icon-name": { opacity: 1 },
              }}
            >
              <Box
                className="light"
                h={2}
                w={2}
                mt={1}
                rounded="full"
                bg="#00000080"
                transition="box-shadow 0.3s ease-in-out, background 0.4s ease-in-out"
              />
              <Flex
                className="iconBox"
                cursor="pointer"
                align="center"
                justify="center"
                direction="column"
                w={"60px"}
                h={"60px"}
                bg="#00000080"
                rounded="10px"
                _hover={{ rounded: "30px" }}
                _focus={{ outline: "none" }}
                _active={{ outline: "none" }}
                transition="all 0.3s ease-in-out"
                transformOrigin="center"
                border={"1px solid #45454570"}
                css={{
                  WebkitTapHighlightColor: "transparent",
                  outline: "none",
                }}
              >
                <Icon as={item.icon} fontSize={[14, 15, 24]} color="#747474" />
              </Flex>
                <Text fontSize={12} mt={-1} color="#747474" opacity={0} transition="all 0.3s ease" className="icon-name">{item.name}</Text>
              </Flex>
            </motion.div>
          ))}
        </Flex>
      </Box>
      </motion.div>
    </Stack>
  );
};
