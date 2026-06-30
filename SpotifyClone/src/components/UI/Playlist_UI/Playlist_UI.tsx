import { Link } from 'react-router-dom'
import styles from './Playlist_UI.module.css'

interface Props {
    id: number | string,
    name: string,
    image: string
}

function Playlist_UI({id, name, image}:Props){

    return(
        <Link to={`/playlist/${id}`} className={styles.playlist}>
            
            <div className={styles.playlist__wrapper}>
                <img src={image} className={styles.wrapper__image}/>
            </div>

            <div className={styles.playlist_info}>

                <p className={styles.info__name}>
                    {name}
                </p>

                <p className={styles.info__text}>
                    Плейлист
                </p>
            </div>
            

        </Link>
    )
}

export default Playlist_UI