import React from "react";
import {
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import { Worker, Viewer, ZoomEvent } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { VscFilePdf } from "react-icons/vsc";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";

export const PDFViewer = ({ isOpen, onClose, path }: any) => {
  const handleZoom = (e: ZoomEvent) => {
    console.log(`Zoom to ${e.scale}`);
  };
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent pos="fixed" mt={3} overflow="auto" h="80vh" minW="60em">
        <ModalHeader borderBottom="1px solid #e2e2e2">
          <Flex gap={3} align="center">
        <Icon as={VscFilePdf} />
          Johnmicheal's Resume
          </Flex>
          </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflow="auto">
            <Flex direction="column" align="center">
                <Flex>
                    <ZoomOutButton />
                    <ZoomPopover />
                    <ZoomInButton />
                </Flex>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
                    <Viewer
                    fileUrl="/01_Johnmicheal_Elijah_Resume_[2024_APR_Update].pdf"
                    onZoom={handleZoom}
                    plugins={[zoomPluginInstance]}
                    />
                </Worker>

            </Flex>
        </ModalBody>

        <ModalFooter borderTop="1px solid #e2e2e2" gap={5}>
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
                py={6}
                rounded="20px"
                data-no-blobity
                onClick={() => window.open('mailto:michealelijah301@gmail.com?subject:I want to hire you')}
                leftIcon={<PiHandshake />}
              >
                Hire me
              </Button>
            </motion.button>
          </Box>
          <Box>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                w="fit-content"
                leftIcon={<IoClose />}
                bg="#f0f0f0"
                boxShadow={"5px 3px 4px #e2e2e2"}
                fontWeight={300}
                py={6}
                rounded="20px"
                data-no-blobity
                onClick={onClose}
              >
                Close Resume
              </Button>
            </motion.button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
