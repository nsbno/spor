import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { lottieFiles } from "@vygruppen/spor-loader";

/**
 * A wrapper around Lottie to make it tree-shakeable for SSR.
 */
export default function Lottie({ animationKey  }: { animationKey: keyof typeof lottieFiles }) {
  return <DotLottieReact src={lottieFiles[animationKey]} autoplay loop/>;
}
