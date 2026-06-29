import { createSlice } from "@reduxjs/toolkit";


interface Artist {
    id: number,
    
    name: string,

    image: string
}

interface ArtistState {
    artists: Artist[]
}

const initialState: ArtistState = {
  artists: [
    {
      id: 1,
      name: "Joakim Karud",
      image: "/images/artists/joakim-karud.jpg",
    },
    {
      id: 2,
      name: "Kevin MacLeod",
      image: "/images/artists/kevin-macleod.jpg",
    },
    {
      id: 3,
      name: "Bensound",
      image: "/images/artists/bensound.jpg",
    },
    {
      id: 4,
      name: "LAKEY INSPIRED",
      image: "/images/artists/lakey-inspired.jpg",
    },
    {
      id: 5,
      name: "Scott Buckley",
      image: "/images/artists/scott-buckley.jpg",
    },
  ],
};

const ArtistSlice = createSlice({
    name: "artists",

    initialState,

    reducers: {
        
    }
})

export default ArtistSlice.reducer