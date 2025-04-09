import { Heading } from "@chakra-ui/react";
import { logDevReady } from "@remix-run/node";
import { Expandable, Input, Stack, Text } from "@vygruppen/spor-react";

const defaultCode = `<Stack textAlign="center">
  <Heading>Welcome to the playground</Heading>
  <Text>Here, you can test out Spor in your browser</Text>
  <Text>
    All components are exposed as global variables, 
    so you don't need to download anything.
  </Text>
</Stack>`;

export default function TestingPage() {
  return (
    <>
      <Stack textAlign="center" marginTop={"8"}>
        <Heading fontSize={"lg"}>Hello testers</Heading>
        <Text>
          Here, you can test out the components to check if there are any
          problems with CLS
        </Text>

        <Stack marginInline={"30rem"}>
          <Expandable title="Read more about the summer disruption">
            <Text>
              The summer disruption is when BaneNOR closes significant portions
              of the railway network during periods throughout the summer to
              carry out necessary improvements.
            </Text>
          </Expandable>
        </Stack>
      </Stack>
    </>
  );
}
