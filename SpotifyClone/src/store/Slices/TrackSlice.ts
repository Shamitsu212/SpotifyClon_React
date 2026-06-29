import { createSlice } from "@reduxjs/toolkit";


interface Track {
    id: number,
    artist_id: number,
    album_id: number,

    title: string, 

    audio: string,
    image: string
}

interface TrackState {
    tracks: Track[]
}

const initialState: TrackState = {
  tracks: [
    {
      id: 1,
      artist_id: 1,
      album_id: 1,
      title: "Dreams",
      audio: "/audio/dreams.mp3",
      image: "/images/joakim-karud.jpg",
    },
    {
      id: 2,
      artist_id: 1,
      album_id: 1,
      title: "Canals",
      audio: "/audio/canals.mp3",
      image: "/images/joakim-karud.jpg",
    },
    {
      id: 3,
      artist_id: 2,
      album_id: 2,
      title: "Carefree",
      audio: "/audio/carefree.mp3",
      image: "/images/kevin-macleod.jpg",
    },
    {
      id: 4,
      artist_id: 2,
      album_id: 2,
      title: "Cipher",
      audio: "/audio/cipher.mp3",
      image: "/images/kevin-macleod.jpg",
    },
    {
      id: 5,
      artist_id: 3,
      album_id: 3,
      title: "Buddy",
      audio: "/audio/buddy.mp3",
      image: "/images/bensound.jpg",
    },
    {
      id: 6,
      artist_id: 3,
      album_id: 3,
      title: "Sunny",
      audio: "/audio/sunny.mp3",
      image: "/images/bensound.jpg",
    },
    {
      id: 7,
      artist_id: 4,
      album_id: 4,
      title: "Ukulele",
      audio: "/audio/ukulele.mp3",
      image: "/images/bensound.jpg",
    },
    {
      id: 8,
      artist_id: 5,
      album_id: 5,
      title: "Better Days",
      audio: "/audio/better-days.mp3",
      image: "/images/lakey-inspired.jpg",
    }
  ]
};

const TrackSlice = createSlice({
    name: "tracks",

    initialState,

    reducers: {

    }
})

export default TrackSlice.reducer