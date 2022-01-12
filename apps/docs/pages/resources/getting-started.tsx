import { Heading } from "@chakra-ui/react";
import { DocsLayout } from "../../features/layouts/docs-layout/DocsLayout";

export default function GettingStartedPage() {
  return <Heading as="h1">Getting started</Heading>;
}
GettingStartedPage.getLayout = (page: any) => <DocsLayout>{page}</DocsLayout>;
