import React from "react";
import Lottie from "react-lottie-player";

import frontEnd from "public/frontEnd.json";

export default function Animation() {
  return <Lottie loop animationData={frontEnd} play />;
}
