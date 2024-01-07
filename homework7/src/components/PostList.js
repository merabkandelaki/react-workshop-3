import React from "react";

const PostList = ({ posts, openModal }) => {
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          <span>{post.title}</span>
          <button onClick={() => openModal(post)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default PostList;
