import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../Components";
import appwriteService from "../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      status: post?.status || "public",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const [previewImage, setPreviewImage] = useState(post?.featuredImage || null);
  const [loading, setLoading] = useState(false);

  const submit = async (data) => {
    if (!userData?.$id) {
      alert("Please login first!");
      return;
    }

    try {
      setLoading(true);

      // Ensure user document exists
      let userDoc = await appwriteService.getUserByAccountId(userData.$id);
      if (!userDoc) {
        userDoc = await appwriteService.createUserDoc({
          userid: userData.$id,
          name: userData.name || "User",
          bio: "",
          avatarURL: "",
          coverURL: "",
        });
      }

      // ------------ UPDATE POST ------------
      if (post) {
        const file = data.image?.[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;

        if (file && post.featuredImage) {
          await appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }

      // ------------ CREATE POST ------------
      else {
        const file = data.image?.[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;

        if (!file) {
          alert("Please upload a featured image!");
          setLoading(false);
          return;
        }

        data.featuredImage = file.$id;

        const dbPost = await appwriteService.createPost({
          ...data,
          userid: userData.$id,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex flex-col lg:flex-row gap-6 p-6 bg-gradient-to-br from-gray-50 to-gray-200 shadow-xl rounded-2xl backdrop-blur-lg border border-gray-200"
    >
      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col space-y-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {post ? "Edit Post" : "Create New Post"}
        </h2>

        <Input
          label="Title"
          placeholder="Enter your post title"
          className="mb-4"
          {...register("title", { required: true })}
        />

        {/* ❌ SLUG FIELD REMOVED COMPLETELY */}

        <RTE
          label="Post Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/3 flex flex-col bg-white/70 border border-gray-200 rounded-2xl shadow-md p-5 space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Featured Image
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: !post })}
            className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-3 
                      file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={(e) => {
              if (e.target.files[0]) {
                setPreviewImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </div>

        {previewImage && (
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={previewImage}
              alt="Preview"
              className="rounded-xl w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <Select
          options={["public", "private"]}
          label="Post Visibility"
          className="mb-4"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 rounded-xl font-medium transition-colors duration-300 ${
            post
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Please wait..." : post ? "Update Post" : "Publish Post"}
        </Button>
      </div>
    </form>
  );
}
