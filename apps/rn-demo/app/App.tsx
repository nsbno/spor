import {
  Heading,
  SporProvider,
  Stack,
  Text,
  Card,
  Box,
} from "@vygruppen/spor-react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  return (
    <SporProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <Stack
            backgroundColor="white"
            height="100%"
            p={2}
            justifyContent="center"
          >
            <Heading color="darkGrey" variant="2xl" textAlign="center">
              Spor Demo app
            </Heading>
            <Card
              size="sm"
              colorScheme="white"
              onPress={() => console.log("test")}
              isSelected={true}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {
                  <Text variant={"sm"} fontWeight={"bold"}>
                    ProductText
                  </Text>
                }
                <Text variant={"sm"}>1003</Text>
              </Box>
              {true && <Text variant={"sm"}>seasonTicket.infoMessage</Text>}
            </Card>
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </SporProvider>
  );
};

export default App;
