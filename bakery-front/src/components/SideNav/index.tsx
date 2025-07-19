import { BakeryIcon } from '../SideNavBakeryIcon';
import { SideNavIcon } from '../NavLinks/SideNavIcon';
import { SideNavMenu } from './SideNavMenu';
import styles from './styles.module.css';
import { useEffect,useRef, type HTMLAttributes } from 'react';


type SideNavProps = {
    open : boolean, 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    
} & HTMLAttributes<HTMLElement>

export function SideNav({open,setOpen,...props}: SideNavProps){
 
    const navRef= useRef<HTMLElement>(null)

    useEffect(()=>{
 
      
        
     
       function handleOutsideClick(event: MouseEvent ){
        
        const target= event.target as Node;
        
        if(navRef.current?.contains(target) )return ;

        if(open){
            setOpen(false);
        }
       

       }

      
       document.addEventListener('mousedown', handleOutsideClick);

       return ()=>{
        document.removeEventListener('mousedown', handleOutsideClick)
       }

    }, [open, setOpen])

    return (

    
    

    <nav {...props}  ref= {navRef} className={` ${styles.sideNav}  ${open? styles.sideNavTrue : ''} sideNavFunc `}   >
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