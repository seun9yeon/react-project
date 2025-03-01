import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <h2>posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`} state={{ post }}>
                <h3>{post.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
