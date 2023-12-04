import { Box, Card, Flex, Grid, Text } from "@sanity/ui";
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
              tone={
                example.weight === "positive"
                  ? "positive"
                  : example.weight === "negative"
                  ? "critical"
                  : "caution"
              }
              padding={3}
              radius={3}
            >
              <Flex gap={3}>
                {example.weight === "positive" ? (
                  <MdCheck color="green" />
                ) : example.weight === "negative" ? (
                  <MdNotInterested color="red" />
                ) : null}{" "}
                <Box flex={1}>
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
                title:
                  weight === "positive"
                    ? "✅ Do"
                    : weight === "negative"
                    ? "🚫 Don't"
                    : "🤷",
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
