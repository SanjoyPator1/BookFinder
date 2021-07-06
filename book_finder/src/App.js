
import './App.css';
import React,{useEffect,useState} from "react";
import Books from './books';

const App = () => {


  const [books, setBooks]=useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('harry+potter+1')

  useEffect(() => {
    console.log("effect has been run");
    getBooks();
  },[query]);

  const getBooks = async () => {
    const response = await fetch(`https://book-finder-backend.herokuapp.com/home/${query}`);
    const data = await response.json();
    console.log(data.books);
    setBooks(data.books)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form onSubmit={getSearch} className="App">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
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
