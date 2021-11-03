import './App.css';
import React, { useState } from "react";
import sok from './searchpic.png';

function App() {

  //håll textrutan uppdaterad
  const [text1, setText] = useState("");

  function changeInput(event) {
    setText(event.target.value);
  }

  //<img src={sok} alt="fel"/>
  
  return (
    <div className="App">
      <header>
     Butiker 
      </header>
      <div >
     
      <input onChange={changeInput}  placeholder='Sök efter matbutiker...' style={{height:30, width:300, margin:10}}/>
      <img src={sok} alt="fel"/></div>
      <h1>Vill du handla mat till bra priser och värna om miljön?</h1>
      <h2> Ta en titt på matbutikerna nedanför! </h2>
     
      </div>
  
  );
}

export default App;
