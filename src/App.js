import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Button } from '@material-ui/core';

let Jokes = 'http://api.icndb.com/jokes/random';

function App() {

  const [joke, setJoke] = useState("");

  const show = () => {
    axios.get(Jokes).
      then(res => {
        const item = res.data;
        setJoke(item.value.joke);
    });
  }

  useEffect(()=>{
    show();
  }, []);

  return (
    <div className="App">
      <div className="container bg">
        <div className="box">
          <h3>Chuck Norris Jokes Generator</h3>
          <p dangerouslySetInnerHTML={{__html: joke}}></p>
          <Button onClick = {show} variant="contained" color="primary">Get new jokes 😂</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
