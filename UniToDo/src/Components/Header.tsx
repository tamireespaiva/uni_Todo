import React,{useContext} from 'react'
import '../assets/Styles/Header.css' 
import { TemaContext } from './Context/TemaContext'
import { Searchbox } from './Moleculas/Searchbox'
import { Tema } from './Moleculas/Tema' 



export const Header = () => {
    const { isDarkMode} = useContext(TemaContext)
    return (
        <div className={isDarkMode ? "HeaderWrapperLight":"HeaderWrapper"} >
            <Tema />
            <h1>uniTodo</h1>
            <Searchbox />
        </div>
    );
}

