
import React from "react";
import { useForm } from 'react-hook-form';
import { useHistory as history} from 'react-router-dom';
import  {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import './form.css'

const Upload= () => {
  
  const history = useHistory();
  const successPage = useCallback(() => history.push('/success'), [history]);
  const errorPage = useCallback(() => history.push('/error'), [history]);

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit1 = async (data) => {
    console.log(data);
    console.log(data.title)

    const titleBox = data.title
    const authorBox = data.author
    const pdateBox = data.pdate
    const tagsBox = data.tags

    console.log(" data to post : " + titleBox + authorBox + pdateBox + tagsBox);

    // e.preventDefault();

    const tags = tagsBox.split(',')
    console.log(" tag is "+tags)

    const data1 = {
      "title": titleBox,
      "author": authorBox,
      "pdate": pdateBox,
      "tags": tags
}

    const res = await fetch(`https://bookfinder-backend.herokuapp.com/addBooks`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1
        )
    });

    const st = await res.json();
    console.log(st);

    

    if(st.status === "success"){
      successPage()
    } else {
      console.log("route to error page")
      errorPage()
    }

  }


    return (
      <div>
        <div className="main-content">
            <div className="add-books">
                <h1 className="heading">Add Books</h1>
                <form className="action-form" onSubmit={handleSubmit(onSubmit1)}>

      <input className="input-content" type="text" placeholder="Enter Title:" id="title" {...register('title', { required: true })} /> {/* register an input */}
      <input className="input-content" type="text" placeholder="Enter Author:" id="author" {...register('author', { required: true })} />
      <input className="input-content" type="text" placeholder="Enter Publish Date:" id="pdate" {...register('pdate', { required: true })} />
      <input className="input-content" type="text" placeholder="Enter tags: (Separated using a comma)"
                            id="tags" {...register('tags', { required: true })} />
      <input className="submit-btn" type="submit" />
                </form>
            </div>
        </div>
      
    </div>
    );
  }

export default Upload;