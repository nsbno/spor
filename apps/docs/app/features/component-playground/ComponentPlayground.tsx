import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  ExpandableItem,
  SimpleGrid,
  Stack,
} from "@vygruppen/spor-react";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { EditableProp } from "./EditableProp";
import { PropSpec } from "./usePlaygroundProps";

type ComponentPlaygroundProps = {
  /**
   * The code you render in the preview window
   **/
  code: string;
  /**
   * A map of components that should be in scope.
   *
   * If you want to render the Button component, for instance, you would pass in
   * `scope={{ Button }}`.
   */
  scope: Record<string, any>;
  /**
   * A list of props and how they're specified
   *
   * Each item in the list has a name, a type, a default value and an optional list of possible values.
   *
   * The type can be one of `"switch"`, `"select"` or `"input"`.
   */
  propList?: PropSpec[];
  /**
   * The current props. Should probably come from the usePlaygroundProps hook
   **/
  currentProps?: Record<string, string | boolean>;
  /**
   * A callback for when a prop changes
   */
  onPropsChange?: (key: string, value: string | boolean) => void;
};
export const ComponentPlayground = ({
  code,
  scope,
  propList = [],
  currentProps = {},
  onPropsChange = () => {},
}: ComponentPlaygroundProps) => {
  return (
    <LiveProvider code={code} scope={scope} theme={nightOwlLight}>
      <Center
        borderRadius="sm"
        border="md"
        borderColor="alias.silver"
        minHeight="240px"
        mb={2}
      >
        <LivePreview />
      </Center>
      <Accordion allowToggle variant="outline" size="lg">
        <Stack spacing={2}>
          {propList && (
            <ExpandableItem headingLevel="h3" title="Endre props">
              <SimpleGrid columns={[1, 2, 3]} gap={[2, 3]}>
                {propList.map((prop) => (
                  <EditableProp
                    key={prop.name}
                    prop={prop}
                    value={currentProps[prop.name]}
                    onChange={onPropsChange}
                  />
                ))}
              </SimpleGrid>
            </ExpandableItem>
          )}
          <AccordionItem mb={2}>
            <Box as="h3">
              <AccordionButton>
                Endre kode
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel fontFamily="monospace" fontSize="desktop.sm">
              <LiveEditor />
              <LiveError />
            </AccordionPanel>
          </AccordionItem>
        </Stack>
      </Accordion>
    </LiveProvider>
  );
};
