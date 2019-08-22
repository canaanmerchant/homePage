import React, { Component } from 'react';
import Personal_blog from './Personal_blog';
import Posts from './Posts'

const PostList = ({ Posts }) => {
  return (
   <div>
     <Posts id={Posts.id} title={Posts.title} body={Posts.body} />
   </div>
 );
}

export default PostList;
