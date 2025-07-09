import {isMobile} from 'react-device-detect'; 



export class Device{
       width: number; 
       isMobile= true || false ;

       constructor (){
          this.width= 0;
          this.isMobile= false; 
       }

     deviceWidthIndentifier(){
       this.width = window.screen.width;
       return this.width;
   }

    deviceTypeIndentifier(){
       this.isMobile= isMobile
       return this.isMobile 
    }

} 










