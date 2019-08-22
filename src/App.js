import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Ggwash_profile from './Components/Ggwash_profile';
import Personal_blog from './Components/Personal_blog';
import Linkedin from './Components/Linkedin';
import Github from './Components/Github';
import Picture from './Components/Picture';
import PostList from './Components/PostList';




class App extends Component {
  render() {
   return (
     /*<p>
           This is a <a href="#" id="TooltipExample">tooltip</a> example.
           <Tooltip target="TooltipExample">
             <TooltipContent/>
           </Tooltip>
         </p> */
    <div class="f1 tc">
 	<h3> This is now my home page. </h3>
     <Ggwash_profile />
     <PostList />
     <Linkedin />
     <Github />
     <Picture />
     </div>

    );
  };
}
export default App;
