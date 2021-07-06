
import './App.css';
import React,{useEffect,useState} from "react";
import Books from './books';

const App = () => {


  const [books, setBooks]=useState([])



  useEffect(() => {
    console.log("effect has been run");
    getBooks();
  },[]);

  const getBooks = async () => {
    const response = await fetch(`https://book-finder-backend.herokuapp.com/home/harry`);
    const data = await response.json();
    console.log(data.books);
    setBooks(data.books)
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="App">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">submit</button>
      </form>
      {books.map(book => (
        <Books 
        key={book.title}
        title={book.title}
        author={book.author}
        pub_date={book.pdate}
        />
      ))}
    </div>
  );
}

export default App;
