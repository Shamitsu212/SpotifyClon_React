export interface Artist {
    id: number,
    
    name: string,

    image: string
}

export interface Album {
    id: number,
    artist_id: number,

    title: string,

    image: string
}

export interface Track {
    id: number,
    artist_id: number,
    album_id: number,

    title: string, 

    audio: string,
    image: string
}

export interface Playlist {
    id: number,

    name: string,
    image: string,
    
    tracks_ids: number[]
}