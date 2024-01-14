import React, { useEffect } from "react";
import axios from "axios";
import { usePostContext } from "../../context/PostContext";
import Post from "../post/Post";
import "../postlist/PostList.css";

const PostList = () => {
  const { posts, dispatch } = usePostContext();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch({ type: "SET_POSTS", payload: response.data });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="posts">
      <h1>Posts Users</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PostList;
