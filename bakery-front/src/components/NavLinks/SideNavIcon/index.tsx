import { Menu } from 'lucide-react';
import { NavLinks } from '../../NavLinks';
 


export function SideNavIcon(){
    return(


   <>
   
    <NavLinks icon={true} sideNavIcon={true} linkAddress='#'  > <Menu/>   </NavLinks>
   </>

    )
}