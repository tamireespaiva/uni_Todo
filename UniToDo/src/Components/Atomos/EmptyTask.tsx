import React from 'react'
import '../../assets/Styles/Body.css' 
import board from '../../assets/ico/board.svg'

export const EmptyTask = () => {
    return (
        <div className='TaskVazia'>
            <img src={board} alt="icone_anotacoes" />
            <section>
                <h3>Você ainda não tem tarefas cadastradas</h3>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </section>
        </div>
    );
}