import { useEffect } from "react";
import { useBakeryContext } from "../contexts/BakeryContext";
import { Device } from "../utils/Device";
import { SideNav } from "../components/SideNav";
import { Nav } from "../components/Nav";
import { AiIcon } from "../components/AiIcon";

 
type DefaultProps = {
  children: React.ReactNode, 
}

export function Default({children}: DefaultProps){



  const {navigation : {open,setOpen },device: {setIsMobile}} = useBakeryContext(); 
  
  
   
  const device = new Device(); 
     
     useEffect(()=>{
           setIsMobile(device.deviceTypeIndentifier());
     
          },[])
    
 
  return(
      
      <>
        
        
         
           
      <Nav  style={{ zIndex:  open ? 1: 1}}> <div style={{ zIndex:  open ? -1: 1}}>{children}</div></Nav>
        
       
      <SideNav style={{ zIndex:  open ? 1: 1}} open={ open} setOpen= {setOpen}></SideNav>
       
       
       
        
      
       
      <AiIcon></AiIcon>  

      </>
 


  )
}