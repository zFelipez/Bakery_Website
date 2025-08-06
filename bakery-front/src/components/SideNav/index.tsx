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
        
         <div className= {styles.logo}> <BakeryIcon></BakeryIcon></div>
          <ul className={styles.ul}>

         <SideNavMenu linkAddress='/'> Inicio</SideNavMenu>
         <SideNavMenu linkAddress='/About'> Sobre</SideNavMenu>
         <SideNavMenu linkAddress='/Products' > Produtos</SideNavMenu>
         <SideNavMenu linkAddress='/Contact'> Contato</SideNavMenu>
         <SideNavMenu linkAddress='/account/login'> Conta</SideNavMenu>
         <SideNavMenu linkAddress='/shopping/cart'> Compras</SideNavMenu>
         <SideNavMenu linkAddress='/AiChat'> Assistente </SideNavMenu>
    
          </ul>
          <div className={styles.force_scroll}> </div>
     
 
    </nav>

     
    
    
    
   

    )
}