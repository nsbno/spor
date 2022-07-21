import {
  SporProvider,
  Stack,
  Button,
  SimpleDrawer,
  DrawerFooter,
  Text,
} from "@vygruppen/spor-react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
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

          <SimpleDrawer
            isVisible={modalVisible}
            title="en skuff"
            onClose={() => setModalVisible(false)}
          >
            <Text>heiheihei</Text>
            <DrawerFooter>
              <Button variant="primary" size="sm">
                hei
              </Button>
            </DrawerFooter>
          </SimpleDrawer>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
