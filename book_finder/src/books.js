import React from 'react';

const Books = ({title,author,pub_date}) => {
    return(
        <div>
            <h1>Title : {title}</h1>
            <p>Author : {author}</p>
            <h2>Publication Date : {pub_date}</h2>
        </div>
    );
}

export default Books;