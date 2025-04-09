import React, { useState, useEffect } from 'react';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url.com/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
