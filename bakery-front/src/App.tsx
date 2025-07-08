import { SideNav } from "./components/SideNav";
import { Nav } from "./components/Nav";
import { useSideNavContext } from "./contexts/SideNavContext";
 




export function App (){



   const {open} = useSideNavContext(); 
   
    
 
  return(
      
      <>

      
      <Nav style={{
  
       zIndex: open ? -1: 1
      }}></Nav>
      
       <SideNav open={open}></SideNav>
       
      </>

  )
}