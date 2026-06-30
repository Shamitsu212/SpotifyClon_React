import { createSlice } from "@reduxjs/toolkit";

import type { Playlist } from "../../types/types";

interface PlaylistState {
    playlists: Playlist[]
}

const initialState: PlaylistState = {
  playlists: []
};

const FavoriteSlice = createSlice({
    name: "platlists",

    initialState,

    reducers: {

    }
})

export default FavoriteSlice.reducer