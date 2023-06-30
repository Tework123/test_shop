import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [message, setMessage] = useState(null);


  useEffect(() => {
    axios.get(`http://localhost:4444`).then((response) => {
      console.log(response);
      setMessage(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post('/', {
        message: 'suda naher'
      })
      .then((response) => {
        setMessage(response.data);
      });
  }

  return (
    <div className="App">
      {message}
      <button onClick={createPost}>get message</button>
    </div>
  );
}

export default App;
