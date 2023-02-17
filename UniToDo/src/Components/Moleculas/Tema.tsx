import React,{useState,useContext} from 'react'
import '../../assets/Styles/Header.css'
import sol from '../../assets/ico/sol.svg'
import lua from '../../assets/ico/lua.svg'
import { TemaContext } from '../Context/TemaContext'

export const Tema = () => {

    const {isDarkMode,handledarkmode} =  useContext(TemaContext)
    return (
        <button onClick={handledarkmode} className='HeaderWrapper__Tema'>
            <img src={isDarkMode ? lua:sol} alt="icone_tema" />
        </button>
    );
}