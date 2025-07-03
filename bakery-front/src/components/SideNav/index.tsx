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

         <SideNavMenu> Inicio</SideNavMenu>
         <SideNavMenu> Sobre</SideNavMenu>
         <SideNavMenu> Produtos</SideNavMenu>
         <SideNavMenu> Contato</SideNavMenu>
         <SideNavMenu> Conta</SideNavMenu>
         <SideNavMenu> Compras</SideNavMenu>
         <SideNavMenu> Assistente </SideNavMenu>
         <SideNavMenu> Assistente </SideNavMenu>
         <SideNavMenu> Assistente </SideNavMenu>
         <SideNavMenu> Assistente </SideNavMenu>
         <SideNavMenu> Assistente </SideNavMenu>
         

          
          
            
          </ul>
          <div className={styles.force_scroll}> </div>
     
 
    </nav>

     
    
    
    
   

    )
}