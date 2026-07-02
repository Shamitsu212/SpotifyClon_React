import styles from "./Seek_UI.module.css"

import { formatTime } from "../../../utils/formatTime";

import { usePlayer } from "../../../hooks/usePlayer";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import {play, pause} from "../../../store/Slices/PlayerSlice";
import { PauseIcon, PlayIcon } from "lucide-react";

function Seek_UI(){

    const dispatch = useAppDispatch();

    const isPlaying = useAppSelector((state) => state.player.isPlaying);

    const { position, duration, seek } = usePlayer();

    return (
        <div className={styles.seek}>

            <div className={styles.seek__buttonContainer}>

                <button 
                    onClick={() => dispatch(isPlaying ? pause() : play())}
                    className={styles.buttonContainer__button}
                >
                    {isPlaying ? <PauseIcon/> : <PlayIcon/>}
                </button>


            </div>

            <div className={styles.seek__inputContainer}>
                <span>{formatTime(position)}</span>

                <input
                    type="range"
                    className={styles.inputContainer__input}
                    style={{background: `linear-gradient( to right, #fff 0%, #fff ${duration ? (position / duration) * 100 : 0}%, #6b6b6b ${duration ? (position / duration) * 100 : 0}%, #6b6b6b 100% )`}}
                    min={0}
                    max={duration}
                    value={position}
                    onChange={(e) => seek(Number(e.target.value))}
                />
                
                <span>{formatTime(duration)}</span>

            </div>

        </div>
    )
}

export default Seek_UI