import { ScrollText,User } from 'lucide-react';
import { NavLinks } from '../NavLinks';
import styles from './styles.module.css' ; 
import { Device } from '../../utils/Device';
import { SideNavIcon } from '../NavLinks/SideNavIcon';
import { useEffect, useState, type HTMLAttributes } from 'react';



export function Nav( props :  HTMLAttributes<HTMLElement>){
      
      const [isMobile,setisMobile] = useState(false); 
      
     const device = new Device(); 

     useEffect(()=>{
      setisMobile(device.deviceTypeIndentifier());

     },[])
     

    return(

        <>
        
        <nav className={styles.nav} {...props}>

         <ul className={ styles.nav_sec_icon} > 
              
              
           <SideNavIcon/>
             
              
           </ul>

          {!isMobile ? (


           <ul className={styles.nav_sec_btn}>
           
        
           <NavLinks icon={false} linkAddress='#'> Inicio </NavLinks>
           <NavLinks icon={false} linkAddress='#'> Sobre </NavLinks>
           <NavLinks icon={false}  linkAddress='#'> Produtos </NavLinks>
           <NavLinks icon={false}  linkAddress='#'> Contato </NavLinks>
           
           
      </ul>  

          ) : null }
          
          <ul className={isMobile ?  styles.nav_sec_icon_mobile : styles.nav_sec_icon}> 
              
               <NavLinks  icon={true} linkAddress='#' > <User/>  </NavLinks>
               <NavLinks icon= {true} linkAddress='#'> <ScrollText/> </NavLinks>
              
           </ul>

        </nav>

        </>
    )
}