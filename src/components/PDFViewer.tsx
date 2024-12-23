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
      <ModalContent pos="fixed" mt={3} overflow="auto" minW="50em" bg="gray.800">
        <ModalHeader borderBottom="1px solid gray.400">
          <Flex gap={3} align="center">
        <Icon as={VscFilePdf} />
          Johnmicheal's Resume
          </Flex>
          </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflow="auto" borderRadius="10px">
            <Flex borderRadius="10px" overflow="hidden" direction="column" align="center">
                <Flex>
                    <ZoomOutButton />
                    <ZoomPopover />
                    <ZoomInButton />
                </Flex>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
                    <Viewer
                    fileUrl="/01_Johnmicheal_Elijah_Resume_[2024_DEC_Update].pdf"
                    onZoom={handleZoom}
                    plugins={[zoomPluginInstance]}
                    />
                </Worker>

            </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
