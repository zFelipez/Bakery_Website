 
import styles from './style.module.css';



type NavLinksProps = {
   children: React.ReactNode , 
   icon: true | false,
   linkAddress: string 
}

export function NavLinks( {children,icon,linkAddress} : NavLinksProps){
   return(

    <>
    
    
       <li className= {styles.nav_btn} > <a href={linkAddress} className= {icon ? styles.icon_styles : styles.no_icons}> {children} </a></li>
 
      
    
    </>
   )
}