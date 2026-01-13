
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import authService from "../Appwrite/auth";
import appwriteService from "../Appwrite/config";
import { Query } from "appwrite";
import PostCard from "../Components/PostCard";
import FirstPost from "../assets/FirstPost.svg";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { userId } = useParams(); // route param, may be undefined
  const [profileUser, setProfileUser] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);

      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        setLoading(false);
        return;
      }

      // Agar userId param nahi hai to current user ka profile show karo
      const profileUserId = userId || currentUser.$id;

      // Get user document by account ID
      const userDoc = await appwriteService.getUserByAccountId(profileUserId);
      if (!userDoc) {
        console.error("User profile not found for ID:", profileUserId);
        setLoading(false);
        return;
      }
      setProfileUser(userDoc);

      // ✅ Avatar and Cover
      if (userDoc.avatarURL) setAvatarUrl(appwriteService.getFileView(userDoc.avatarURL));
      else if (userDoc.avatar) setAvatarUrl(appwriteService.getFileView(userDoc.avatar));

      if (userDoc.coverURL) setCoverUrl(appwriteService.getFileView(userDoc.coverURL));
      else if (userDoc.cover) setCoverUrl(appwriteService.getFileView(userDoc.cover));

      // ✅ Posts
      let query = [Query.equal("userid", userDoc.userid)];
      const ownProfile = currentUser.$id === userDoc.userid;
      if (!ownProfile) query.push(Query.equal("status", "public"));
      setIsOwnProfile(ownProfile);

      const res = await appwriteService.getPosts(query);
      setPosts(res.documents || []);

      setLoading(false);
    }

    loadProfile();
  }, [userId]);

  if (!profileUser) return <div className="text-center py-6 text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Cover */}
      <div className="relative w-full h-52 md:h-64 rounded-xl overflow-hidden">
        {coverUrl ? (
          <img src={coverUrl} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
      </div>

      {/* Avatar + Name + Bio */}
      <div className="relative -mt-20 flex flex-col items-start mb-6 pl-4 space-y-3">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200 z-20">
          <img
            src={avatarUrl || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            className="w-full h-full object-cover"
            alt="User Avatar"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          {profileUser.name || profileUser.authorName || "User"}
        </h2>

        {profileUser.bio && <p className="text-black bold">{profileUser.bio}</p>}

        {isOwnProfile && (
          <button
            onClick={() => navigate("/profile/edit")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-700 duration-200"
          >
            <FaPencilAlt /> Edit Profile
          </button>
        )}
      </div>

      <hr className="my-10 border-gray-300 dark:border-gray-700" />

      {/* Posts Section */}
      <div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-300 animate-pulse h-64 rounded-xl" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-12">
            <img src={FirstPost} alt="No posts yet" className="w-150 mx-auto object-contain" />
            {isOwnProfile && (
              <button
                onClick={() => navigate("/add-post")}
                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition duration-200"
              >
                Create your first post
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
