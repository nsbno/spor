import {
  Accordion,
  Center,
  ExpandableItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Switch,
} from "@vygruppen/spor-react";
import { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

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
    <LiveProvider code={code} scope={scope}>
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
                  <FormControl key={prop.name}>
                    {prop.type === "input" && (
                      <Input
                        label={prop.name}
                        value={currentProps[prop.name] as string}
                        onChange={(e) =>
                          onPropsChange(prop.name, e.target.value)
                        }
                      />
                    )}
                    {prop.type === "switch" && (
                      <>
                        <FormLabel fontSize="sm">{prop.name}</FormLabel>
                        <Switch
                          size="sm"
                          isChecked={currentProps[prop.name] as boolean}
                          onChange={(e) =>
                            onPropsChange(prop.name, e.target.checked)
                          }
                        />
                      </>
                    )}
                    {prop.type === "select" && (
                      <Select
                        label={prop.name}
                        value={currentProps[prop.name] as string}
                        onChange={(e) =>
                          onPropsChange(prop.name, e.target.value)
                        }
                      >
                        {prop.values.map((v) => (
                          <option key={v}>{v}</option>
                        ))}
                      </Select>
                    )}
                  </FormControl>
                ))}
              </SimpleGrid>
            </ExpandableItem>
          )}
          <ExpandableItem headingLevel="h3" title="Endre kode" mb={2}>
            <LiveEditor />
            <LiveError />
          </ExpandableItem>
        </Stack>
      </Accordion>
    </LiveProvider>
  );
};

type PropSpec = {
  /** The name of the prop */
  name: string;
} & (
  | { type: "input"; defaultValue: "string" }
  | { type: "switch"; defaultValue: boolean }
  | { type: "select"; values: string[]; defaultValue: string }
);

/**
 * Hook that provides you with what you need to use the ComponentPlayground component.
 *
 * You pass in a list of prop specifications that should be available for editing in the preview, and you get the current props and the prop list in return, as well as a way to update the props.
 *
 * Each item in the prop specification list has a name, a type, a default value and an optional list of possible values.
 */
export const usePlaygroundProps = (propList: PropSpec[]) => {
  const [currentProps, setCurrentProps] = useState(() =>
    getDefaultProps(propList)
  );
  return {
    propList,
    currentProps,
    onPropsChange: (key: string, value: string | boolean) =>
      setCurrentProps((prev) => ({ ...prev, [key]: value })),
  };
};

const getDefaultProps = (propList: PropSpec[]) => {
  return propList.reduce(
    (acc, { name, defaultValue }) => ({ ...acc, [name]: defaultValue }),
    {} as Record<string, string | boolean>
  );
};
