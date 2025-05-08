import { Box, BoxProps, Center, VisuallyHidden } from "@chakra-ui/react";
import { inlineLoaderColorData } from "@vygruppen/spor-loader";

import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type ColorInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 *
 * This component should only be used on light backgrounds with low saturation (e.g. white, light grey etc.). For colored backgrounds, please use the LightInlineLoader component.
 */
export const ColorInlineLoader = ({
  width,
  maxWidth,
  ...props
}: ColorInlineLoaderProps) => {
  return (
    <Center role="status" aria-live="polite" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          <Lottie animationData={inlineLoaderColorData} />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Center>
  );
};
