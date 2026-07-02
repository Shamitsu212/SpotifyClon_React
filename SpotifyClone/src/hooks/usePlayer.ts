import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

import { useAppSelector } from "../store/hooks";

export function usePlayer() {
  const sound = useRef<Howl | null>(null);

  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const { currentTrackId, isPlaying, volume } = useAppSelector((state) => state.player);

  const tracks = useAppSelector((state) => state.tracks.tracks);

  const currentTrack = tracks.find((track) => track.id === currentTrackId);

  
  useEffect(() => {
    if (!currentTrack) return;

    sound.current?.unload();

    const audio = new Howl({
      src: [currentTrack.audio],
      html5: true,
      volume,
      onload: () => {
        setDuration(audio.duration());
      },
    });

    sound.current = audio;
    setPosition(0);

    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.unload();
    };

  }, [currentTrack]);

  
  useEffect(() => {
    if (!sound.current) return;

    if (isPlaying) {

      if (!sound.current.playing()) {
        sound.current.play();
      }

    } 
    
    else {
      sound.current.pause();
    }

  }, [isPlaying]);

  
  useEffect(() => {
    sound.current?.volume(volume);
  }, [volume]);

 
  useEffect(() => {
    const interval = setInterval(() => {

      if (!sound.current) return;

      if (sound.current.playing()) {
        setPosition((sound.current.seek() as number) || 0);
      }

    }, 200);

    return () => clearInterval(interval);
  }, []);

  
  const seek = (time: number) => {
    sound.current?.seek(time);
    setPosition(time);
  };

  return {position, duration, seek};
}