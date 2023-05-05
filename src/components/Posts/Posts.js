import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
