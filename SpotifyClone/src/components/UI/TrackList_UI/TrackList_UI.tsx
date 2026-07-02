import type { Track } from '../../../types/types'
import Track_UI from '../Track_UI/Track_UI'
import styles from './TrackList.module.css'

interface Props{
    TrackList: Track[]
}

function TrackList({TrackList}:Props){

    return(
        <table>

            <thead>
                <tr className={styles.tr}>
                    <th className={styles.tr__tdId}>
                        #
                    </th>

                    <th>
                        Название
                    </th>

                    <th>
                        Исполнитель
                    </th>

                    <th>
                        Альбом
                    </th>
                </tr>
            </thead>

            <tbody>
                {TrackList.map((t) => (
                    <Track_UI track={t} />
                ))}
            </tbody>

        </table>
    )
}

export default TrackList