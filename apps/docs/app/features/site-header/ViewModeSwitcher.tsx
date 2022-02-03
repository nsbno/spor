import { Box, useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SettingsX1Fill24Icon,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { ChangeEvent } from "react";
import {
  Technology,
  useViewMode,
  ViewMode,
} from "../view-mode/ViewModeContext";

export const ViewModeSwitcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { viewMode } = useViewMode();
  return (
    <>
      <Flex as="button" onClick={onOpen} gap={2}>
        <Box>
          Vis som{" "}
          <strong>{viewMode === "designer" ? "designer" : "utvikler"}</strong>
        </Box>
        <SettingsX1Fill24Icon fontSize="24px" />
      </Flex>
      <SwitchModeModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

type SwitchModeModalProps = { isOpen: boolean; onClose: () => void };
const SwitchModeModal = ({ isOpen, onClose }: SwitchModeModalProps) => {
  const { viewMode, setViewMode, technology, setTechnology } = useViewMode();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader size="lg">Visningsvalg</ModalHeader>
        <ModalBody>
          <Text
            mb={6}
            pb={3}
            borderBottom="1px solid"
            borderColor="palette.blackAlpha.200"
          >
            Her kan du endre visningsvalgene for siden. Du kan velge om du vil
            se det som utvikler eller designer, og du kan velge hvilken kode du
            ønsker at komponentene skal ha.
          </Text>
          <Stack>
            <Select
              label="Hva slags bruker er du?"
              value={viewMode}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setViewMode(e.target.value as ViewMode)
              }
            >
              <option value="designer">Designer</option>
              <option value="developer">Utvikler</option>
            </Select>
            {viewMode === "developer" && (
              <Select
                label="Hvilken teknologi bruker du mest?"
                value={technology}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setTechnology(e.target.value as Technology)
                }
              >
                <option value="react">React</option>
                <option value="react-native">React Native</option>
                <option value="elm">Elm</option>
              </Select>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={onClose} isFullWidth>
            Ok.
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
