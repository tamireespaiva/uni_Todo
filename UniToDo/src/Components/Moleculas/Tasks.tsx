import React,{useState} from 'react';
import '../../assets/Styles/Body.css' 
import { EmptyTask } from '../Atomos/EmptyTask';
import { TaskPreencher } from '../Atomos/TaskPreencher';

interface props{
    count:number
    def:(event: any,taskId: number) => void
    check:boolean
    ondelete:(taskId: number) => void
    tasks: {
    id: number;
    checked: boolean;
    text: string;
    }[]
}

export const Task: React.FC<props> = ({count,def,check,ondelete})  => {
    const len = count
    return (
        <div className={len > 0 ?"Task":"Task empty"} >
            {len > 0 ?  <TaskPreencher ondelete={ondelete} count={count} check={check} def={def} />: <EmptyTask />}
        </div>
    );
}