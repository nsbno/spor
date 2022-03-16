import {
  Box,
  BoxProps,
  Heading,
  Stack,
  Text,
  Flex,
} from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { InteractiveCode } from "~/features/interactive-code/InteractiveCode";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

type AccordionPageProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const AccordionDetails = ({ title, children }: AccordionPageProps) => (
  <Stack spacing={1} textStyle="sm">
    <LinkableHeading as="h2" textStyle="xl-display">
      {title}
    </LinkableHeading>
    {children}
  </Stack>
);

export default function AccordionsPage() {
  return (
    <ComponentDocs
      title="Accordion"
      description="Expandables er utvidbare elementer."
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    {
      name: "variant",
      values: ["list", "outline", "card"],
      defaultValue: "outline",
      type: "select",
    },
    {
      name: "size",
      values: ["sm", "md", "lg"],
      defaultValue: "md",
      type: "select",
    },
    {
      name: "title",
      defaultValue: "Jeg er ekspanderbar",
      type: "input",
    },
  ]);
  const { title, ...remainingProps } = currentProps;
  const code = `
  <Accordion
  ${toPropsString(remainingProps)}
  >  
    <Expandable allowToggle 
    title={
      <HStack>
      <PersonFill30Icon />
      <Box>${title}</Box>
      </HStack>}>
      Nå kan du teste utvidbare elementer 😎
    </Expandable>
  </Accordion>`;
  return (
    <Box {...props}>
      <ComponentPlayground
        code={code}
        propList={propList}
        currentProps={currentProps}
        onPropsChange={onPropsChange}
      />
    </Box>
  );
};

const Guidelines = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={8}>
      <Stack spacing={3}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Retningslinjer
        </LinkableHeading>
        <Text>
          Expandables eller utvidbare elementer skal brukes der det er behov for
          å skjule informasjon eller grafiske elementer, for å holde designet
          ryddig, gjøre det enklere å finne frem, sette et tydelig hierarki for
          informasjonsflyten. Dette kan være alt fra kun tekst (se F.A.Q), til
          stoppesteder i reisedetaljer eller billettinformasjon. Disse
          komponenten kan utvides om det er en behov for mer egne elementer.
          Dette skal brukes som et malverk slik at størrelser, farger, states og
          interaksjon blir overholdt.
        </Text>
        <InteractiveCode>
          {`
  <Accordion variant="card" size="md"> 
    <Stack spacing={2}>
        <ExpandableItem title="Første panel" headingLevel="h3" >
          <Text>Dette er det første panelet.</Text>
        </ExpandableItem>
        <ExpandableItem title="Andre panel" headingLevel="h3">
          <Text>Dette er det andre panelet</Text>
        </ExpandableItem>
    </Stack>
  </Accordion>
        `}
        </InteractiveCode>
      </Stack>
      <Stack spacing={2}>
        <AccordionDetails title="Design">
          <Stack>
            <Text>
              Det er 3 versjoner av expandables. De kommer i 3 forskjellige
              størrelser og i 4 ulike states, med og uten ikoner.
            </Text>
          </Stack>
          <Stack>
            <ul>
              <li>
                <Text>
                  <strong>Text</strong> - som ofte brukes til menyer, lister
                  eller solo-elementer som trenger å ekspanderes.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>Ouline</strong> - som kan brukes på mange av de samme
                  områdene som <strong>Text</strong>, men som også kan brukes
                  som en solo-knapp, eller sammen med andre grafiske elementer.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>Card</strong> - er den mest fleksible varianten (se
                  gjerne eksempler). Den kan brukes der det er behov for kort,
                  ofte er dette der man har mer informasjon eller flere grafiske
                  elementer man trenger å sette sammen.
                </Text>
              </li>
            </ul>
          </Stack>
        </AccordionDetails>
      </Stack>
    </Stack>
  );
};
