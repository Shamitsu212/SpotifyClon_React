import styles from './Header.module.css'

import { HomeIcon } from 'lucide-react'

import { Link } from 'react-router-dom'
import Search_UI from '../../UI/Search_UI/Search_UI'

function Header() {

  return (

    <header className={styles.header}>

        <Link className={styles.header__Link} to="/">
            <HomeIcon size={38} />
        </Link>

        <Search_UI/>

    

      
    </header>

  )
}

export default Header
