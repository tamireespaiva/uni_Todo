import React, {useContext, useState} from 'react'
import '../../assets/Styles/Body.css'
import { TemaContext } from '../Context/TemaContext'
interface props{
    count:number,
    countConcluidas:number
}

export const Tarefascount: React.FC<props> = ({count, countConcluidas}) => {
    const {isDarkMode} = useContext(TemaContext)
    return (
        <div className='Tarefascount__Tab'>
        <span className='Tarefascount__Criar'>
            <span className='Tarefascount__Criadas'>Tarefas criadas</span>
            <span className={isDarkMode ? "Tarefascount__CriadasContador__light":"Tarefascount__CriadasContador"}>{count}</span>
        </span>

        <span className='Tarefascount__Concluir'>
            <span className='Tarefascount__Concluidas'>Concluídas</span>
            <span className={isDarkMode ? "Tarefascount__ConcluidasContador__light":"Tarefascount__ConcluidasContador"}><span>{countConcluidas}</span><span> de </span><span>{count}</span></span>
        </span>
        </div>
    );
}

