import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {


  const [data, setdata] = useState({
  Name: "",
  Time: "",});

  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
      setdata({
      name: data.Name,
      time: data.Time,
      })
      },
    ));
  }, []);


  return (
    <div className="App">
        <header className='App-header'>
          <h1> HELLO </h1>
          {}
          <p>{data.name}</p>
          <p>{data.time}</p>
        </header>
    </div>
  );
}

export default App;
