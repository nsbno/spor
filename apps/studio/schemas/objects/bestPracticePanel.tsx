/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Card, Flex, Grid, Heading, Text } from "@sanity/ui";
import { MdCheck, MdNotInterested } from "react-icons/md";
import { defineField, defineType } from "sanity";

import { portableTextToText } from "../../utils/portableTextToText";

export const bestPracticePanel = defineType({
  name: "bestPracticePanel",
  title: "Best practice examples panel",
  type: "object",
  description: "Shows a panel with what to do (and what not to do)",
  icon: MdCheck,
  components: {
    preview: (props: any) => {
      if (!props.examples?.length) {
        return props.renderDefault(props);
      }
      return (
        <Grid columns={[1, 1, 2]} gap={2}>
          {props.examples.map((example: any) => (
            <Card
              key={example._key}
              tone={(() => {
                if (example.weight === "positive") return "positive";
                if (example.weight === "negative") return "critical";
                return "caution";
              })()}
              padding={3}
              radius={6}
            >
              <Flex gap={3} marginTop={2}>
                {(() => {
                  if (example.weight === "positive") {
                    // eslint-disable-next-line spor/use-semantic-tokens
                    return <MdCheck color="green" />;
                  }
                  if (example.weight === "negative") {
                    // eslint-disable-next-line spor/use-semantic-tokens
                    return <MdNotInterested color="red" />;
                  }
                  return null;
                })()}{" "}
                <Box flex={1}>
                  <Heading as="h3" weight="regular" size={2}>
                    Do{example.weight === "negative" ? "n't" : null}
                  </Heading>
                  <Box marginTop={4} />
                  <Text>{portableTextToText(example.content)}</Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </Grid>
      );
    },
  },
  preview: {
    select: {
      examples: "examples",
    },
  },
  fields: [
    defineField({
      name: "examples",
      title: "Examples",
      type: "array",
      of: [
        {
          type: "object",
          name: "example",
          title: "Example",
          fields: [
            defineField({
              name: "weight",
              title:
                "Is this a positive or negative example (a do or a don't)?",
              type: "string",
              options: {
                list: [
                  { title: "Do this", value: "positive" },
                  { title: "Don't do this", value: "negative" },
                ],
                layout: "radio",
                direction: "horizontal",
              },
            }),
            defineField({
              name: "image",
              title: "Image",
              description: "Add an example image of what (not) to do",
              type: "image",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [
                { type: "block", styles: [{ title: "Text", value: "normal" }] },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              weight: "weight",
              content: "content",
              image: "image",
            },
            prepare: ({ weight, content, image }) => {
              return {
                title: (() => {
                  if (weight === "positive") return "✅ Do";
                  if (weight === "negative") return "🚫 Don't";
                  return "🤷";
                })(),
                subtitle: portableTextToText(content),
                media: image,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(2),
    }),
  ],
});
