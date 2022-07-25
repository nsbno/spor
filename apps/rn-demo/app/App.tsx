import {
  Box,
  Button,
  Card,
  Heading,
  SporProvider,
  Stack,
  Text,
} from "@vygruppen/spor-react-native";
import {
  BusOutline24Icon,
  CloseOutline18Icon,
} from "@vygruppen/spor-icon-react-native";
import React from "react";
import { Pressable, SafeAreaView, ScrollView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

function press() {
  console.log("press");
}
function press2() {
  console.log("button");
}

const App = () => {
  return (
    <SporProvider>
      <SafeAreaView>
        <ScrollView>
          <Heading color="darkGrey" variant="2xl" textAlign="center">
            Spor Demo app
          </Heading>

          <Box
            flexDirection={"row"}
            backgroundColor="banana"
            justifyContent={"space-evenly"}
          >
            <Card
              colorScheme={"white"}
              // onClose={() => {}}
            >
              <Text>its content</Text>
            </Card>
            <Card colorScheme={"white"} onPress={press}>
              <Text>its content</Text>
            </Card>
          </Box>

          <Box marginBottom={"lg"}></Box>

          <Box marginHorizontal={"md"}>
            <Box marginBottom={"lg"}></Box>
            <Card colorScheme={"white"} onClose={() => {}}>
              <Text>its content</Text>
            </Card>
            <Box marginBottom={"lg"}></Box>
            <Card colorScheme={"white"} onPress={press} selected={true}>
              <Text>its content</Text>
            </Card>
            <Box marginBottom={"lg"}></Box>

            <Card
              colorScheme={"white"}
              onPress={press}
              selected={true}
              onClose={() => {}}
            >
              <Text>its content</Text>
            </Card>
            <Box marginBottom={"lg"}></Box>
            <Card colorScheme={"white"} onPress={press} onClose={() => {}}>
              <Text>
                its content Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Voluptates reiciendis porro minus ipsam, nulla incidunt
                delectus distinctio placeat recusandae fugiat consequuntur
                tempora dolores similique ullam eligendi ea molestiae possimus
                molestias?
              </Text>
            </Card>
            <Box marginBottom={"lg"}></Box>
            <Card colorScheme={"white"} onPress={press} onClose={() => {}}>
              {/* <Box flex={1}> */}
              <Text>its content</Text>
              <Button variant={"control"} onPress={press2}>
                click me
              </Button>
              {/* </Box> */}
            </Card>
          </Box>
        </ScrollView>

        <Box marginBottom={"3xl"}></Box>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
