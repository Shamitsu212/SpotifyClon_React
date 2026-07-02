import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  currentTrackId: number | null;
  isPlaying: boolean;
  volume: number;
}

const initialState: PlayerState = {
  currentTrackId: null,
  isPlaying: false,
  volume: 1,
};

const playerSlice = createSlice({
  name: "player",

  initialState,

  reducers: {

    play(state) {
      state.isPlaying = true;
    },

    pause(state) {
      state.isPlaying = false;
    },

    setTrack(state, action: PayloadAction<number>) {
      state.currentTrackId = action.payload;
    },

    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },

    stop(state) {
      state.isPlaying = false;
      state.currentTrackId = null;
    },
    
  },
});

export const {play, pause, stop, setTrack, setVolume} = playerSlice.actions;

export default playerSlice.reducer;