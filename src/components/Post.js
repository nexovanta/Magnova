import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post__header">
        <h2>{post.username}</h2>
      </div>
      <div className="post__body">
        <p>{post.content}</p>
        <img src={post.image} alt="post" />
      </div>
    </div>
  );
}

export default Post;
