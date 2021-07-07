
import './App.css';
import React,{useEffect,useState} from "react";
import Books from './books';
import headCus from './header.module.css'

import Nav from './Nav'
import About from './About'
import Upload from './Upload';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const Home = () => {


  const [books, setBooks]=useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('harry')

  useEffect(() => {
    console.log("effect has been run");
    getBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);

  const getBooks = async () => {
    const response = await fetch(`http://65.1.85.212:5000/home/${query}`);
    const data = await response.json();
    console.log(data.books);
    setBooks(data.books)
  }

  const updateSearch = e => {
    console.log("updateSearch  called")
    setSearch(e.target.value);
  }

  const convertSpaces = (name) => {
    var myStr = name;
    var newStr = myStr.replace(/ /g, "+");

    return newStr;
  }

  const getSearch = e => {
    console.log("getSearch  called")
    e.preventDefault();
    console.log("search is "+search)
    //change spaces to +
    const name = convertSpaces(search);
    setQuery(name);
    setSearch('')
  }

  return (
    <div className="App">

      <h1 className="info">Welcome</h1>
      <h1 className="info">Book Lover</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">submit</button>
      </form>
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

const App =() => (
  <div className="App">  
        <Router>
          <Nav/>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/upload" component={Upload} />
          </Switch>
        </Router>
        
  </div>
)


export default App;
