 
import styles from './style.module.css';



type NavLinksProps = {
   children: React.ReactNode , 
   icon: true | false,
   sideNavIcon?: true | false ,
   linkAddress: string
}

export function NavLinks( {children,icon,sideNavIcon, linkAddress} : NavLinksProps){
   return(

    <>
    
    
       <li className= {styles.nav_btn} > <a href={linkAddress} className= {`${icon ? styles.icon_styles : styles.no_icons} ${sideNavIcon? styles.sideNavIcon:''} `}> {children} </a></li>
 
      
    
    </>
   )
}