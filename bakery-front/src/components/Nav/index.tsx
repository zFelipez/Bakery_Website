import { ShoppingCart, User } from 'lucide-react';
import { NavLinks } from '../NavLinks';
import styles from './styles.module.css' ; 
import { Device } from '../../utils/Device';
import { SideNavIcon } from '../NavLinks/SideNavIcon';
import type { HTMLAttributes } from 'react';



export function Nav( props :  HTMLAttributes<HTMLElement>){

     const device = new Device();
     const width= device.deviceWidthIndentifier(); 
     console.log(width)

    return(

        <>
        
        <nav className={styles.nav} {...props}>

         <ul className={ styles.nav_sec_icon} > 
              
              
           <SideNavIcon/>
             
              
           </ul>


          <ul className={styles.nav_sec_btn}>
           
            
           <NavLinks icon={false} linkAddress='#'> Inicio </NavLinks>
           <NavLinks icon={false} linkAddress='#'> Sobre </NavLinks>
           <NavLinks icon={false}  linkAddress='#'> Produtos </NavLinks>
           <NavLinks icon={false}  linkAddress='#'> Contato </NavLinks>
           
           
      </ul>  
          <ul className={styles.nav_sec_icon}> 
              
               <NavLinks icon={true} linkAddress='#' > <User/>  </NavLinks>
               <NavLinks icon= {true} linkAddress='#'> <ShoppingCart/> </NavLinks>
              
           </ul>

        </nav>

        </>
    )
}