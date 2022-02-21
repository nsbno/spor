import { Badge } from "@vygruppen/spor-react";
import {
  Heading,
  Flex,
  Image,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { Link } from "remix";

export default function Profile() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <Stack spacing={2}>
        <Heading as="h3" textStyle="md" fontWeight="bold">
          Profilen
        </Heading>
        <Text textStyle="sm">
          Vy har en tydelig og strukturert designmanual som setter retningen for
          alle oss som jobber i og med selskapets merkevare. Denne omfatter alt
          fra bildestil og typografi, til språk og farger.
        </Text>
        <Text textStyle="sm">
          Det er viktig at man setter seg inn i hvem “vi” er, hvordan Vy som
          merkevare skal fremtre, hvorfor vi gjør det vi gjør.
        </Text>
        <Text textStyle="sm">
          Se gjennom profilen. Les om merkevaren og kjernen til vy. Titt på
          bildemaneren, logo, typografi og forstå språkprofilen vår. Så har du
          kommet langt på vei i arbeidet med Vy.
        </Text>
        <ProfileLink to="/ressurser/profil">
          <HStack spacing={2}>
            return (
            <Badge size="md" variant="outline" colorScheme="white">
              <Text textStyle="xs" textColor="alias.darkGrey">
                Besøk profilen
              </Text>
            </Badge>
            );
          </HStack>
        </ProfileLink>
      </Stack>
      <Flex>
        <Image
          src="/images/component-examples/profile-example-1.png"
          alt="Profile example"
          rounded={"md"}
          objectFit="contain"
        />
      </Flex>
    </SimpleGrid>
  );
}

type ProfileLinkProps = {
  to: string;
  children: React.ReactNode;
};

function ProfileLink({ to, ...props }: ProfileLinkProps) {
  return (
    <Flex
      as={Link}
      to={to}
      alignItems="center"
      _hover={{ textDecoration: "underline" }}
      {...props}
    ></Flex>
  );
}
