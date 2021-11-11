import './App.css';
import React, { useState } from "react";
import sok from './searchpic.png';
import {app,db} from "./firebase.js";
import { collection, getDocs } from 'firebase/firestore/lite';

async function getStores(db) {
  const storesCol = collection(db, 'Stores');
  const storeSnapshot = await getDocs(storesCol);
  const storeList = storeSnapshot.docs.map(doc => doc.data());
  return storeList;
}

function App() {

  //håll textrutan uppdaterad
  const [text1, setText] = useState("");
  const [stores,setstores]=useState([]);

  //const ref = firebase.firestore().collection("Stores");
  const ref =getStores(db);
  console.log(ref);

  function changeInput(event) {
    setText(event.target.value);
  }

  //<img src={sok} alt="fel"/>
  
  return (
    <div className="App">
      <header>
     Butiker 
      </header>
      {ref.map((sto)=>(
        <h2>{sto}</h2>
        ))}

      <div >
      <input onChange={changeInput}  placeholder='Sök efter matbutiker...' style={{height:30, width:300, margin:10}}/>
      <img src={sok} alt="fel"/></div>
      <h1>Vill du handla mat till bra priser och värna om miljön?</h1>
      <h2> Ta en titt på matbutikerna nedanför! </h2>
     
      </div>
  
  );
}

export default App;
