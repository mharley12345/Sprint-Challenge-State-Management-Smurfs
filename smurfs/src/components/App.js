import React  from "react";
import "./App.css";
import SmurfsGet from "./SmurfsGet";
import SmurfsAddForm from "./SmurfsAddForm";
import SmurfsList from "./SmurfsList";


const  App = () =>{

    return (
      <div className="App">
    
      
    
        <SmurfsList />
        <SmurfsGet />
        <SmurfsAddForm />
      </div>
    );
  }


export default App;