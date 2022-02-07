import { Flex, FlexProps } from "@vygruppen/spor-react";
import { Outlet } from "remix";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";

export default function ResourcesPage() {
  console.log("ressurser-siden");
  return (
    <DocsLayout>
      <Label backgroundColor="alias.coralGreen" color="alias.darkGrey" mb={1}>
        Ressurser
      </Label>
      <Outlet />
    </DocsLayout>
  );
}

type WithRequired<T, U extends keyof T> = Omit<T, U> & Required<Pick<T, U>>;

type LabelProps = WithRequired<FlexProps, "backgroundColor" | "color">;
function Label(props: LabelProps) {
  return (
    <Flex
      display="inline-flex"
      borderRadius="sm"
      textStyles="xs"
      fontWeight="bold"
      height="24px"
      px={2}
      {...props}
    />
  );
}
