import { BoxProps, Center } from "@vygruppen/spor-react";
import { LivePreview as ReactLivePreview } from "react-live";

export const LivePreview = (props: BoxProps) => {
  return (
    <Center
      borderRadius="sm"
      border="sm"
      borderColor="alias.osloGrey"
      p={4}
      {...props}
    >
      <ReactLivePreview />
    </Center>
  );
};
