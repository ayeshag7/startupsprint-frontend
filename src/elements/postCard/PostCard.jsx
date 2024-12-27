import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';  // Import icons for like, comment, and share

function Post({ user, userImage, postImage, content }) {
  const [isLiked, setIsLiked] = useState(false);  // Track like state
  const [showFullText, setShowFullText] = useState(false);  // Toggle caption text

  const toggleLike = () => {
    setIsLiked(!isLiked);  // Toggle like state
  };

  const toggleText = () => {
    setShowFullText(!showFullText);  // Toggle between full text and truncated text
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm max-w-xl mx-auto bg-white">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <img src={userImage} alt={user} className="w-10 h-10 rounded-full" />
        <span className="font-semibold text-lg">{user}</span>
      </div>

      {/* Post Image */}
      <img src={postImage} alt="Post" className="w-full h-auto mb-4 rounded-lg" />

      {/* Like, Comment, Share Options */}
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center cursor-pointer" onClick={toggleLike}>
          <FaHeart className={`text-2xl ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
          <span className="ml-2 text-sm">{isLiked ? 'Liked' : 'Like'}</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FaComment className="text-2xl text-gray-500" />
          <span className="ml-2 text-sm">Comment</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FaShare className="text-2xl text-gray-500" />
          <span className="ml-2 text-sm">Share</span>
        </div>
      </div>

      {/* Caption */}
      <div className="text-gray-700">
        <p className={`text-sm ${showFullText ? '' : 'line-clamp-1'}`}>
          {content}
        </p>
        <button 
          className="text-blue-500 text-sm mt-2"
          onClick={toggleText}
        >
          {showFullText ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
}

export default Post;
