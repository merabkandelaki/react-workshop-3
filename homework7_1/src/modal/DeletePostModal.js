import React from "react";
import "../modal/DeletePostModal.css";

const DeletePostModal = ({ onDelete, onClose }) => {
  return (
    <div className="delete-modal">
      <p>Are you sure you want to delete this post?</p>
      <div className="buttons">
        <button className="delete" onClick={onDelete}>Yes</button>
        <button className="close" onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export default DeletePostModal;
