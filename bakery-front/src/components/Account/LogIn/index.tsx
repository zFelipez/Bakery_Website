import { DefaultAccount } from '../DefaultAccount';
import styles from '../DefaultAccount/styles.module.css';
import { Link } from 'react-router-dom';



export function LogIn (){
    return (

     <>
     
       <DefaultAccount>   
        <h1 className={styles.h1}>Log In</h1>
        <input className={styles.input} type="text" placeholder='Digite seu Email' /> 
        <input className= {styles.input}type="password" placeholder= 'Digite sua Senha'/>  
         <p className={styles.p}>  Não tem uma Conta ? <Link className={styles.link}to='/account/signup'> Crie Uma Aqui </Link> </p> 
         <button className={styles.btn} type='submit'> Entrar </button>
      </DefaultAccount>
      
      
     
     
     
     </>
    

    )

}