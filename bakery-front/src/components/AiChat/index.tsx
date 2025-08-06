import { ArrowLeft, Send  } from "lucide-react";
import { PagesH1 } from "../PagesH1";
import styles from './styles.module.css'; 
import { Link } from "react-router-dom";
import { Input } from "../Input";



export function AiChat(){



    return (


        <>
          
          <div className={styles.head}>
            <Link className= {styles.return }to= '/'> <ArrowLeft/> </Link>
            <div className={styles.h1} > <PagesH1 >   Bakery Assistent </PagesH1> </div>
          </div>
        
 
        <div className={styles.secContainer}>

          <section className={styles.chatSection}>

            <div className={styles.msgContainer}>
                <div className= {styles.aiMsgs}>

                <p className={`${styles.aiMsg} ${styles.msg} `}> Ola,no que posso ajuda-lo hoje?</p>

            </div>

            </div>
            

            <div className={styles.msgContainer}>

                <div className= {styles.userMsgs}>

                <p className={`${styles.userMsg} ${styles.msg} `}> Ola,no que posso ajuda-lo hoje?</p>

            </div>



            </div>
           
             

        </section>
        <div className={styles.chatFooter}>
              <Input type='text' placeholder= 'No que posso te ajudar?' />
              <button className={styles.btn}>  <Send/>  </button>
            </div> 
        </div>
        
        
        </>
    )
}