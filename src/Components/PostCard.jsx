

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import appwriteService from "../Appwrite/config";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";

function PostCard({ $id, title, featuredImage, users, parentUsers }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.userData);
  const username = users?.name || "User";
  const profileId = users?.userid;
  const avatarUrl = users?.avatarURL
    ? appwriteService.getFileView(users.avatarURL)
    : null;

  const isAuthor = currentUser?.$id === profileId;

  return (
     <div className="bg-black w-full max-w-[310px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative">
      {/* Top bar */}
      <div className="flex items-center justify-between p-3">
        <button
          className="flex items-center space-x-2"
          onClick={() => navigate(`/profile/${profileId}`)}
        >
          <img
            src={avatarUrl || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="avatar"
            className="w-7 h-7 rounded-full object-cover border border-gray-400"
          />
          <span className="text-sm font-medium text-white">{username}</span>
        </button>

        {isAuthor && (
          <button
            className="text-white p-1"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            <HiOutlineDotsVertical size={22} />
          </button>
        )}
      </div>

      {/* Image */}
      {featuredImage && (
        <Link to={`/post/${$id}`}>
          <div className="w-full h-59 bg-gray-200 overflow-hidden">
            <img
              src={appwriteService.getFileView(featuredImage)}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      )}

      {/* Title */}
      <div className="p-1">
        <h2 className="text-lg font-semibold text-white line-clamp-2">{title}</h2>
      </div>

      {/* Dropdown */}
      {menuOpen && isAuthor && (
        <div className="absolute top-10 right-3 bg-white shadow-xl rounded-lg overflow-hidden z-20">
          <button
            className="px-4 py-2 hover:bg-gray-100 w-full text-left"
            onClick={() => navigate(`/edit-post/${$id}`)}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 hover:bg-red-100 text-red-600 w-full text-left"
            onClick={() => navigate(`/post/${$id}`)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default PostCard;
