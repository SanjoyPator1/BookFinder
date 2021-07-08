
import './App.css';
import React, { useEffect, useState } from "react";
import Books from './books';



const About = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("effect has been run");
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBooks = async () => {
    const response = await fetch(`https://book-finder-node.herokuapp.com/getAllBooks`);
    const data = await response.json();
    console.log(data);
    setBooks(data)
  }

  return (
    <div className="App">
      <div className="book">
        {books.map(book => (
          <Books
            key={book.id}
            title={book.title}
            author={book.author}
            pub_date={book.pdate}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
