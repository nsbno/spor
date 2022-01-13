import { Center, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@vygruppen/spor-react";

export default function TestPage() {
  return (
    <Center height="calc(100vh - 120px)">
      <Stack textAlign="center">
        <ButtonGroup variant="control">
          <Button size="lg">Control</Button>
          <Button size="md">Control</Button>
          <Button size="sm">Control</Button>
          <Button size="xs">Control</Button>
        </ButtonGroup>
        <ButtonGroup variant="primary">
          <Button size="lg">Primary</Button>
          <Button size="md">Primary</Button>
          <Button size="sm">Primary</Button>
          <Button size="xs">Primary</Button>
        </ButtonGroup>
        <ButtonGroup variant="secondary">
          <Button size="lg">Secondary</Button>
          <Button size="md">Secondary</Button>
          <Button size="sm">Secondary</Button>
          <Button size="xs">Secondary</Button>
        </ButtonGroup>
        <ButtonGroup variant="tertiary">
          <Button size="lg">Tertiary</Button>
          <Button size="md">Tertiary</Button>
          <Button size="sm">Tertiary</Button>
          <Button size="xs">Tertiary</Button>
        </ButtonGroup>
        <ButtonGroup variant="additional">
          <Button size="lg">Additional</Button>
          <Button size="md">Additional</Button>
          <Button size="sm">Additional</Button>
          <Button size="xs">Additional</Button>
        </ButtonGroup>
        <ButtonGroup variant="ghost">
          <Button size="lg">Ghost</Button>
          <Button size="md">Ghost</Button>
          <Button size="sm">Ghost</Button>
          <Button size="xs">Ghost</Button>
        </ButtonGroup>
      </Stack>
    </Center>
  );
}
