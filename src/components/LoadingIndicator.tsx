import { useLottie } from "lottie-react";
import bitcoin from "@/lib/bitcoin-lottie.json";

export default function LoadingIndicator() {
  const { View } = useLottie({
    animationData: bitcoin,
    loop: true,
    width: 30,
    height: 20,
  });
  return <div className="h-screen grid place-items-center">{View}</div>;
}
