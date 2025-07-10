
import styles from './styles.module.css';

import { useBakeryContext } from '../../contexts/BakeryContext';


 
export function MobileNavBakeryIcon( ){
     
     const {device: {isMobile }} = useBakeryContext(); 
           
     

     return(


      <>
      <img className={isMobile? styles.img_mobile :''} src="/assets/bakery_img_nobg.png" alt="The Bread's Fraternity" />
      
      
      </>

     )

}