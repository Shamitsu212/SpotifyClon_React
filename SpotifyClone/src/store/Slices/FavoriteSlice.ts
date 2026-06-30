import { createSlice } from "@reduxjs/toolkit";

import type { Track } from "../../types/types";

interface TrackState {
    tracks: Track[]
}

const initialState: TrackState = {
  tracks: []
};

const FavoriteSlice = createSlice({
    name: "favorite",

    initialState,

    reducers: {

    }
})

export default FavoriteSlice.reducer