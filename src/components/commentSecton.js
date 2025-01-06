"use client"; // Client-side rendering for React state
import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Tracks the comment being edited
  const [editComment, setEditComment] = useState(""); // Tracks the value of the comment being edited

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    setComments([...comments, newComment]);
    setNewComment("");
  };

  // Function to delete a comment by index
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  // Function to enable editing mode
  const handleEditComment = (index) => {
    setEditIndex(index);
    setEditComment(comments[index]);
  };

  // Function to save the edited comment
  const handleSaveEditComment = () => {
    if (editComment.trim() === "") return;

    const updatedComments = [...comments];
    updatedComments[editIndex] = editComment;

    setComments(updatedComments);
    setEditIndex(null);
    setEditComment("");
  };

  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {/* Display Comments */}
      <div className="mb-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg mb-2 shadow-sm flex justify-between items-center"
            >
              {editIndex === index ? (
                // Edit Mode
                <input
                  type="text"
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  className="w-full border p-2 rounded-lg mr-2"
                />
              ) : (
                // Display Comment
                <span>{comment}</span>
              )}
              <div className="flex space-x-2">
                {editIndex === index ? (
                  <button
                    onClick={handleSaveEditComment}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditComment(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Add Your Comment!</p>
        )}
      </div>

      {/* Add Comment Form */}
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment here..."
        className="w-full border p-2 rounded-lg mb-4 shadow-blue-600 shadow-lg"
        rows="4"
      ></textarea>
      <button
        onClick={handleAddComment}
        className="bg-blue-800 shadow-lg shadow-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentSection;
