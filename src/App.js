import './App.css';
import List from './List';
import React, { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [elementValue, setElementValue] = useState("");

  const addElement = () => {
    if (elementValue.trim() === "") {
      alert("Input need to be filled!");
    }
    else {
      setList([...list, elementValue]);
      document.querySelector(".input-box").value = "";
      setElementValue("");
    }
  }

  const deleteElement = () => {

  }

  return (
    <div className="App">

      <form className='form'>
        <input type="text" onChange={(e) => setElementValue(e.target.value)} className='input-box' placeholder='Enter your name' />
        <input className='add-element-btn' type="button" value="Add" onClick={() => addElement()} />
      </form>

      <hr className='horizontal-ruler' />

      <List
        list={list}
      />

    </div>
  );
}

export default App;
