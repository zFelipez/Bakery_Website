import { Bot } from 'lucide-react';
import styles from './styles.module.css' ; 
import { Link } from 'react-router-dom';



export function AiIcon(){



    return (

        <>
        

              <Link to='AiChat'> <button className={styles.bot}><Bot/></button></Link>
         
        </>
    )
}