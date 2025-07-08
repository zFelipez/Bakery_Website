
import { createContext, useContext, useState, type ReactNode } from 'react';


type SideNavContextType= {
    open: true | false ,                    //tipagem do contexto 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}


const SideNavContext = createContext<SideNavContextType | undefined>(undefined); //contexto

export function SideNavContextProvider( {children}: {children: ReactNode}) {
 
   const [open, setOpen] = useState (false);


    return(

     <SideNavContext.Provider value ={{open, setOpen}}> 

       {children}

     </SideNavContext.Provider>

    )
}

export function useSideNavContext(){

    const context = useContext(SideNavContext);

    if ( !context){
        throw new Error('É nescessario utilizar isto dentro de um provider');
    }

    return context; 


}
