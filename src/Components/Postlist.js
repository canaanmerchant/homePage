import React, { Component } from 'react';
import Personal_blog from './Personal_blog';
import Posts from './Posts'

{/*const Postlist = ({ Posts }) => {
  const postComponent = Posts.map((Posts, i) => {
    return <Posts id={Posts[i].id} title={Posts[i].title} content={Posts[i].content}/>
  })

    return (
      <div>
        {postComponent}
      </div>
      );
    } */}





const Postlist = ({ Posts }) => {
  return (
    <div>
      {
        Posts.map((id, i) => {
          return (
            <Personal_blog
              key={i}
              id={Posts[i].id}
              title={Posts[i].title}
              content={Posts[i].content}
              />
          );
        })
      }
    </div>
  );
}

export default Postlist;
