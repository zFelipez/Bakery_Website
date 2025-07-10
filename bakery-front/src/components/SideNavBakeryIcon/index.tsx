import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Device } from '../../utils/Device';


 
export function BakeryIcon( ){
     const [isMobile,setisMobile] = useState(false); 
           
     const device = new Device(); 
     
     useEffect(()=>{
           setisMobile(device.deviceTypeIndentifier());
     
          },[])

     return(


      <>
      <img className={isMobile? styles.img_mobile : styles.img} src="/assets/bakery_img.png" alt="The Bread's Fraternity" />
      
      
      </>

     )

}