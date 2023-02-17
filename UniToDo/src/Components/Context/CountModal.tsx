import { useState, createContext,useEffect } from "react";

interface TaskData {
    tasks: {
    id: number;
    checked: any;
    text: string;
    }[]
    setTasks: React.Dispatch<React.SetStateAction<{
    id: number;
    checked: any;
    text: string;
}[]>>,
ischecked: boolean
textInput: string
setTextInput: React.Dispatch<React.SetStateAction<string>>
}

export const CountContext = createContext({} as TaskData)

export const  CountProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
        const [textInput, setTextInput] = useState("")
    const [ischecked, setisChecked] = useState(false)
    const [tasks, setTasks] = useState(
        [{ id: 1, checked: ischecked, text: "" },
    ])
    useEffect(() => {
        setTasks([])
    }, [])

    return(
        <CountContext.Provider
            value = { { tasks: tasks, setTasks:setTasks,setTextInput:setTextInput , ischecked:ischecked,textInput:textInput} }
        >
            {children}
        </CountContext.Provider>
    );
};
