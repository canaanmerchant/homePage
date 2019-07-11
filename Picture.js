import React, { Component } from 'react';
import picture from './picture.jpg';

class Picture extends Component {
render () {
return (
      <div class = "tl">
          <img src = "{picture}"/>;
      </div>
   );
 };
}
export default Picture;
