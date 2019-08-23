import React, { Component } from 'react';
import {Posts} from './Posts';


//class Personal_blog extends Component {
 //render () {
  //return (
  //    <div class= "f3 tc">
 	//<h4> {props.title} </h4>
  //<h5> {props.content} </h5>
  //   </div>
  //);
 //};
//}


// large const list of blog posts as they get written.


const Personal_blog = ({title, content}) => {

  return (
      <div className= "tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
 	<h4> {title} </h4>
  <p> {content} </p>
  {/*<p> {id} </p> */}
     </div>
  );
}

export default Personal_blog;
