
import React,{useEffect,useState} from "react";
import Books from './books';
import headCus from './header.module.css'

import './form.css'

const Upload= () => {

    return (
      <div>
          <div className="main-content">
        <div className="add-books">
            <h1 className="heading">Add Books</h1>
            <form className="action-form" action = "http://65.1.85.212:5000/saveItems" method = "post">
                <p><input className="input-content" type = "text" placeholder="Enter Title:" name = "title" /></p>
                <p><input className="input-content" type = "text" placeholder="Enter Author:" name = "author" /></p>
                <p><input className="input-content" type = "text" placeholder="Enter Publish Date:" name = "pdate" /></p>
                <p><input className="input-content" type = "text" placeholder="Enter tags: (Separated using a comma)" name = "tags" /></p>
                <p><input className="submit-btn" type = "submit" value = "Submit"/></p>
            </form>
        </div>
    </div>
      </div>
    );
  }

export default Upload;