
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';



type DefaultAccountProps = {

    children: React.ReactNode, 
}
 

export function DefaultAccount( {children}: DefaultAccountProps){
    
      const location = useLocation(); 
      const [loginPage, setLoginPage] = useState(true);

      useEffect(()=>{
          setLoginPage(location.pathname.includes('login'));
      },[location.pathname]) ;

      
    return (

        <>
        <div className={styles.container}> 

        <form  className= {`${styles.form} ${loginPage ? styles.formLogin : styles.formSignUp}`} action="post">

       
        
        <div className= {styles.formContainer}>
           <div className= {styles.logo}></div>

           {children}
        
   
       

        </div>
        
        
       
       </form>
            
        </div>
        
        
        
        </>
    )
}