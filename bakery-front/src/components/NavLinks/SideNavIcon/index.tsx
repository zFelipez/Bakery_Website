import { Menu, X } from 'lucide-react';
import { NavLinks } from '../../NavLinks';
import styles from './styles.module.css';
import { useBakeryContext } from '../../../contexts/BakeryContext';



export function SideNavIcon( ){
   const {navigation : {open, setOpen}} = useBakeryContext(); 
     
   
   
    function openAndCloseSideNav(){
       open ? setOpen (false) : setOpen(true)
      }
   
    return(


   < >
   <button  onClick={openAndCloseSideNav} type='button' className={styles.button}>  <NavLinks icon={true} sideNavIcon={true} linkAddress='#'  >
      
      {open ? <X/>: <Menu/>  }    </NavLinks> </button>
   
   </>

    )
}