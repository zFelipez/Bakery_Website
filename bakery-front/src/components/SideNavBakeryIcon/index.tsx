import styles from './styles.module.css';
import { useBakeryContext } from '../../contexts/BakeryContext';


 
export function BakeryIcon( ){
     const {device: {isMobile }} = useBakeryContext(); 

     return(


      <>
      <img className={isMobile? styles.img_mobile : styles.img} src="/assets/bakery_img.png" alt="The Bread's Fraternity" />
      
      
      </>

     )

}