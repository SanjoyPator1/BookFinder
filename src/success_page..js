import React from 'react';
import style from './book.module.css'


const Success = () => {


  return (
    <div className={style.scontainer}>
    <div className={style.success}>
        <div className={style.is}>
        <i >✓</i>
        </div>
            
            <h1 className={style.h1s}>Success </h1>
            <p className={style.ps}>We added your book information<br/> You can check it on the display all page!</p>
            
    </div>
    </div>  
    
  );
}

export default Success;