import { DefaultAccount } from '../DefaultAccount';
import styles from '../DefaultAccount/styles.module.css';
import { Link } from 'react-router-dom';



export function SignUp (){
    return (

     <>
     
       <DefaultAccount>   
        <h1 className={styles.h1}>Crie sua Conta</h1>
        <input className={styles.input} type="text" placeholder='Digite seu Email' /> 
        <input className= {styles.input}type="password" placeholder= 'Digite sua Senha'/>  
        <input className= {styles.input}type="password" placeholder= 'Confirme sua Senha'/>
         <p className={styles.p}>  Ja tem uma Conta ? <Link className={styles.link}to='/account/login'> Entre Aqui </Link> </p> 
         <button className={styles.btn} type='submit'> Criar Conta </button>
      </DefaultAccount>
      
      
     
     
     
     </>
    

    )

}