import React, { useState } from "react";
import { usePostContext } from "../../context/PostContext";
import { useUserContext } from "../../context/UserContext";
import DeletePostModal from "../../modal/DeletePostModal";
import '../post/Post.css'

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dispatch } = usePostContext();
  const { user } = useUserContext();

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
      dispatch({ type: "DELETE_POST", payload: post.id });
      closeModal();
  };

  return (
    <div className="post">
      <p>{post.title}</p>
      {user && <button onClick={openModal}>Delete</button>}

      {isModalOpen && (
        <DeletePostModal
          post={post}
          onDelete={handleDelete}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Post;
