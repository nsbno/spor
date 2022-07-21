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
        {/* <Box marginHorizontal={"lg"}> */}
        <TooltipSmall arrowPosition="bottom">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga maiores
          debitis ipsa? Veritatis, illum eaque? Necessitatibus, earum quae!
          Blanditiis quibusdam ab facilis sint quo quidem aliquid omnis iure
          deserunt suscipit?
        </TooltipSmall>
        <Box marginTop={"3xl"}></Box>
        <TooltipSmall arrowPosition="bottom">Lor</TooltipSmall>
        <Box marginTop={"3xl"}></Box>
        {/* 
          <TooltipSmall arrowPosition="top">He</TooltipSmall>
          <Box marginTop={"3xl"}></Box>

          <TooltipSmall arrowPosition="left" closeable={false}>
            h
          </TooltipSmall>
          <Box marginTop={"3xl"}></Box>

          <TooltipSmall arrowPosition="right">
            Hey lorem asd asd asd asas as s asklwelw lw lewkw j asdf asdfasd asf
            asdf sadf asdf sdaf sda
          </TooltipSmall> */}
        {/* </Box> */}
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
