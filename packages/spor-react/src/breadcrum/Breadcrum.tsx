import { Flex, HStack, useMultiStyleConfig } from "@chakra-ui/react";
import { DropdownLeftFill24Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { BreadcrumLink } from "./BreadcrumLink";
import {
  Box,
  IconButton,
  SimplePopover,
  createTexts,
  useTranslation,
} from "..";
import { BreadcrumProvider } from "./BreadcrumContext";

type BreadcrumLinkProps = {
  onClick: (clickedLink: number) => void;
  colorScheme: "light" | "dark" | "green";
  title?: string;
  activeLink: number;
  links: string[];
};

export const Breadcrum = ({
  onClick = () => {},
  links,
  activeLink: activeLinkAsStringOrNumber,
  title,
  colorScheme,
}: BreadcrumLinkProps) => {
  const style = useMultiStyleConfig("Breadcrum", { colorScheme });
  const numberOfLink = links.length;
  const activeLink = Number(activeLinkAsStringOrNumber);
  const { t } = useTranslation();
  return (
    <Box __css={style.root}>
      <BreadcrumProvider
        onClick={onClick}
        activeLink={activeLink}
        colorScheme={colorScheme}
        numberOfLink={numberOfLink}
      >
        <Box __css={style.container}>
          <Box __css={style.innerContainer}>
            <HStack>
              {activeLink > 1 && (
                <IconButton
                  aria-label={t(texts.back)}
                  icon={<DropdownLeftFill24Icon />}
                  variant="ghost"
                  size="sm"
                  onClick={() => onClick(activeLink - 1)}
                  __css={style.backButton}
                />
              )}

              <SimplePopover
                triggerElement={
                  <Box as="button" __css={style.linkCounter}>
                    {t(texts.linksOf(activeLink, numberOfLink))}
                  </Box>
                }
                borderRadius="xs"
              >
                {links.map((links, index) => (
                  <BreadcrumLink key={index} linkNumber={index + 1}>
                    {links}
                  </BreadcrumLink>
                ))}
              </SimplePopover>
            </HStack>
            {title && (
              <Box as="h3" __css={style.title}>
                {title}
              </Box>
            )}
          </Box>
          <Flex justifyContent="center" display={["none", "flex"]}>
            {links.map((links, index) => (
              <BreadcrumLink key={index} linkNumber={index + 1}>
                {links}
              </BreadcrumLink>
            ))}
          </Flex>
        </Box>
      </BreadcrumProvider>
    </Box>
  );
};

const texts = createTexts({
  linksOf: (activeLink, numberOfLink) => ({
    nb: `Link ${activeLink} av ${numberOfLink}`,
    nn: `Link ${activeLink} av ${numberOfLink}`,
    sv: `Link ${activeLink} av ${numberOfLink}`,
    en: `Link ${activeLink} of ${numberOfLink}`,
  }),
  back: {
    nb: "Tilbake",
    nn: "Tilbake",
    sv: "Tillbaka",
    en: "Back",
  },
});
