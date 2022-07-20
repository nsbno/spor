import {
  Heading,
  SporProvider,
  Stack,
  Text,
  BottomDrawer,
  Button,
  Box,
  SimpleDrawer,
  DrawerHeader,
  DrawerFooter,
} from "@vygruppen/spor-react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
          <Button variant="primary" onPress={() => setModalVisible(true)}>
            åpne meg
          </Button>

          {/* <SimpleDrawer
            isVisible={modalVisible}
            title="en skuff"
            onClose={() => setModalVisible(false)}
          >
            <Text>heihei</Text>
          </SimpleDrawer>
 */}
          <BottomDrawer
            isVisible={modalVisible}
            onClose={() => setModalVisible(false)}
          >
            <DrawerHeader size="small">Liten tittel</DrawerHeader>
            <Box>
              <Text>
                Dette er et eksempel på en kort midtstilt melding i en skuff.
                Størrelsen på skuffen skal følge tekstmengden.
              </Text>
            </Box>
            <DrawerFooter>
              <Button variant="primary">Primærknapp</Button>
              <Button variant="primary">Primærknapp</Button>
            </DrawerFooter>
          </BottomDrawer>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
