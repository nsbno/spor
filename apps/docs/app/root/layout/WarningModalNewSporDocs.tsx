import {
  Box,
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  Stack,
  TextLink,
} from "@vygruppen/spor-react";

export const WarningModalNewSporDocs = () => {
  return (
    <DialogRoot size="xl" defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle fontSize="2xl" fontWeight="bold" color="text">
            📍 Documentation Has Moved
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack gap={4}>
            <Box fontSize="md" color="text.secondary">
              We&apos;ve moved our documentation to a new home to provide you
              with a better experience.
            </Box>
          </Stack>

          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="tertiary">No, continue to old spor docs</Button>
            </DialogActionTrigger>
            <Button asChild>
              <TextLink
                variant="primary"
                href="https://design.vy.no/spor"
                size="lg"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline" }}
              >
                Visit the New Documentation →
              </TextLink>
            </Button>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};
