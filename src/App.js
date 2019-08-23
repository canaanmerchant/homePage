import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ggwash_profile from './Components/Ggwash_profile';
import Personal_blog from './Components/Personal_blog';
import Linkedin from './Components/Linkedin'
import Github from './Components/Github'
import Picture from './Components/Picture';
import {Posts} from './Components/Posts';
import Postlist from './Components/Postlist';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll'


class App extends Component {
  constructor () {
    super()
    this.state = {
      Posts: Posts,
      searchfield: ''
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=> response.json())
    .then(posts => this.setState({Posts: posts}));
}


  onSearchChange =(event) => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value })

  }
  render() {
    const {Posts, searchfield} = this.state
    const filteredPosts = Posts.filter(Post => {
      return Post.title.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log(filteredPosts);

   return (

    <div className="f1 tc">
 	<h3> This is now my home page. </h3>
       <SearchBox searchChange={this.onSearchChange}/>
       <Scroll>
         <Ggwash_profile />
         <Linkedin />
         <Github />
         <Picture />

         <h4> Latest Posts </h4>
         <Postlist Posts={filteredPosts} />

       </Scroll>
     </div>

    );
  };
}
export default App;
