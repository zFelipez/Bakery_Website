import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { SideNav } from "./components/SideNav";




export function App (){

  const [active,setActive] =useState(false)


   function activew(){
     active? setActive(false) : setActive(true)
    
   }


  return(
      
      <>
      <button onClick={activew} >clique </button>
       <SideNav active={active}></SideNav>
       
      </>

  )
}