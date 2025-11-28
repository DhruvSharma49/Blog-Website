// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../Appwrite/config";
// import { Client, ID } from "appwrite";
// import { useSelector } from "react-redux";

// export default function EditProfilePage() {
//   const navigate = useNavigate();
//   const currentUser = useSelector((state) => state.auth.userData);
//   const { userId } = useParams(); // agar tum apni ya kisi aur ki profile edit karna chaho

//   const [userDoc, setUserDoc] = useState(null);
//   const [name, setName] = useState("");
//   const [avatarFile, setAvatarFile] = useState(null);
//   const [coverFile, setCoverFile] = useState(null);
//   const [avatarUrl, setAvatarUrl] = useState(null);
//   const [coverUrl, setCoverUrl] = useState(null);

//   useEffect(() => {
//     const loadUserDoc = async () => {
//       const profileUserId = userId || currentUser?.$id;
//       if (!profileUserId) return;

//       const doc = await appwriteService.getUserByAccountId(profileUserId);
//       if (!doc) {
//         console.error("User doc not found!");
//         return;
//       }
//       setUserDoc(doc);
//       setName(doc.name || "");

//       if (doc.avatarURL) {
//         setAvatarUrl(await appwriteService.getFileView(doc.avatarURL));
//       }
//       if (doc.coverURL) {
//         setCoverUrl(await appwriteService.getFileView(doc.coverURL));
//       }
//     };

//     loadUserDoc();
//   }, [currentUser, userId]);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAvatarFile(file);
//       setAvatarUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleCoverChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setCoverFile(file);
//       setCoverUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSaveProfile = async () => {
//     try {
//       if (!userDoc) return;

//       const updates = {};
//       updates.name = name;

//       if (avatarFile) {
//         const file = await appwriteService.uploadFile(avatarFile);
//         updates.avatarURL = file.$id;
//       }

//       if (coverFile) {
//         const file2 = await appwriteService.uploadFile(coverFile);
//         updates.coverURL = file2.$id;
//       }

//       await appwriteService.updateUserDoc(userDoc.$id, updates);

//       alert("Profile Updated ✅");
//       navigate("/profile");
//     } catch (error) {
//       console.error("Error while saving profile:", error);
//       alert("Failed to update profile: " + error.message);
//     }
//   };

//   if (!userDoc) {
//     return <div className="text-center py-6">Loading...</div>;
//   }

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center p-6">
//       <div className="bg-gray-300 shadow-lg rounded-2xl w-full max-w-2xl overflow-hidden">
//         {/* Cover */}
//         <div className="relative h-40 bg-gray-200">
//           {coverUrl && (
//             <img src={coverUrl} className="w-full h-full object-cover" />
//           )}
//           <label className="absolute bottom-2 right-2 cursor-pointer bg-blue-600 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-700">
//             Change Cover
//             <input
//               type="file"
//               onChange={handleCoverChange}
//               className="hidden"
//               accept="image/*"
//             />
//           </label>
//         </div>

//         {/* Avatar */}
//         <div className="flex justify-center -mt-16">
//           <div className="relative">
//             <img
//               src={
//                 avatarUrl ||
//                 "https://cdn-icons-png.flaticon.com/512/149/149071.png"
//               }
//               className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
//             />
//             <label className="absolute bottom-0 right-0 cursor-pointer bg-blue-600 text-white px-2 py-1 text-xs rounded-md hover:bg-blue-700">
//               Edit
//               <input
//                 type="file"
//                 onChange={handleAvatarChange}
//                 className="hidden"
//                 accept="image/*"
//               />
//             </label>
//           </div>
//         </div>

//         {/* Name Field */}
//         <div className="p-6 space-y-4">
//           <div>
//             <label className="text-gray-700 font-medium">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             onClick={handleSaveProfile}
//             className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../Appwrite/config";
import { useSelector } from "react-redux";

export default function EditProfilePage() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.userData);
  const { userId } = useParams();
  const [userDoc, setUserDoc] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState(""); // **Bio state**
  const [avatarFile, setAvatarFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);

  useEffect(() => {
    const loadUserDoc = async () => {
      const profileUserId = userId || currentUser?.$id;
      if (!profileUserId) return;

      const doc = await appwriteService.getUserByAccountId(profileUserId);
      if (!doc) {
        console.error("User doc not found!");
        return;
      }
      setUserDoc(doc);
      setName(doc.name || "");
      setBio(doc.bio || ""); // **Set bio from doc**

      if (doc.avatarURL) {
        setAvatarUrl(await appwriteService.getFileView(doc.avatarURL));
      }
      if (doc.coverURL) {
        setCoverUrl(await appwriteService.getFileView(doc.coverURL));
      }
    };

    loadUserDoc();
  }, [currentUser, userId]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverFile(file);
      setCoverUrl(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = async () => {
    try {
      if (!userDoc) return;

      const updates = { name, bio }; // **Include bio in update**

      if (avatarFile) {
        const file = await appwriteService.uploadFile(avatarFile);
        updates.avatarURL = file.$id;
      }

      if (coverFile) {
        const file2 = await appwriteService.uploadFile(coverFile);
        updates.coverURL = file2.$id;
      }

      await appwriteService.updateUserDoc(userDoc.$id, updates);

      alert("Profile Updated ✅");
      navigate("/profile");
    } catch (error) {
      console.error("Error while saving profile:", error);
      alert("Failed to update profile: " + error.message);
    }
  };

  if (!userDoc) {
    return <div className="text-center py-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Cover + Avatar */}
      <div className="relative w-full h-48 bg-gray-200 shadow-md">
        {coverUrl && (
          <img
            src={coverUrl}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        )}
        <label className="absolute bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition-shadow shadow">
          Change Cover
          <input
            type="file"
            onChange={handleCoverChange}
            className="hidden"
            accept="image/*"
          />
        </label>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
          {/* <div className="relative w-32 h-32 rounded-full ring-4 ring-white bg-white shadow-lg overflow-hidden">
            <img
              src={
                avatarUrl ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Avatar"
              className="w-full h-full object-cover"
            />
            <label className="absolute bottom-1 right-1 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-indigo-700 transition z-1000">
              ✎
              <input
                type="file"
                onChange={handleAvatarChange}
                className="hidden"
                accept="image/*"
              />
            </label>
          </div> */}

          <div className="relative w-32 h-32 rounded-full shadow-lg ring-4 ring-white overflow-visible">
            <img
              src={
                avatarUrl ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              className="w-full h-full rounded-full object-cover"
            />

            <label
              className="absolute bottom-1 right-1 p-1 bg-indigo-600
    rounded-full cursor-pointer shadow-lg hover:scale-105 transition z-[9999]"
            >
              ✎
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="flex-1 p-6 mt-16 sm:mt-20 lg:mt-24">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Bio Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
              placeholder="Write something about yourself..."
            />
          </div>

          <button
            onClick={handleSaveProfile}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-shadow shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
