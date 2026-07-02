import styles from './Track_UI.module.css'

import type { Track } from '../../../types/types'
import { useAppSelector } from '../../../store/hooks'

interface Props{
    track: Track
}

function Track_UI({track}:Props){

    const artist = useAppSelector((state) => state.artists.artists.find((a) => a.id == track.artist_id))
    const album = useAppSelector((state) => state.albums.albums.find((a) => a.id == track.album_id))

    return(
        <tr className={styles.tr}>
            
            <td className={styles.tr__tdId}>
                {track.id}
            </td>

            <td className={styles.tr__imageTd}>
                <div>
                    <img src={track.image} />
                </div>
                {track.title}
            </td>

            <td>
                {artist?.name}
            </td>

            <td>
                {album?.title}
            </td>
        </tr>
    )
}

export default Track_UI