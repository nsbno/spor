import {
  SporProvider,
  Stack,
  Button,
  DrawerFooter,
  Text,
  BottomDrawer,
  DrawerHeader,
} from "@vygruppen/spor-react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <SporProvider>
      <SafeAreaView>
        <Stack
          backgroundColor="white"
          height="100%"
          p={2}
          justifyContent="center"
          spacint={3}
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
            textAlign="center"
            onClose={() => setDrawerVisible(false)}
          >
            <DrawerHeader size="large">tittel</DrawerHeader>
            <Text>
              Dette er et eksempel på en lang melding i en skuff. Del gjerne opp
              innholdet over flere avsnitt, for å gjøre meldingen lettere å
              lese. Dette er et eksempel på en lang melding i en skuff. Del
              gjerne opp innholdet over flere avsnitt, for å gjøre meldingen
              lettere å lese. Dette er et eksempel på en lang melding i en
              skuff. Del gjerne opp innholdet over flere avsnitt.
            </Text>
            <DrawerFooter style={{ justifyContent: "space-evenly" }}>
              <Button variant="primary" size="md">
                knapp
              </Button>
            </DrawerFooter>
          </BottomDrawer>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
