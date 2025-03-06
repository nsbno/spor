import React from "react";

import ReactLottie from "lottie-react";

/**
 * A wrapper around Lottie to make it tree-shakeable for SSR.
 */
export default function Lottie({ animationData }: { animationData: any }) {
  return <ReactLottie animationData={animationData} loop={true} />;
}
