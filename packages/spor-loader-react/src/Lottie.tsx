import LottieReact from "lottie-react";
import React from "react";

export default function Lottie({ animationData }: { animationData: any }) {
  return <LottieReact animationData={animationData} loop />;
}
