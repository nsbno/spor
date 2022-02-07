import { Text } from "@vygruppen/spor-react";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function AnimationTokens() {
  return (
    <SharedTokenLayout
      title="Animasjon"
      description={
        <Text>
          Det er viktig at lengden på animasjonen og hvilke attributter som
          animeres ikke virker forstyrrende eller gjør det vanskeligere å
          navigere for brukeren. Vi har satt opp tre grunn-animasjoner man kan
          bruke når man setter opp overganger mellom states. Disse definerer tre
          ulike timinger og hvordan kurven på animasjonen skal utføres: Slow,
          Medium, Fast.
        </Text>
      }
    ></SharedTokenLayout>
  );
}
