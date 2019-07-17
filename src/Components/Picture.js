import React, { Component } from 'react';
import picture from './picture.jpg';

class Picture extends Component {
render () {
return (
      <div className = "tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 ">
          <img src = "https://robohash.org/asdfjk;?set=set4" alt="picture"/>
      </div>
   );
 };
}
export default Picture;
