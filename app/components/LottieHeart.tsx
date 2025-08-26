"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

import { JSX, useState } from "react";
import { lottieClick, dotLottieRefCallback } from "../lib/dotlottie";

export default function LikeButton(): JSX.Element {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <button
      onClick={() => {
        lottieClick({ liked, setLiked, dotLottie });
      }}
      className=" w-19 h-19 m-[-20px] md:w-17 md:h-17 md:m-[-10px]  cursor-pointer"
    >
      <DotLottieReact
        src="/animation/Like.lottie"
        autoplay={false}
        loop={false}
        dotLottieRefCallback={(instance) =>
          dotLottieRefCallback({ instance, setDotLottie })
        }
        style={{ width: "100%", height: "100%" }}
      />
    </button>
  );
}
