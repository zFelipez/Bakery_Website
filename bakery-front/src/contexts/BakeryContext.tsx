
import { createContext, useContext, useState, type ReactNode } from 'react';


type BakeryContextType= {
    navigation :{
      open: boolean ,                    //tipagem do contexto 
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    } ,
    device:{
        isMobile: boolean , 
        setIsMobile :  React.Dispatch<React.SetStateAction<boolean>>;
    },
}


const BakeryContext = createContext<BakeryContextType  | undefined>(undefined); //contexto

export function BakeryContextProvider( {children}: {children: ReactNode}) {
 
   const [open, setOpen] = useState (false);
   const [isMobile,setIsMobile] = useState(false);

   const value : BakeryContextType = {
    navigation: {
        open: open,
        setOpen: setOpen
    },
    device:{
        
        isMobile: isMobile,
        setIsMobile:setIsMobile
    },

   }
    return(

     <BakeryContext.Provider value ={value}> 

       {children}

     </BakeryContext.Provider>

    )
}

export function useBakeryContext(){

    const context = useContext( BakeryContext);

    if ( !context){
        throw new Error('É nescessario utilizar isto dentro de um provider');
    }

    return context; 


}
