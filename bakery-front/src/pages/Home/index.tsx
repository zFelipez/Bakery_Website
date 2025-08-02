import { Link } from "react-router-dom";
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
        <h1 className={`${styles.h1} ${styles.topTitles}`} > Sinta o aroma do pão feito com amor </h1>
        <h2 className={`${styles.h2} ${styles.topTitles}`}> Padaria artesanal com fermentação natural e ingredientes selecionados</h2>

        <Link to="Products"className={ styles.link}> Ver Produtos </Link>
        </div>
      
       </div>
      
      </main>


     <section className={styles.homeProductsSection}>
   
         <h3 className= {styles.h3}> Nossos produtos</h3>  

      <div className={styles.homeSectionGeneralContainer}>

        <div className={ styles.homeSectionProductsContainer}>

         <div  className={styles.homeProductsContainer}>
          <img src="./assets/bread1.png" alt=""  className={styles.homeProductsImg}/>
           <div className={styles.containerTexts}> 

            <h4 className={styles.h4}> Pão italiano</h4>
           <p className= {styles.hSubtitle}> R$ 8.00</p>
           </div>
         </div>
      
      <div  className={styles.homeProductsContainer}>
          <img src="./assets/bread1.png" alt=""  className={styles.homeProductsImg}/>
           <div className={styles.containerTexts}> 

            <h4 className={styles.h4}> Pão italiano</h4>
           <p className= {styles.hSubtitle}> R$ 8.00</p>
           </div>
           
         </div>

       

         </div>
         </div>

     </section>


    </Default>
    
    </>


    )
}