import React, { Component } from 'react';
import Content1 from "./Content/Section1"
import Content2 from "./Content/Section2"
import Content3 from "./Content/Section3"
import Content4 from "./Content/Section4"
import './App.css';

class App extends Component {

  render(){
  // const PageLayout= () =>{
  //   let content = "";
  //   for (let i = 0; i < 4; i++) {
  //     document +="<section className=Content"+{i}+"></section>"
  //   }
      
    //   return content
    // }

    return(
      <div className="GrandContainer">
        <Content1/>
        <Content2/>
        <Content3/>
        <Content4/>
      </div>)
  }
}

export default App;
