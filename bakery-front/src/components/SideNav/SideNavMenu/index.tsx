import { Link } from 'react-router-dom'
import styles from './styles.module.css'

type SideNavMenuProps = {
    children: React.ReactNode, 
    linkAddress: string 

}


export function SideNavMenu({children,linkAddress}: SideNavMenuProps){
    return (

        <>
         
        <li className= {styles.li}> <Link to={linkAddress} className={styles.link}> {children}  </Link> </li>
            
        </>
    )
}