import React, { useState, useEffect } from "react";
import { Container, Logo } from ".";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import appwriteService from "../Appwrite/config";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  // Search related state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Debounce ya simple effect to call search
  useEffect(() => {
    const handle = setTimeout(async () => {
      if (searchTerm.trim().length > 0) {
        try {
          const users = await appwriteService.searchUsersByName(
            searchTerm.trim()
          );
          setSearchResults(users);
          setShowDropdown(true);
        } catch (err) {
          console.error("Search error:", err);
        }
      } else {
        setSearchResults([]);
        setShowDropdown(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(handle);
  }, [searchTerm]);

  const navItems = [
    { name: "Home", slug: "/home", active: authStatus },
    { name: "Create Post", slug: "/add-post", active: authStatus },
    { name: "Profile", slug: "/profile", active: authStatus },
  ];

  return (
    <>
      <header className="bg-gray-800 text-white shadow-md">
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* LEFT: Logo */}
            <Link to="/">
              <div className="flex items-center h-12 py4">
                <Logo width="60px" />
              </div>
            </Link>

{/* MIDDLE: Search Input */}
<div className="flex justify-center flex-1">
  <div className="relative w-full max-w-[350px]">
    <input
      type="text"
      placeholder="Search users by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-5 py-2 rounded-lg text-white bg-gray-700  border border-gray-600 focus:border-blue-500 
  focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />

    {showDropdown && searchResults.length > 0 && (
      <div className="absolute bg-white text-black mt-1 w-full rounded-md shadow-lg max-h-60 overflow-auto z-50">
        {searchResults.map((user) => (
          <div
            key={user.$id}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              navigate(`/profile/${user.userid}`);
              setShowDropdown(false);
              setSearchTerm("");
            }}
          >
            {user.name}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

            {/* RIGHT: Navigation */}
            <div className="flex items-center gap-5">
              <nav className="hidden lg:flex space-x-4">
                {navItems.map(
                  (item) =>
                    item.active && (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.slug)}
                        className={`px-4 py-2 rounded-full transition text-white ${
                          window.location.pathname === item.slug
                            ? "bg-red-500"
                            : "hover:bg-blue-600"
                        }`}
                      >
                        {item.name}
                      </button>
                    )
                )}
              </nav>

              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-white/10 transition"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

export default Header;
