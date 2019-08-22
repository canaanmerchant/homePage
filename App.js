import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ggwash_profile from './Components/Ggwash_profile';
import Personal_blog from './Components/Personal_blog';
import Linkedin from './Components/Linkedin'
import Github from './Components/Github'
import Picture from './Components/Picture';

class App extends Component {
  render() {
   return (

    <div class="f1 tc">
 	<h3> This is now my home page. </h3>
     <Ggwash_profile />
     <Personal_blog />
     <Linkedin />
     <Github />
     <Picture />
     </div>

    );
  };
}
export default App;
