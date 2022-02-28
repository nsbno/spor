import { PortableText } from "@portabletext/react";
import {
  Box,
  BoxProps,
  Card,
  Center,
  Heading,
  SimpleGrid,
  SmileOutline30Icon,
  Stack,
  Text,
  TimeOutline30Icon,
  TrainOutline30Icon,
} from "@vygruppen/spor-react";
import { LoaderFunction, useLoaderData } from "remix";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";
import { getClient } from "~/utils/sanity/client.server";

export const loader: LoaderFunction = async () => {
  const initialData = await getClient().fetch(
    `*[_type == "article" && slug.current == "kom-i-gang"]`
  );
  return { initialData };
};

export default function GettingStartedPage() {
  const { initialData } = useLoaderData();
  console.log(initialData);
  return (
    <Box>
      <Heading as="h1" textStyle="xl-display" mb={2}>
        {initialData[0].title}
      </Heading>
      <PortableText value={initialData[0].content} />
    </Box>
  );
}

type IntroductionsProps = {
  title: string;
  icon: React.ComponentType<BoxProps>;
  children: React.ReactNode;
};

const IntroductionItem = ({
  title,
  icon: Icon,
  children,
}: IntroductionsProps) => (
  <Stack spacing={3}>
    <Heading as="h2" textStyle="sm" fontWeight="bold" textAlign="center">
      {title}
    </Heading>
    <Card variant="filled" colorScheme="green">
      <Center height="292px">
        <Icon width="130px" height="130px" color="alias.pine" />
      </Center>
    </Card>
    <Text textStyle="xs">{children}</Text>
  </Stack>
);

const Introductions = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={6}>
      <Stack>
        <LinkableHeading as="h2" textStyle="md" fontWeight="bold">
          Spor
        </LinkableHeading>
        <Text textStyle="sm">
          Spor inneholder retningslinjer for visuelt design (brand guidelines),
          ferdigstilte digitale komponenter, dokumentasjon og retningslinjer for
          bruk, i tillegg til kode (som enkelt kan benyttes av utviklere). Det
          er et behov for at alle designere og utviklere i Vy Digital skal bidra
          til designsystemet, derfor ønsker vi å tilrette legge for denne måten
          å jobbe på.
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 2, 3]} spacing={[3, 4]}>
        <IntroductionItem title="Pålitelig" icon={TimeOutline30Icon}>
          Vy skal skal være ans­varlige og pålitelige, sak­lige og presise. Vi
          skal gi deg den informasjonen du trenger, når du trenger den.
        </IntroductionItem>
        <IntroductionItem title="Bevegelig" icon={TrainOutline30Icon}>
          Beveg­else er kjer­nen i virk­somheten til Vy. Beveg­else er både
          his­to­rien og fremti­den. Vi skal være fleksible og aldri stå stille.
        </IntroductionItem>
        <IntroductionItem title="Gledelig" icon={SmileOutline30Icon}>
          Vy skal være overraskende og sjarmerende, og det vi gjør skal skape
          glede i hverdagen.
        </IntroductionItem>
      </SimpleGrid>
    </Stack>
  );
};
