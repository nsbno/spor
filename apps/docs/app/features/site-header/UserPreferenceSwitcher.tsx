import { Box, useDisclosure } from "@chakra-ui/react";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
  TokensFormat,
  UserType,
  useUserPreferences,
} from "../user-preferences/UserPreferencesContext";

export const UserPreferenceSwitcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userPreferences } = useUserPreferences();
  return (
    <>
      <Flex as="button" onClick={onOpen} gap={2}>
        <Box whiteSpace="nowrap">
          Vis som{" "}
          <strong>
            {userPreferences.userType === "designer" ? "designer" : "utvikler"}
          </strong>
        </Box>
        <SettingsX1Fill24Icon />
      </Flex>
      <UserPreferencesModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

type UserPreferencesModalProps = { isOpen: boolean; onClose: () => void };
const UserPreferencesModal = ({
  isOpen,
  onClose,
}: UserPreferencesModalProps) => {
  const { userPreferences, setUserPreference } = useUserPreferences();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader size="sm">Visningsvalg</ModalHeader>
        <ModalBody>
          <Text
            mb={6}
            pb={3}
            borderBottom="1px solid"
            borderColor="blackAlpha.200"
          >
            Her kan du endre visningsvalgene for siden. Du kan velge om du vil
            se det som utvikler eller designer, og du kan velge hvilken kode du
            ønsker at komponentene skal ha.
          </Text>
          <Stack>
            <Select
              label="Hva slags bruker er du?"
              value={userPreferences.userType}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setUserPreference("userType", e.target.value as UserType)
              }
            >
              <option value="designer">Designer</option>
              <option value="developer">Utvikler</option>
            </Select>
            {userPreferences.userType === "developer" && (
              <>
                <Select
                  label="Hvilken teknologi bruker du mest?"
                  value={userPreferences.technology}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setUserPreference(
                      "technology",
                      e.target.value as Technology
                    )
                  }
                >
                  <option value="react">React</option>
                  <option value="react-native">React Native</option>
                  <option value="elm">Elm</option>
                </Select>
                <Select
                  label="Hva slags format vil du se tokens i?"
                  value={userPreferences.tokensFormat}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setUserPreference(
                      "tokensFormat",
                      e.target.value as TokensFormat
                    )
                  }
                >
                  <option value="javascript">JavaScript</option>
                  <option value="css">CSS</option>
                  <option value="scss">SCSS</option>
                  <option value="less">LESS</option>
                </Select>
              </>
            )}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
