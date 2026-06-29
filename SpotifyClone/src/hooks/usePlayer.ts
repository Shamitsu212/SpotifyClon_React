import { useEffect, useRef } from "react";
import { Howl } from "howler";

export function useAudio(track: string) {
  const sound = useRef<Howl | null>(null);

  useEffect(() => {
    sound.current?.unload();

    sound.current = new Howl({
      src: [track],
      html5: true,
    });

    return () => {
      sound.current?.unload();
    };
  }, [track]);

  const play = () => sound.current?.play();
  const pause = () => sound.current?.pause();
  const stop = () => sound.current?.stop();

  return { play, pause, stop };
}