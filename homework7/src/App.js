import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res
        .json()
        .then((data) => setPosts(data))
        .catch((err) => {
          console.log(err);
        })
    );
  };
  console.log(posts);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  const handleDeletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== selectedPost.id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
    closeModal();
  };

  return (
    <div className="container">
      <h1>Users Posts</h1>
      <PostList posts={posts} openModal={openModal} />

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="modal">
            <p>Are you sure you want to delete this post?</p>
            <div className="modal-buttons">
              <button className="delete" onClick={handleDeletePost}>
                Yes
              </button>
              <button className="close" onClick={closeModal}>
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
