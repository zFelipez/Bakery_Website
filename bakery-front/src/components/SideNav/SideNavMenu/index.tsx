import styles from './styles.module.css'

type SideNavMenuProps = {
    children: React.ReactNode, 
    linkAddress: string 

}


export function SideNavMenu({children,linkAddress}: SideNavMenuProps){
    return (

        <>
         
        <li className= {styles.li}> <a href={linkAddress} className={styles.a}> {children}  </a> </li>
            
        </>
    )
}