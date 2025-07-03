import { SideNavIcon } from '../NavLinks/SideNavIcon';
import { SideNavMenu } from './SideNavMenu';
import styles from './styles.module.css';


type SideNavProps = {
    active : true | false, 
}

export function SideNav({active}: SideNavProps){

    console.log(active)

    return (

    
    

    <nav className={` ${styles.sideNav}  ${active ? styles.sideNavTrue : ''}`}  >
        <div className={styles.sideNavIcon}> <SideNavIcon />  </div>
        
         <h1> The Bread's Fraternity </h1>
          <ul className={styles.ul}>

         <SideNavMenu linkAddress='#'> Inicio</SideNavMenu>
         <SideNavMenu linkAddress='#'> Sobre</SideNavMenu>
         <SideNavMenu linkAddress='#' > Produtos</SideNavMenu>
         <SideNavMenu linkAddress='#'> Contato</SideNavMenu>
         <SideNavMenu linkAddress='#'> Conta</SideNavMenu>
         <SideNavMenu linkAddress='#'> Compras</SideNavMenu>
         <SideNavMenu linkAddress='#'> Assistente </SideNavMenu>
         <SideNavMenu linkAddress='#'> Assistente </SideNavMenu>
         <SideNavMenu linkAddress='#'> Assistente </SideNavMenu>
         <SideNavMenu linkAddress='#'> Assistente </SideNavMenu>
         <SideNavMenu linkAddress='#'> Assistente </SideNavMenu>
         

          
          
            
          </ul>
          <div className={styles.force_scroll}> </div>
     
 
    </nav>

     
    
    
    
   

    )
}