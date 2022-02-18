import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ExpandableItem,
  SimpleGrid,
  Stack,
} from "@vygruppen/spor-react";
import React from "react";
import { LiveEditor } from "../interactive-code/LiveEditor";
import { LiveError } from "../interactive-code/LiveError";
import { LivePreview } from "../interactive-code/LivePreview";
import { LiveProvider } from "../interactive-code/LiveProvider";
import { useUserPreferences } from "../user-preferences/UserPreferencesContext";
import { EditableProp } from "./EditableProp";
import { PropSpec } from "./usePlaygroundProps";

type ComponentPlaygroundProps = {
  /**
   * The code you render in the preview window
   **/
  code: string;
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
  propList = [],
  currentProps = {},
  onPropsChange = () => {},
}: ComponentPlaygroundProps) => {
  const { userPreferences } = useUserPreferences();
  return (
    <LiveProvider code={code}>
      <LivePreview minHeight="240px" mb={2} />
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
          {userPreferences.userType === "developer" && (
            <AccordionItem mb={2}>
              <Box as="h3">
                <AccordionButton>
                  Endre kode
                  <AccordionIcon />
                </AccordionButton>
              </Box>
              <AccordionPanel backgroundColor="alias.darkGrey" p={0}>
                <LiveEditor border="0" />
                <LiveError color="alias.white" />
              </AccordionPanel>
            </AccordionItem>
          )}
        </Stack>
      </Accordion>
    </LiveProvider>
  );
};
