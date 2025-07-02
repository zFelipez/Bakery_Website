import { ShoppingCart, User } from 'lucide-react';
import { NavLinks } from '../NavLinks';
import styles from './styles.module.css' ; 




export function Nav(){
    return(

        <>
        
        <nav className={styles.nav}>
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