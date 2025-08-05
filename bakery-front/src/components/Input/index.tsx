import styles from './styles.module.css';


type InputProps = {

    type: React.HTMLInputTypeAttribute;
    placeholder: React.HTMLInputTypeAttribute;

}


export function Input( {type, placeholder }: InputProps){



       return (
       
       <>
       
       
        <input type={type } placeholder={placeholder}  className={styles.input}/>
       
       </>)

}