import { PlayIcon } from 'lucide-react'
import styles from './ViewPlatlist.module.css'
import TrackList from '../../UI/TrackList_UI/TrackList_UI'
import { useAppSelector } from '../../../store/hooks'

function ViewPlatlist(){

    const tracks = useAppSelector((state) => state.tracks.tracks)

    return(

        <div className={styles.view}> 

            <div>

                <div>
                    <img />
                </div>

                    <p>
                        Плейлист
                    </p>

                    <h1>
                        Любимые треки
                    </h1>

            </div>

            <div>

                <button>
                    <PlayIcon />
                </button>

            </div>

            <div>
                <TrackList TrackList={tracks}/>
            </div>

        </div>

    )
}

export default ViewPlatlist