import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";

export default function BasicUsage() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text>Hello</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
