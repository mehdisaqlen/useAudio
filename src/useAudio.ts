import { useState } from "react";

const useAudio = (audioUrl: string): (() => void) => {
  const [audio] = useState(new Audio(audioUrl));

  const playAudio = (): void => {
    audio.play();
  };

  return playAudio;
};

export default useAudio;
