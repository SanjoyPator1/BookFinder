
import './App.css';
import React,{useEffect,useState} from "react";

const App = () => {

  //const exampleReq = `http://127.0.0.1:5000/`

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect has been run");
    getBooks();
  },[counter]);

  const getBooks = async () => {
    const response = await fetch(`https://reqres.in/api/products/3`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="App">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">submit</button>
      </form>
      <h1 onClick={()=>{setCounter(counter+1)}}>{counter}</h1>
    </div>
  );
}

export default App;
