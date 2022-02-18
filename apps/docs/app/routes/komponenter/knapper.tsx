import {
  Box,
  BoxProps,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";

export default function ButtonsPage() {
  return (
    <ComponentDocs
      title="Knapper"
      description="Knapper er det mest grunnleggende interaksjonselementet i moderne
    utvikling. De lar deg starte en handling eller navigere rundt på
    siden."
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
      values: [
        "control",
        "primary",
        "secondary",
        "tertiary",
        "additional",
        "ghost",
      ],
      defaultValue: "primary",
      type: "select",
    },
    {
      name: "size",
      values: ["xs", "sm", "md", "lg"],
      defaultValue: "md",
      type: "select",
    },
    { name: "children", defaultValue: "Kjøp billett", type: "input" },
    { name: "isLoading", defaultValue: false, type: "choiceChip" },
    { name: "isDisabled", defaultValue: false, type: "choiceChip" },
  ]);
  const code = `
<Button 
  ${toPropsString(currentProps)}
/>`;
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
        <Heading as="h2" textStyle="xl-display">
          Retningslinjer
        </Heading>
        <Text>
          Hovedknappene for navigasjon finnes i ulike varianter for ulike
          brukstilfeller. Vi har <strong>Primærknappen</strong> som skal
          definere primære handlinger i våre digitale verktøy og tjenester.{" "}
          <strong>Sekundærknappen</strong> brukes ved sekunderhandlinger og der
          det er behov for flere valg. <strong>Tertiærknappen</strong> skal
          brukes der det er behov for mindre viktige knapper, eller der du
          trenger flere valgalternativer. <strong>Tilleggsknappen</strong>{" "}
          brukes som navnet sier til tilleggsvalg. Den brukes der det er behov
          for flere knapper samlet som skal ha lik synlighet. Til slutt har vi{" "}
          <strong>Kontrollknappen</strong> som kun skal brukes til kontroll av
          billett.
        </Text>
      </Stack>
      <Stack spacing={2}>
        <Heading as="h3" textStyle="md" fontWeight="bold">
          Design
        </Heading>
        <Text>
          Knappene kommer i fire størrelser, lg, md, sm og xs . Valg av
          størrelse skal passe flyt og andre elementer Alle størrelsene finnes i
          en dynamisk og en kompakt variant. Dynamisk skal følge skjermstørrelse
          eller størrelsen på elementet den er i, og har variabel padding på
          sidene. Kompakt skal følge lengden på innholdet i knappen, og har
          fastsatt padding på begge sider. Alle størrelsene finnes i tre ulike
          layout versjoner. En med kun tekst, en med venstrestilt ikon og en med
          høyrestilt ikon. Det eneste unntaket er Tilleggsknapp som har en
          ekstra layoutvariant med venstre og høyrestilt ikon.
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 2]} gap={[8, 4]}>
        <Stack spacing={1.5}>
          <Image
            src="/images/component-examples/buttons-example-1.png"
            alt="En tilleggsknapp brukes som et valg mellom gåing og sykling"
            borderRadius="sm"
            boxShadow="sm"
          />
          <Text textStyle="xs">Eksempel på bruk av Tilleggsknapp</Text>
        </Stack>
        <Stack spacing={1.5}>
          <Image
            src="/images/component-examples/buttons-example-2.png"
            alt={'En primærknapp brukes til "Betal" knappen i et kjøpsløp'}
            borderRadius="sm"
            boxShadow="sm"
          />
          <Text textStyle="xs">Eksempel på bruk av Primærknapp</Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};
