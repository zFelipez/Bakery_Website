import { Menu } from 'lucide-react';
import { NavLinks } from '../../NavLinks';
import styles from './styles.module.css';
import { useSideNavContext } from '../../../contexts/SideNavContext';


export function SideNavIcon(){
   const {open, setOpen} = useSideNavContext(); 
     
   
   
    function openAndCloseSideNav(){
       open ? setOpen (false) : setOpen(true)
      }
   
    return(


   <>
   <button onClick={openAndCloseSideNav} type='button' className={styles.button}>  <NavLinks icon={true} sideNavIcon={true} linkAddress='#'  >  <Menu/>   </NavLinks> </button>
   
   </>

    )
}