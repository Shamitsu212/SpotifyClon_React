import styles from './Search_UI.module.css'

import { ArrowRight, SearchIcon, XIcon } from 'lucide-react'

import { useRef } from 'react'

import { useRequiredContext } from '../../../hooks/useRequireContext'
import { SearchContext } from '../../../context/SearchContext'


function Search_UI() {

    const inputRef = useRef<HTMLInputElement>(null);

    const { search, setSearch } = useRequiredContext(SearchContext, "SearchContext")

    return (

     <div className={styles.search}>

        <SearchIcon 
            size={34} 
            className={styles.search__searchIcon}
            onClick={() => inputRef.current?.focus()}
        />

        <input 
          type='text'
          placeholder='Что хочешь включить?'
          ref={inputRef}
          className={styles.search__input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search != "" &&
            <XIcon size={34} className={styles.search__XIcon} onClick={() => setSearch("")}/>
        }

        <span className={styles.search__divider}></span>

        <ArrowRight size={34}/>

      </div>

    )
}

export default Search_UI 