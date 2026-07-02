import Header from '../../layout/Header/Header'
import Player from '../../layout/Player/Player'
import Playlists from '../../layout/PlayLists/PlayLists'
import ViewPlatlist from '../../layout/ViewPlatlist/ViewPlatlist'
import styles from './Main_Page.module.css'

function Main_Page() {

  return (
    <div className={styles.page}>
      <Header/>

      <div className={styles.row}>
        <Playlists/>

        <ViewPlatlist />
      </div>

      <Player />
    </div>
  )
}

export default Main_Page
