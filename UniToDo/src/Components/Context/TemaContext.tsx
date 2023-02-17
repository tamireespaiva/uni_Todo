import { useState, createContext,useEffect } from "react";
interface ThemeData {
isDarkMode: boolean
handledarkmode: () => void
}

export const TemaContext = createContext({} as ThemeData)

export const  TemaProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(false);
    const handledarkmode = () =>{
        console.log(isDarkMode)
            setDarkMode(!isDarkMode)
    }
    return(
        <TemaContext.Provider
            value = {{isDarkMode:isDarkMode,handledarkmode:handledarkmode}}
        >
            {children}
        </TemaContext.Provider>
    );
};