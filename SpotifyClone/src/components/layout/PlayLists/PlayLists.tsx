import styles from "./Playlists.module.css"

import { PlusIcon } from "lucide-react"

import { useSelector } from "react-redux"
import type { RootState } from "../../../store/store"

import Playlist_UI from "../../UI/Playlist_UI/Playlist_UI"

import favorite from "../../../assets/images/favorite.png"



function Playlists(){

    const playlists = useSelector((state: RootState) => state.playlists)

    return(
        <aside className={styles.aside}>

            <div className={styles.aside__h}>
                <h3>
                    Моя медиатека
                </h3>

                <button className={styles.h__button}>
                    <PlusIcon />
                </button>
            </div>

            <div className={styles.aside__playlists}>

                <Playlist_UI  id={"favorite"} name={"Любимые треки"} image={favorite}/>

                {playlists.playlists.map((p) => (
                    <Playlist_UI key={p.id} id={p.id} name={p.name} image={p.image} />
                ))}

            </div>

        </aside>
    )
}

export default Playlists