
import styles from './styles.module.css';


type PagesH1Props = {

    children: React.ReactNode;
}


export function PagesH1( {children}: PagesH1Props){


    return (


        <>
        
          <h1 className={styles.h1}> {children}   </h1>
        
        </>
    )
}