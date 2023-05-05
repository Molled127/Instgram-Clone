import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Posts from './Posts';

const Post = (props) => {
  const { post } = props;
  const [likes, setLikes] = useState(Posts.likes);
 
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className='post-border'>
      <PostHeader username={Post.username} thumbnailUrl={Post.thumbnailUrl} />
      <div className='post-image-wrapper'>
        <img alt='post thumbnail' className='post-image' src={Post.imageUrl} />
      </div>
      <LikeSection incrementLikes={incrementLikes} numberOfLikes={likes} />
      <Comments comments={Post.comments} />
    </div>
  );
};

export default Post;
