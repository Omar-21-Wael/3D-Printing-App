import type { LottieProps, LottieRef } from "../types";
export function lottieClick({ liked, setLiked, dotLottie }: LottieProps): void {
  if (!dotLottie) return console.log("Lottie instance is not defined");
  if (!liked) {
    dotLottie.play();
    setTimeout(() => {
      dotLottie.pause();
    }, 1000);
  } else {
    dotLottie.stop();
  }

  setLiked(!liked);
  console.log(liked);
}
export function dotLottieRefCallback({
  instance,
  setDotLottie,
}: LottieRef): void {
  setDotLottie(instance);
}
