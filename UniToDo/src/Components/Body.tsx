import React, {useContext, useState} from 'react'
import '../../src/assets/Styles/Body.css' 
import { Tarefascount } from '../Components/Moleculas/Tarefascount'
import { Task } from './Moleculas/Tasks'
import { CountContext } from './Context/CountModal'

export const Body = () => {

    const [lenConcluidas, setcountConcluidas] = useState(0)
    const {tasks,setTasks,ischecked} =useContext(CountContext)
    const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>, taskId: number) => {
        let checked = event.target.checked
        let updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, checked };
            }
            return task;
    });
    setTasks(updatedTasks);

    let countConcluidas = updatedTasks.filter((task) => task.checked).length;
    setcountConcluidas(countConcluidas);
};
const handleDelete = (taskId: number) => {
    let deletedTask = tasks.find((task) => task.id === taskId);
    if (deletedTask && deletedTask.checked) {
        setcountConcluidas(lenConcluidas - 1);
    }
    setTasks(tasks.filter((task) => task.id !== taskId))
};

    return (
        <div className='Tarefascount__Wrapper'>
            <Tarefascount count={tasks.length} countConcluidas={lenConcluidas} />
            <Task 
                check={ischecked} 
                def={handleCheckboxClick} 
                count={tasks.length} 
                ondelete={handleDelete}
                tasks={tasks}
                />
        </div>
    );
}