import { ScrollText,ShoppingCart,User } from 'lucide-react';
import { NavLinks } from '../NavLinks';
import styles from './styles.module.css' ; 
 
import { SideNavIcon } from '../NavLinks/SideNavIcon';
import {   type HTMLAttributes } from 'react';
import { MobileNavBakeryIcon } from '../MobileNavBakeryIcon';
import { useBakeryContext } from '../../contexts/BakeryContext';



export function Nav( props :  HTMLAttributes<HTMLElement>){
      
      const {device: {isMobile }} = useBakeryContext(); 

    return(

        <>
        
        <nav className={styles.nav} {...props}>

         <ul className={ styles.nav_sec_icon} > 
              
              
           <SideNavIcon/>
             
              
           </ul>

          {!isMobile ? (


           <ul className={styles.nav_sec_btn}>
           
        
           <NavLinks   icon={false} linkAddress='/'> Inicio </NavLinks>
           <NavLinks    icon={false} linkAddress='About'> Sobre </NavLinks>
           <NavLinks    icon={false}  linkAddress='Products'> Produtos </NavLinks>
           <NavLinks   icon={false}  linkAddress='Contact'> Contato </NavLinks>
           
           
      </ul>  

          ) : (

            <ul>

             <MobileNavBakeryIcon/>

            </ul>
          ) }

          
          <ul className={isMobile ?  styles.nav_sec_icon_mobile : styles.nav_sec_icon}> 
              
               <NavLinks  title={'Sua Conta'} icon={true} linkAddress='account' > <User/>  </NavLinks>
               <NavLinks  title={'Seu Carrinho'} icon= {true} linkAddress='shoppingCart'> <ShoppingCart/> </NavLinks>
               <NavLinks title={'Pedidos dos Clientes'} icon= {true} linkAddress='purchaseOrderList'> <ScrollText/> </NavLinks>
              
           </ul>

        </nav>

        </>
    )
}