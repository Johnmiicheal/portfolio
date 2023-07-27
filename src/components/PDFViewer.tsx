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
} from "@chakra-ui/react";
import { Worker, Viewer, ZoomEvent } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";

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
        <ModalHeader bg="blue.600" color="white">Johnmicheal's Resume</ModalHeader>
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
                    fileUrl="/01_Johnmicheal_Elijah_2023[Main].pdf"
                    onZoom={handleZoom}
                    plugins={[zoomPluginInstance]}
                    />
                </Worker>

            </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
