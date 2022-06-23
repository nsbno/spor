import { Box, Flex } from "@chakra-ui/react";
import { FavouriteOutline30Icon, Heading } from "@vygruppen/spor-react";
import React from "react";
import { MdStar } from "react-icons/md";
import { BlockField, ObjectField, StringField } from "../schemaTypes";

type TipsPanel = {
  title: StringField;
  content: BlockField;
};
export const tipsPanel: ObjectField<TipsPanel> = {
  name: "tipsPanel",
  title: "Tips panel",
  type: "object",
  icon: MdStar,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Tips og Triks",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      description: "Keep your tips short and to the point",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: (data) => ({ title: data.title }),
    component: (props: { value: { title: string } }) => {
      return (
        <Box backgroundColor="alias.mint" p={4} borderRadius="md">
          <Flex gap={1} alignItems="end">
            <FavouriteOutline30Icon />
            <Heading textStyle="sm" fontWeight="bold" mt={0.5}>
              {props.value.title}
            </Heading>
          </Flex>
        </Box>
      );
    },
  },
};
