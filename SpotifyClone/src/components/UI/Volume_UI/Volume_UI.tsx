import styles from './Volume_UI.module.css'

import { setVolume } from "../../../store/Slices/PlayerSlice";

import { useAppDispatch } from '../../../store/hooks';
import { useAppSelector } from '../../../store/hooks';
import { Volume1Icon } from 'lucide-react';


function Volume_UI(){

    const dispatch = useAppDispatch();

    const volume = useAppSelector((state) => state.player.volume);

    return(

        <div className={styles.volumeController}>

            <Volume1Icon className={styles.volumeController__Icon} size={28}/>

            <input
                className={styles.volumeController__input}
                style={{background: `linear-gradient( to right, #fff 0%, #fff ${volume * 100}%, #6b6b6b ${volume * 100}%, #6b6b6b 100%)`}}
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) =>dispatch(setVolume(Number(e.target.value)))}
            />
        </div>

    )
}

export default Volume_UI