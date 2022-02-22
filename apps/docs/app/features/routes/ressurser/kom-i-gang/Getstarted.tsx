import {
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { ImageWithCaption } from "~/features/Images-with-caption/ImageWithCaption";

export default function GetStarted() {
  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <Heading as="h3" textStyle="md" fontWeight="bold">
          Kom i gang
        </Heading>
        <Text textStyle="sm">
          Det er mye man må sette seg inn i når man er ny i jobben, uansett om
          du er utvikler, designer eller produktutvikler. Spor skal gjøre det
          enklere for deg å få et overblikk over alt vi holder på med, samtidig
          som det skal gi deg nyttig informasjon og tips om våre prosesser og
          verktøy. Denne siden vil alltid være under utvikling for å best kunne
          reflektere våre mål og ambisjoner samtidig som holder oss oppdatert på
          ny teknologi og design.
        </Text>
        <Text textStyle="sm">
          Først ut anbefaler vi at du leser gjennom dokumentasjonen som er
          relevant for deg. Øverst til høyre (desktop) eller i hamburgermenyen
          (mobil) finner du en toggle som endrer siden ut i fra om du er
          utvikler eller designer. På denne måten kan du enklere få relevant
          informasjon ut i fra hva du jobber med.
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 2]} gap={[8, 4]}>
        <ImageWithCaption
          src="/images/component-examples/display-options-example-1.png"
          alt="Visningsvalg for utvikler"
          caption="Synliggjør de tingene du er ute etter som utvikler. dette kan være
          fokus på kode, eller tips relatert til utvikling"
        />
        <ImageWithCaption
          src="/images/component-examples/display-options-example-2.png"
          alt="Visningsvalg for design"
          caption=" Viser deg kun det som er nødvendig som designer."
        />
      </SimpleGrid>
    </Stack>
  );
}
