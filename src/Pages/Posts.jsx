import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../Appwrite/config";
import { Container } from "../Components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function Post() {
  const [post, setPost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userid === userData.$id : false;

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Fetch post data
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    }
  }, [slug, navigate]);

  // Delete post
  const deletePost = async () => {
    const status = await appwriteService.deletePost(post.$id);
    if (status) {
      await appwriteService.deleteFile(post.featuredImage);
      navigate("/");
    }
  };

  if (!post) return null;

  return (
    <Container>
      <div className="w-full mx-auto my-8 bg-gray-400 rounded-3xl shadow-xl border border-gray-200 overflow-hidden ">
        {/* IMAGE + Three-dot menu */}

        <div className="w-full relative rounded-t-3xl bg-white flex justify-center items-center">
  <img
    src={appwriteService.getFileView(post.featuredImage)}
    alt={post.title}
    className="w-full h-auto object-contain rounded-t-3xl"
  />


          {/* THREE DOT MENU */}
          {isAuthor && (
            <div className="absolute right-6 top-6 z-10" ref={menuRef}>
              <button
                className="bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <HiOutlineDotsVertical size={24} />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white shadow-xl rounded-xl p-3 text-sm font-medium border border-gray-100">
                  <Link
                    to={`/edit-post/${post.$id}`}
                    className="block p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    ✏️ Edit Post
                  </Link>
                  <button
                    className="w-full text-left p-2 rounded-lg text-red-600 hover:bg-red-100"
                    onClick={deletePost}
                  >
                    🗑 Delete Post
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CONTENT */}
        {/* <div className="p-8 md:p-10 overflow-y-auto max-h-[250px]">
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="border-b border-gray-200 mb-6"></div>
          <div className="prose prose-lg max-w-none text-gray-800">
            {parse(post.content)}
          </div>
        </div> */}


        {/* CONTENT */}
<div className="p-8 md:p-10 ">

  {/* Avatar + Username + Title block */}
  <div className="flex items-center gap-4 mb-6">
    <img
      src={
        post.users?.avatarURL
          ? appwriteService.getFileView(post.users.avatarURL)
          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
      alt="avatar"
      className="w-12 h-12 rounded-full object-cover border border-gray-300"
    />

    <div className="flex flex-col">
      <span
        onClick={() => navigate(`/profile/${post.users?.userid}`)}
        className="text-gray-900 font-semibold hover:underline cursor-pointer"
      >
        {post.users?.name || "User"}
      </span>

      <h1 className="text-xl md:text-2xl font-bold text-gray-900">
        {post.title}
      </h1>
    </div>
  </div>



  {/* Content */}
  <div className="prose prose-lg max-w-none text-gray-800">
    {parse(post.content)}
  </div>
</div>
      </div>
    </Container>
  );
}
