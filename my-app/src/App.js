import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ggwash_profile from './Components/Ggwash_profile';

class App extends Component {
  render() {
   return (
    <div classname="App">
 	<h3> This is now my home page. </h3>
     <Ggwash_profile />
     </div>

    );
  };
}
export default App;
