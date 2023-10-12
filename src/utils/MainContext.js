import { createContext, } from "react";

export const MainContext = createContext();

export const AppContext = ({children})=>{


const globalStates ={
    
}




    return (
        <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
      );
}