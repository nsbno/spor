import { Flex, Spacer, Wrap, WrapItem, Text } from "@chakra-ui/layout";
import { Center, Icon } from "@chakra-ui/react";
import { ColorScheme } from "../color-scheme/ColorSchemeContext";
import { VyLogo } from "@vygruppen/spor-react";
type SiteFooterProps = {
  colorScheme: ColorScheme;
};

export const SiteFooter = ({ colorScheme }: SiteFooterProps) => {
  return (
    <Flex flex="1" alignItems="center">
      <VyLogo colorScheme={colorScheme} width="50px" height="48px" />
      <Spacer />
      <Wrap spacing="70px">
        <WrapItem>
          <Icon
            w="5"
            h="5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12.75 7.75C12.75 8.16421 12.4142 8.5 12 8.5C11.5858 8.5 11.25 8.16421 11.25 7.75C11.25 7.33579 11.5858 7 12 7C12.4142 7 12.75 7.33579 12.75 7.75ZM12.5 10.5C12.5 10.2239 12.2761 10 12 10C11.7239 10 11.5 10.2239 11.5 10.5V16C11.5 16.2761 11.7239 16.5 12 16.5C12.2761 16.5 12.5 16.2761 12.5 16V10.5Z"
              fill="#2B2B2C"
            />
          </Icon>
          <Text display="inline-block" fontWeight="bold" whiteSpace="nowrap">
            Om Vy
          </Text>
        </WrapItem>
        <WrapItem>
          <Icon
            w="5"
            h="5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58685 3.00769C9.85879 3.05568 10.0403 3.31504 9.99235 3.58698L9.21358 8H16.1981L17.0076 3.41319C17.0556 3.14125 17.3149 2.9597 17.5869 3.00769C17.8588 3.05568 18.0403 3.31504 17.9924 3.58698L17.2136 8H20.5C20.7761 8 21 8.22386 21 8.5C21 8.77614 20.7761 9 20.5 9H17.0371L15.9783 15H19C19.2761 15 19.5 15.2239 19.5 15.5C19.5 15.7761 19.2761 16 19 16H15.8018L14.9924 20.587C14.9444 20.8589 14.685 21.0405 14.4131 20.9925C14.1411 20.9445 13.9596 20.6851 14.0076 20.4132L14.7864 16H7.80182L6.99235 20.587C6.94436 20.8589 6.68501 21.0405 6.41307 20.9925C6.14113 20.9445 5.95958 20.6851 6.00757 20.4132L6.78637 16H3.5C3.22386 16 3 15.7761 3 15.5C3 15.2239 3.22386 15 3.5 15H6.96284L8.02166 9H4.5C4.22386 9 4 8.77614 4 8.5C4 8.22386 4.22386 8 4.5 8H8.19813L9.00757 3.41319C9.05556 3.14125 9.31491 2.9597 9.58685 3.00769ZM9.03711 9L7.97829 15H14.9628L16.0217 9H9.03711Z"
              fill="#2B2B2C"
            />
          </Icon>
          <Text
            display="inline-block"
            fontWeight="bold"
            whiteSpace="nowrap"
            textAlign="right"
          >
            Ta kontakt på slack
          </Text>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};
