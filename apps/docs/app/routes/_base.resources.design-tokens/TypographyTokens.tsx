import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Code,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import { Fragment } from "react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { useTokenFormatter } from "~/routes/_base.resources.design-tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

type TypographyToken = {
  name: string;
  key: "xs" | "sm" | "md" | "lg" | "xl-display" | "xl-sans" | "xxl";
  fontWeight: "normal" | "bold";
};
const typographyTokens: TypographyToken[] = [
  {
    name: "XS Regular",
    key: "xs",
    fontWeight: "normal",
  },
  {
    name: "XS Bold",
    key: "xs",
    fontWeight: "bold",
  },
  {
    name: "Sm Regular",
    key: "sm",
    fontWeight: "normal",
  },
  {
    name: "Sm Bold",
    key: "sm",
    fontWeight: "bold",
  },
  {
    name: "Md Regular",
    key: "md",
    fontWeight: "normal",
  },
  {
    name: "Md Bold",
    key: "md",
    fontWeight: "bold",
  },
  {
    name: "Lg Regular",
    key: "lg",
    fontWeight: "normal",
  },
  {
    name: "Lg Bold",
    key: "lg",
    fontWeight: "bold",
  },
  {
    name: "XL Sans Regular",
    key: "xl-sans",
    fontWeight: "normal",
  },
  {
    name: "XL Sans Bold",
    key: "xl-sans",
    fontWeight: "bold",
  },
  {
    name: "XL Display",
    key: "xl-display",
    fontWeight: "normal",
  },
  {
    name: "2XL Display",
    key: "xxl",
    fontWeight: "normal",
  },
];

export function TypographyTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Typography"
      description={
        <Stack spacing={6}>
          <Text>
            We have two "sets" of text styles; one for mobile and one for
            desktop. The text styles for Mobile should be used in the Vy app,
            and on the web on mobile, while horizontal tablet, desktop, and
            widescreen should use the text styles for Desktop. The breakpoint is
            at screen widths greater than or equal to &gt;=756 pixels wide. Line
            height should always be 1.333 times the font size, rounded to the
            nearest pixel.
          </Text>
          <Text>
            The font Vy Display is less readable in small sizes, and should
            therefore preferably only be used for headings in content, while in
            Elm and React applications, Vy Sans is preferred.
          </Text>
        </Stack>
      }
    >
      <Stack spacing={9}>
        <TypographyTokenTable viewportSize="mobile" title="Mobile" />
        <TypographyTokenTable viewportSize="desktop" title="Desktop" />
      </Stack>
    </SharedTokenLayout>
  );
}

type TypographyTokenTableProps = BoxProps & {
  viewportSize: "mobile" | "desktop";
  title: string;
};
const TypographyTokenTable = ({
  viewportSize,
  title,
  ...props
}: TypographyTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  return (
    <Box {...props}>
      <LinkableHeading as="h2" variant="sm" fontWeight="bold" marginBottom={2}>
        {title}
      </LinkableHeading>
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Example</Th>
            <Th>Value</Th>
            <Th>Code</Th>
          </Tr>
        </Thead>
        <Tbody>
          {typographyTokens.map((token) => (
            <Fragment key={token.name}>
              <Tr>
                <Td>
                  <Text
                    fontSize={
                      tokens.font.style[token.key]["font-size"][viewportSize]
                    }
                    fontFamily={tokens.font.style[token.key]["font-family"]}
                    lineHeight={tokens.font.style[token.key]["line-height"]}
                    fontWeight={token.fontWeight}
                  >
                    {token.name}
                  </Text>
                </Td>
                <Td>
                  {tokens.font.style[token.key]["font-size"][viewportSize]} /{" "}
                  {tokens.font.style[token.key]["line-height"]}
                </Td>
                <Td>
                  <Stack spacing={1}>
                    <Box>
                      <Code>
                        {tokenFormatter(
                          `font.style.${token.key}.font-size.${viewportSize}`
                        )}
                      </Code>
                    </Box>
                    <Box>
                      <Code>
                        {tokenFormatter(`font.style.${token.key}.line-height`)}
                      </Code>
                    </Box>
                    <Box>
                      <Code>
                        {tokenFormatter(`font.style.${token.key}.font-family`)}
                      </Code>
                    </Box>
                  </Stack>
                </Td>
              </Tr>
            </Fragment>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
