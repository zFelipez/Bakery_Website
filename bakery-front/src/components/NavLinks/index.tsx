 
import styles from './styles.module.css';

import { Link } from 'react-router-dom';

type NavLinksProps = {
   title?: string
   children: React.ReactNode , 
   icon: true | false,
   sideNavIcon?: true | false ,
   linkAddress: string
}

export function NavLinks( {title,children,icon,sideNavIcon,linkAddress } : NavLinksProps){
   return(

    <>
    
    
       <li title={title? title : ''} className= {styles.nav_btn} > <Link to={linkAddress} className= {`${icon ? styles.icon_styles : styles.no_icons} ${sideNavIcon? styles.sideNavIcon:''} ${sideNavIcon? 'navButton': ''} ${styles.linkReact}`}> {children} </Link> </li>
 
      
    
    </>
   )
}