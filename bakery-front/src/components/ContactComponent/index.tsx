import { Default } from '../../templates/Default';
import { Input } from '../Input';
import { PagesH1 } from '../PagesH1';
import styles from './styles.module.css'; 





export function ContactComponent(){


    return (



        <>
        
        <Default>


        

            <div className= {styles.contactGeneralContainer}>


            <PagesH1> Contato </PagesH1>

                <form action="" className={styles.form}>
                  
                  <div className={styles.formContainer}>
                     <p className={styles.p}>  Tem alguma duvida ou quer fazer um pedido especifico? 
                       Entre em contato conosco preeenchendo o formulario abaixo.
                  
                  </p>
                    
                    
                     <Input type= {'text'} placeholder = {' Digite seu Nome'}></Input>
                     <Input type= {'text'} placeholder = {' Digite seu Email'}></Input>
                     <Input type= {'text'} placeholder = {' Digite sua Mensagem'}></Input>


                    <button className= {styles.btn}> Enviar </button>
                  </div>
                    
              
                     


                </form>
 
            </div>
            
        </Default>
        
        </>
    )
}