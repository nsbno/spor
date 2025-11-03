import {
  Box,
  Button,
  ClientOnly,
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  Stack,
} from "@vygruppen/spor-react";

export const WarningModalNewSporDocs = () => {
  return (
    <ClientOnly>
      <DialogRoot size="xl" defaultOpen>
        <DialogContent>
          <DialogHeader>
            <DialogTitle fontSize="2xl" fontWeight="bold" color="text">
              📍 Spor Documentation Has Moved
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
                <Button variant="tertiary">Continue to old spor docs</Button>
              </DialogActionTrigger>
              <Button asChild>
                <a href="https://design.vy.no/spor">
                  Visit the New Documentation →
                </a>
              </Button>
            </DialogFooter>
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </ClientOnly>
  );
};
