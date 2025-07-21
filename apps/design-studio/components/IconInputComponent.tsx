import { Autocomplete, Card, Flex, Label, Stack, Text } from "@sanity/ui";
import { useCallback } from "react";
import { StringInputProps, set, unset } from "sanity";
import { getIcon } from "./getIcon";
import { iconList } from "./icons";

export function IconInputComponent(props: StringInputProps) {
  const { onChange } = props;

  const handleChange = useCallback(
    (event: { currentTarget: { value: any } }) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange],
  );
  return (
    <Card>
      <Autocomplete
        id="iconInput"
        fontSize={5}
        openButton={{
          "aria-label": "Open menu",
        }}
        onChange={(value) => handleChange({ currentTarget: { value } })}
        options={iconList.map((icon) => ({
          title: icon.title,
          value: icon.value,
          payload: {
            icon: getIcon({ iconName: icon.value }),
            title: icon.title,
            value: icon.value,
          },
        }))}
        placeholder="Type to find icon"
        renderOption={(option) => (
          <Card as="button">
            <Stack padding={2}>
              <Flex align="center" gap={3}>
                <Text size={4} align="right">
                  {option.payload.icon}
                </Text>
                <Label>{option.title}</Label>
              </Flex>
            </Stack>
          </Card>
        )}
        renderValue={(value, option) => option?.payload.title || value}
        value={props.value}
      />
    </Card>
  );
}
