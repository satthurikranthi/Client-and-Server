import { useState } from "react"

import './App.css';

function App() {


  let [actors, setactors] = useState([]);
  let [dancers, setDancers] = useState([]);

  let getetactorsFromServer = async () => {

    let reqOptions = {
      method: "GET"
    }

    let JSONData = await fetch("http://localhost:1586/HerosNames", reqOptions);

    let JSOData = await JSONData.json();
    setactors(JSOData);
    console.log(JSOData);
  }

  let getdancersFromServer=async()=>{
      let reqOptions={
        method:"GET"
      }
      let JSONData = await fetch("http://localhost:1586/dancersName", reqOptions);

    let JSOData = await JSONData.json();
    setDancers(JSOData);
    console.log(JSOData);
  }


return (
  <div className="App">
    <button onClick={()=>{
      getetactorsFromServer();
    }}>Get Actors</button>
      {actors.map((ele,i) => (
        <h1 key={i}>{ele}</h1>
      ))} 

    <button onClick={()=>{
      getdancersFromServer();
    }}>Dancers</button>  
    {dancers.map((ele,i)=>(
       <h1 key={i}>{ele}</h1>
    ))}
  </div>
);
}

export default App;
