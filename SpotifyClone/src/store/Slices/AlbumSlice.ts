import { createSlice } from "@reduxjs/toolkit";

import type { Album } from "../../types/types";

interface AlbumState {
    albums: Album[]
}

const initialState: AlbumState = {
  albums: [
    {
      id: 1,
      artist_id: 1,
      title: "Dream Collection",
      image: "/images/albums/dream-collection.jpg",
    },
    {
      id: 2,
      artist_id: 2,
      title: "Creative Commons Classics",
      image: "/images/albums/creative-commons-classics.jpg",
    },
    {
      id: 3,
      artist_id: 3,
      title: "Acoustic Vibes",
      image: "/images/albums/acoustic-vibes.jpg",
    },
    {
      id: 4,
      artist_id: 4,
      title: "Chill Beats",
      image: "/images/albums/chill-beats.jpg",
    },
    {
      id: 5,
      artist_id: 5,
      title: "Cinematic Journey",
      image: "/images/albums/cinematic-journey.jpg",
    },
  ],
};

const AlbumSlice = createSlice({
    name: "album",

    initialState,

    reducers: {
        
    }
})

export default AlbumSlice.reducer