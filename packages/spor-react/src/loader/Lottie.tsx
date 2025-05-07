import ReactLottie from "lottie-react";
import React from "react";

/**
 * A wrapper around Lottie to make it tree-shakeable for SSR.
 */
export default function Lottie({ animationData }: { animationData: unknown }) {
  return <ReactLottie animationData={animationData} />;
}
