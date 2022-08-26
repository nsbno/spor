import { useLottie } from "lottie-react";
import React from "react";

/**
 * A wrapper around Lottie to make it tree-shakeable for SSR.
 */
export default function Lottie({ animationData }: { animationData: any }) {
  const { View } = useLottie({ animationData, loop: true });
  return <>{View}</>;
}
