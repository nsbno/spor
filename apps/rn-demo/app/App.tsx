import {
  Box,
  Card,
  Heading,
  SporProvider,
  Stack,
  Text,
  TooltipSmall,
} from "@vygruppen/spor-react-native";
import React from "react";
import { SafeAreaView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  return (
    <SporProvider>
      <SafeAreaView>
        <Heading color="darkGrey" variant="2xl" textAlign="center">
          Spor Demo app
        </Heading>
        <Box marginHorizontal={"lg"}>
          <TooltipSmall arrowPosition="bottom">
            Hey there this sf ølasdjd føalksjd øsaf
          </TooltipSmall>
          <Box marginTop={"3xl"}></Box>

          <TooltipSmall arrowPosition="top">He</TooltipSmall>
          <Box marginTop={"3xl"}></Box>

          <TooltipSmall arrowPosition="left" closeable={false}>
            h
          </TooltipSmall>
          <Box marginTop={"3xl"}></Box>

          <TooltipSmall arrowPosition="right">Hey</TooltipSmall>
        </Box>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
