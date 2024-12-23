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
import { PDFViewer } from "./PDFViewer";

interface AboutProps {
  bgColor: string;
  border: string;
  color: string;
}
export const About: React.FC<AboutProps> = ({ bgColor, border, color }) => {
  const bgWhite = useColorModeValue("white", "gray.800");
    const {
        isOpen: isFileOpen,
        onOpen: onFileOpen,
        onClose: onFileClose,
      } = useDisclosure();
  const images = [];
  for (let i = 1; i <= 20; i++) {
    images.push(`/images/carousel/${i}.png`);
  }
  const links = [
    {
        path: () => onFileOpen(),
        text: "Resume",
        icon: VscFilePdf,
      },
    {
      path: () => window.open("https://twitter.com/johnmiiiicheal"),
      text: "Twitter",
      icon: RiTwitterXFill,
    },
    {
        path:  () => window.open("https://github.com/johnmiicheal"),
        text: "Github",
        icon: RiGithubFill,
    },
    {
      path:  () => window.open("https://linkedin.com/in/johnmiicheal"),
      text: "Linkedin",
      icon: RiLinkedinBoxFill,
    },
    {
      path:  () => window.open("https://behance.net/johnmiicheal"),
      text: "Behance",
      icon: RiBehanceFill,
    },
  ];

  const [show, setShow] = useState(false);
  const [mine, setMine] = useState<number | null | undefined>(null);
  const bg = ["teal.500", "#000", "gray.500", "linkedin.500", "blue.700"];
  const powers = [
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiGraphql,
    SiFigma,
    SiNodedotjs,
    SiPostgresql,
  ];

  return (
    <Stack>
      <Flex direction={["column", "column", "row"]} gap={12} align="center">
        <Flex
          w="full"
          direction="column"
          border={border}
          rounded="20px"
          p={2}
          bg={bgColor}
          _hover={{ "& .img": { transform: "rotate(1deg)" } }}
        >
          <Image
            className="img"
            src="/images/jmm.png"
            alt="image of johnmiicheal"
            rounded="14px"
            h={["200px", "250px", "200px"]}
            pointerEvents={"none"}
            objectFit={"cover"}
            transition="transform 1.1s ease"
          />
          <Flex w="full" justify="space-between" px={1} mt={6}>
            <Image src="/assets/cursive-text.svg" pointerEvents={"none"} />
            <Image src="/assets/barcode.svg" pointerEvents={"none"}/>
          </Flex>
        </Flex>
        <Flex direction="column">
          <Text fontSize={22} fontWeight={"600"}>
            Johnmicheal (Ayodeji) Elijah
          </Text>
          <Text color="#acacac">/ˈdʒɒn ˈmaɪkəl/</Text>
          <Text mt={5} fontStyle={"italic"} fontWeight={300} color="#696969">
            I design and develop web and mobile applications. I convert concepts
            and ideas into high-fidelity interfaces🎨. Currently, I work as
            a Senior Software Engineer at{" "}
            <Link href="https://www.greynote.app" target="_blank">
              Greynote
            </Link>{" "}
            still available for freelance & contract jobs👨‍💻
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction={["column", "column", "row"]}
        gap={4}
        align="center"
        w="full"
      >
        <ImageMarquee images={images} bgColor={bgColor} color={color} border={border} />
        <Stack w={["full", 'full', "500px"]}>
          <Flex
            px={3}
            color="#747474"
            py={4}
            direction="column"
            w="full"
            bgImg="/images/currXP-L.png"
            bgColor={bgColor}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="right"
            border={border}
            rounded="20px"
          >
            <Text fontSize={12}>Current Role</Text>
            <Text fontSize={24} fontWeight={600}>
              Lead Software Eng.
            </Text>
          </Flex>
          <Flex gap={2} align="center" justify={"space-between"}>
            {links.map((item, index) => (
              <IconButton
                icon={<item.icon />}
                aria-label={item.text}
                onClick={item.path}
                p={5}
                h="60px"
                bg={bgWhite}
                fontSize={26}
                _hover={{ bg: bg[index], color: "white" }}
                rounded="20px"
                border={border}
                color="#BBB"
                key={index}
                transition="1.2s ease"
              />
            ))}
          </Flex>
          <Flex
            color="#747474"
            px={3}
            py={4}
            direction="column"
            w="full"
            bgImg="/images/currIP-L.png"
            bgColor={bgColor}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="right"
            border={border}
            rounded="20px"
          >
            <Text fontSize={12}>Based in</Text>
            <Text fontSize={24} fontWeight={600}>
              Lagos, NG
            </Text>
          </Flex>
        </Stack>
      </Flex>
      <Box w="full" border={border} overflow="hidden" rounded="20px">
        <Flex
          bg={bgColor}
          p={1}
          color="#747474"
          fontSize={14}
          justify="center"
          w="full"
        >
          Languages - Frameworks - Tools
        </Flex>
        <Flex w="full" justify="space-between" bg={bgWhite} py={5} px={[2, 3, 14]}>
          {powers.map((item, index) => (
            <Flex key={index} direction="column" align="center" gap={3}
            _hover={{
                "& .light": {
                    boxShadow:
                    `
                    0 0 8px 2px #FFC4F9,  
                    0 0 7px 3px #FF80F2
                    `,
                    bg: "#FF80F2"
                },
                "& .iconBox": {transform: "scale(1.2)"}
            }}
            >
                <Box
              className="light"
                h={2}
                w={2}
                mt={1}
                rounded="full"
                bg={bgColor}
                transition="box-shadow 0.3s ease-in-out, background 0.3s ease-in-out"

              />
                <Flex
                className="iconBox"
                cursor="pointer"
                align="center"
                justify="center"
                direction="column"
                w={["30px", "40px", "60px"]}
                h={["30px", "40px", "60px"]}
                bg={bgColor}
                rounded="10px"
                transition="transform 0.5s ease-in-out"
                transformOrigin="center" 
                >
                <Icon as={item} fontSize={[14,15, 24]} color="#747474"/>
                </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>
      <PDFViewer isOpen={isFileOpen} onClose={onFileClose} />
    </Stack>
  );
};
