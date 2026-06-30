import { configureStore } from "@reduxjs/toolkit";

import ArtistSlice from './Slices/ArtistSlice'
import AlbumSlice from './Slices/AlbumSlice'
import TrackSlice from './Slices/TrackSlice'
import PlaylistSlice from './Slices/PlaylistSlice'
import FavoriteSlice from './Slices/FavoriteSlice'



export const store = configureStore({
    reducer: {
        artists: ArtistSlice,
        albums: AlbumSlice,
        track: TrackSlice,
        playlists: PlaylistSlice,
        favorite: FavoriteSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch