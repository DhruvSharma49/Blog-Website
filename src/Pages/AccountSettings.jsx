import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaKey } from "react-icons/fa";
import authService from "../Appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function AccountSettings() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    async function loadUser() {
      const user = await authService.getCurrentUser();
      setCurrentUser(user);
    }
    loadUser();
  }, []);

  const onChangePassword = async (data) => {
    try {
      setMessage(null);
      await authService.account.updatePassword(data.oldPassword, data.newPassword);
      setMessage({ type: "success", text: "Password changed successfully." });
    } catch (error) {
      console.error("Password change error:", error);
      setMessage({ type: "error", text: "Failed to change password. " + error.message });
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setIsDeleting(true);
      await authService.deleteAccount();
      await authService.logout();
      navigate("/");
    } catch (error) {
      console.error("Delete account error:", error);
      setMessage({ type: "error", text: "Could not delete account: " + error.message });
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>

        {currentUser && (
          <div className="mb-6 space-y-2">
            <p className="text-gray-700">
              <strong>Name:</strong> {currentUser.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {currentUser.email}
            </p>
          </div>
        )}

        {message && (
          <div
            className={`p-3 mb-5 rounded ${
              message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Change Password */}
        <div className="mb-8">
          <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
            <FaKey className="mr-2 text-blue-600" /> Change Password
          </h3>
          <form onSubmit={handleSubmit(onChangePassword)} className="space-y-4">
            <div>
              <label className="block text-gray-700">Old Password</label>
              <input
                type="password"
                {...register("oldPassword", { required: "Old password is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.oldPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.oldPassword.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                {...register("newPassword", {
                  required: "New password required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.newPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.newPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              {isSubmitting ? "Saving…" : "Save Password"}
            </button>
          </form>
        </div>

        {/* Delete Account */}
        <div>
          <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
            <FaTrashAlt className="mr-2 text-red-600" /> Delete Account
          </h3>
          <p className="text-gray-600 mb-4">
            Deleting your account will permanently erase all your data. This action cannot be undone.
          </p>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
          >
            Delete My Account
          </button>
        </div>

        {showDeleteConfirm && (
          <div className="mt-6 p-4 bg-gray-50 border border-red-200 rounded-lg space-y-4">
            <p className="text-gray-800">Are you sure you want to delete your account?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting…" : "Yes, Delete"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}