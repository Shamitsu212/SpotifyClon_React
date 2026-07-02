import { configureStore } from "@reduxjs/toolkit";

import ArtistSlice from './Slices/ArtistSlice'
import AlbumSlice from './Slices/AlbumSlice'
import TrackSlice from './Slices/TrackSlice'
import PlaylistSlice from './Slices/PlaylistSlice'
import FavoriteSlice from './Slices/FavoriteSlice'
import PlayerSlice from './Slices/PlayerSlice'


export const store = configureStore({
    reducer: {
        artists: ArtistSlice,
        albums: AlbumSlice,
        tracks: TrackSlice,
        playlists: PlaylistSlice,
        favorite: FavoriteSlice,

        player: PlayerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch