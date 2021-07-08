import React from 'react';
import style from './book.module.css'


const ErrorPage = () => {


  return (
    <div className={style.scontainer}>
    <div className={style.success}>
        <div className={style.is}>
        <i >X</i>
        </div>
            
            <h1 className={style.h1s}>Unsuccessful </h1>
            <p className={style.ps}>We couldn't add your book information<br/> You can check again later!</p>
            
    </div>
    </div>  
    
  );
}

export default ErrorPage;