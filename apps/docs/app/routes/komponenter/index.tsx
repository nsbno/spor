import {
  Box,
  Card,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { getClient } from "~/utils/sanity/client";

type Data = {
  _id: string;
  name: string;
  slug: string;
  content: any[];
  page?: { slug: string };
};

export const loader: LoaderFunction = async () => {
  const query = `*[_type == "component"] {
    _id,
    name,
    "slug": slug.current,
    content,
    "page": *[_type == "article" && references(^._id)] { 
      "slug": slug.current 
    }[0]
  }`;
  const components = await getClient().fetch<Data[]>(query);

  if (!components || !components.length) {
    throw new Response("Not Found", { status: 404 });
  }

  return components;
};

export default function ComponentsPage() {
  const components = useLoaderData<Data[]>();
  return (
    <Box>
      <Stack spacing={2} mb={6}>
        <Heading as="h1" textStyle="xl-display">
          Komponent&shy;oversikt
        </Heading>
        <Text>
          Komponenter er interaktive byggeklosser som gjør det enklere å skape
          fullstendige brukeropplevelser. Her kan du se en oversikt over alle
          komponentene.
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 2, 3]} gap={3}>
        {components.map((component) => (
          <Card
            key={component._id}
            as={Link}
            to={
              component.page ? `${component.page?.slug}#${component.slug}` : ""
            }
            variant="filled"
            colorScheme="green"
            p={3}
          >
            <Heading as="h2" textStyle="md" fontWeight="bold">
              &lt;{component.name} /&gt;
            </Heading>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
