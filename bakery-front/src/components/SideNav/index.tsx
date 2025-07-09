import { BakeryIcon } from '../BakeryIcon';
import { SideNavIcon } from '../NavLinks/SideNavIcon';
import { SideNavMenu } from './SideNavMenu';
import styles from './styles.module.css';


type SideNavProps = {
    open : true | false, 
}

export function SideNav({open}: SideNavProps){

    console.log(open)

    return (

    
    

    <nav className={` ${styles.sideNav}  ${open? styles.sideNavTrue : ''}`}  >
        <div className={styles.sideNavIcon}> <SideNavIcon />  </div>
        
         <h1> <BakeryIcon></BakeryIcon></h1>
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