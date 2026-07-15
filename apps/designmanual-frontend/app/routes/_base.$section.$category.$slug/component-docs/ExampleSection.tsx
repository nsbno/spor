import { CheckboxGroup, Flex, Text } from "@chakra-ui/react";
import { FilterChip } from "@vygruppen/spor-react";
import { useState } from "react";

import { InteractiveCode } from "~/features/portable-text/interactive-code/InteractiveCode";

import { CodeExample } from "../route";

export const ExamplesSection = ({
  codeExamples,
}: {
  codeExamples: CodeExample[];
}) => {
  const [currentExampleTitle, setCurrentExampleTitle] = useState(
    codeExamples.length > 0 ? codeExamples[0].title : "",
  );

  const activeTitle = codeExamples.some((e) => e.title === currentExampleTitle)
    ? currentExampleTitle
    : (codeExamples[0]?.title ?? "");
  return (
    <Flex direction="column" gap={3} as="section">
      {codeExamples.length === 0 ? (
        <Text>No examples exist (yet!)</Text>
      ) : (
        <CheckboxGroup defaultValue={[activeTitle]}>
          <Flex flexWrap="wrap" gap={1}>
            {codeExamples.map((example, index) => (
              <FilterChip
                key={index + example.title}
                variant="accent"
                value={example.title}
                checked={activeTitle === example.title}
                onCheckedChange={() => {
                  setCurrentExampleTitle(example.title);
                }}
                size="xs"
              >
                {example.title}
              </FilterChip>
            ))}
          </Flex>
        </CheckboxGroup>
      )}
      <Text fontSize="sm">
        {
          codeExamples.find((example) => example.title === activeTitle)
            ?.description
        }
      </Text>

      <InteractiveCode
        layout="simple"
        maxWidth="100%"
        code={
          codeExamples.find((example) => example.title === activeTitle)
            ?.reactCode?.code ?? ""
        }
      />
    </Flex>
  );
};
