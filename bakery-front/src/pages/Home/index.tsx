import { Default } from "../../templates/Default";
import styles from './styles.module.css';




export function Home (){

    return (

    <>
    <Default> 


      <main>
       <div className= {styles.container}>
       <div className={styles.img}>   </div>

       <div className={styles.text_container}>
        <h1 className={styles.h1}> Sinta o aroma do pão feito com amor </h1>
        <h2 className={styles.h2}> Padaria artesanal com fermentação natural e ingredientes selecionados</h2>

        <button className={ styles.btn}> Ver Produtos </button>
        </div>
      
       </div>
      
      </main>


    </Default>
    
    </>


    )
}