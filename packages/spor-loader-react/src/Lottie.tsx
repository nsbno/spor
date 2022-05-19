import LottieReact from "lottie-react";
import React from "react";

export const Lottie = ({ animationData }: { animationData: any }) => (
  <LottieReact animationData={animationData} loop />
);
