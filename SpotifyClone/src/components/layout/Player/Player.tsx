import styles from './Player.module.css'

import PlayedTrack_UI from "../../UI/PlayedTrack_UI/PlayedTrack_UI";
import Volume_UI from '../../UI/Volume_UI/Volume_UI';
import Seek_UI from '../../UI/Seek_UI/Seek_UI';

function Player() {
  

  return (
    <div className={styles.player}>

        <div className={styles.player__playedTrack}>
            <PlayedTrack_UI />
        </div>
        

        <div className={styles.player__seekController}>
            <Seek_UI />
        </div>

        
        <div className={styles.player__volumeController}>
            <Volume_UI/>
        </div>
        
    </div>
  );
}

export default Player