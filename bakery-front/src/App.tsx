import { SideNav } from "./components/SideNav";
import { Nav } from "./components/Nav";
import { useBakeryContext} from "./contexts/BakeryContext";
import { AiIcon } from "./components/AiIcon";
import { useEffect } from "react";
import { Device } from "./utils/Device";
 

 




export function App (){



   const {navigation : {open },device: {setIsMobile}} = useBakeryContext(); 
  
  
   
   const device = new Device(); 
     
     useEffect(()=>{
           setIsMobile(device.deviceTypeIndentifier());
     
          },[])
    
 
  return(
      
      <>

      
      <Nav style={{ zIndex:  open ? -1: 1}}></Nav>
      
       <SideNav open={ open}></SideNav>
       

      <AiIcon></AiIcon>

      
      </>



  )
}