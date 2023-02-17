import React,{useState,useContext} from 'react'
import '../../assets/Styles/Body.css'
import lixeira from '../../assets/ico/lixeira.svg'
import { CountContext } from '../Context/CountModal'
import { TemaContext } from '../Context/TemaContext'

interface props{
    count:number
    def:(event: any,taskId: number) => void
    check:boolean
    ondelete:(taskId: number) => void

}

export const TaskPreencher: React.FC<props> =({count,def,check,ondelete})  => {
    const {tasks,setTasks,ischecked} =useContext(CountContext)
    const [draggedTask, setDraggedTask] = useState({ id: 0, checked: ischecked, text: "" });
    const [draggedTaskPosition, setDraggedTaskPosition] = useState(0);
    const handleDragON = (e:React.DragEvent<HTMLUListElement>) => {
        e.preventDefault();
        {tasks.map((task) =>{
                                        if (draggedTask) {
                    const newTasks = [...tasks];
                    const fromIndex = newTasks.indexOf(draggedTask);
                    newTasks.splice(fromIndex, 1);

                    const taskRects = Array.from(e.currentTarget.children).map((child) => {
                            return child.getBoundingClientRect();
                    });

                    const toIndex = taskRects.findIndex((rect) =>{
                        const taskPosition = rect.top + rect.height / 2;
                        if (draggedTaskPosition < taskPosition) {
                            return true;
                        }
                        return false;
                    });
                        if (toIndex === -1) {
                            newTasks.push(draggedTask);
                        } else {
                            newTasks.splice(toIndex, 0, draggedTask);
                        }

                        setTasks(newTasks);
                        setDraggedTask({ id: 0, checked: ischecked, text: "" });
                        setDraggedTaskPosition(0);
                    }
                })
            }
    }
    const handledraStart = (e: React.DragEvent<HTMLLIElement>) => {
        {tasks.map((task) =>{
            e.dataTransfer.setData("text/plain", `${task.id}`);
            e.currentTarget.classList.add("dragging");
            setDraggedTask(task);
            setDraggedTaskPosition(e.clientY);
        })}
    }
    
    const {isDarkMode} = useContext(TemaContext)
    const theme = isDarkMode? "Texto_light":"Texto"
    return (
        <ul className="TasksPreencher" onDragOver={(e) => e.preventDefault()} onDrop={handleDragON}>
            {tasks.map((task) => (
                <li 
                draggable
                    key={task.id} 
                    id={`${task.id}`}
                    className={isDarkMode ? "TaskParaPreencher__light":"TaskParaPreencher"}
                    onDragStart={handledraStart}
                    onClick={() => setDraggedTask(task)}
                    onDragEnd={() =>(e: React.DragEvent<HTMLLIElement>) => {
                                        setDraggedTask({id:0,checked:ischecked,text:""})
                                        document.querySelectorAll(".TaskParaPreencher").forEach((task) => {
                                        task.classList.remove("dragging");
                    });
                    }}
                    >
                    <div className='TaskPPreencher'>
                        <input 
                            title='radiobutton' 
                            className='RadioButton' 
                            checked={task.checked} 
                            id='task' type='checkbox' 
                            onChange={(event) => def(event, task.id)} />
                        <div className='FakeButton Completed'></div>
                    </div>
                    <label className='Label' htmlFor="task">
                        <textarea 
                            title='description' 
                            className={task.checked ? 'Texto tarefacompleta' : `${theme}`} 
                            name="task" defaultValue={task.text}></textarea>
                    </label>
                    <button 
                        className='BotaoLixo' 
                        onClick={() => ondelete(task.id)}>
                        <img src={lixeira} alt="imagem-lixeira" />
                    </button>
                </li>
            ))}
        </ul>

    );
}