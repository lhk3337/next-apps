import React from "react";
import Lottie from "react-lottie-player";

import desk from "public/desktop_dev.json";

export default function Animation() {
  return <Lottie loop animationData={desk} play />;
}
