import {
  SporProvider,
  Stack,
  Button,
  BottomDrawer,
  DrawerHeader,
  Text,
  Box,
  DrawerFooter,
} from "@vygruppen/spor-react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(true);
  return (
    <SporProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <Stack
            backgroundColor="white"
            height="100%"
            p={2}
            justifyContent="center"
            spacing={3}
          >
            <Button
              variant="primary"
              size="md"
              onPress={() => setDrawerVisible(true)}
            >
              åpne meg
            </Button>

            <BottomDrawer
              isVisible={drawerVisible}
              onClose={() => setDrawerVisible(false)}
            >
              <DrawerHeader textAlign="left" size="lg" icon={true}>
                tittel
              </DrawerHeader>
              <Text>
                Dette er et eksempel på en lang melding i en skuff. Del gjerne
                opp innholdet over flere avsnitt, for å gjøre meldingen lettere
                å lese. Dette er et eksempel på en lang melding i en skuff. Del
                gjerne opp innholdet over flere avsnitt, for å gjøre meldingen
                lettere å lese. Dette er et eksempel på en lang melding i en
                skuff. Del gjerne opp innholdet over flere avsnitt.
              </Text>

              <DrawerFooter>
                <Box flexDirection="row" justifyContent="space-around">
                  <Button
                    variant="primary"
                    size="md"
                    onPress={() => {}}
                    marginRight={2}
                    flex={1}
                  >
                    knapp
                  </Button>
                </Box>
              </DrawerFooter>
            </BottomDrawer>
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </SporProvider>
  );
};

export default App;
