import { useEffect } from "react";
import { useBakeryContext } from "../contexts/BakeryContext";
import { Device } from "../utils/Device";
import { SideNav } from "../components/SideNav";
import { Nav } from "../components/Nav";
import { AiIcon } from "../components/AiIcon";

 


export function Default(){



  const {navigation : {open,setOpen },device: {setIsMobile}} = useBakeryContext(); 
  
  
   
  const device = new Device(); 
     
     useEffect(()=>{
           setIsMobile(device.deviceTypeIndentifier());
     
          },[])
    
 
  return(
      
      <>

      
       <Nav   style={{ zIndex:  open ? -1: 1}}></Nav>
      
       <SideNav open={ open} setOpen= {setOpen}></SideNav>
       

      <AiIcon></AiIcon>  

      </>
 


  )
}