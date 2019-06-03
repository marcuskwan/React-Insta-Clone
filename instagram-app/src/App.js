import React from ‘react’;
import logo from ‘./logo.svg’;
import ‘./App.css’;
import dummyData from ‘./dummy-data’;
import PostContainer from “./components/PostContainer/PostContainer”;
import SearchBar from “./components/SearchBar/SearchBar”;

class App extends React.Component {
 constructor(){
 super();
 this.state = {
   postArray: dummyData

 }
}
 render(){
 return (
   <div className=“App”>
     <header className=“App-header”>
       <img src={logo} className=“App-logo” alt=“logo” />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className=“App-link”
         href=“https://reactjs.org”
         target=“_blank”
         rel=“noopener noreferrer”
       >
         Learn React
       </a>
     </header>
     <div className = “Search-bar”>
       <SearchBar />
     </div>

     <div className = “Post-container”>
       <PostContainer postArray = {this.state.postArray} />
     </div>
   </div>
 );
 }
}

export default App;
