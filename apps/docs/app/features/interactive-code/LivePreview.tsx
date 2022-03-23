import { BoxProps, Center } from "@vygruppen/spor-react";
import { LivePreview as ReactLivePreview } from "react-live";

export const LivePreview = (props: BoxProps) => {
  return (
    <Center
      borderRadius="sm"
      border="sm"
      borderColor="alias.osloGrey"
      p={4}
      maxWidth="calc(100vw - var(--spor-space-4))"
      {...props}
    >
      {/** @ts-ignore Bad typing in React Live */}
      <ReactLivePreview Component={Center} width="100%" />
    </Center>
  );
};
