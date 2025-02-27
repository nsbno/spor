import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/**
 * A wrapper around Lottie to make it tree-shakeable for SSR.
 */
export default function Lottie({ animationData }: { animationData: any }) {
  return <DotLottieReact src={animationData} loop />;
}
