import React from "react";
import { FaNewspaper, FaDownload } from "react-icons/fa";

const PressKit = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex justify-center items-center px-6 py-12">
      <div className="max-w-5xl bg-white shadow-md rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <FaNewspaper className="text-blue-600 text-3xl mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Press Kit</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Welcome to the DevUI Press Center. Download official assets, logos, and media kits for use in your publications.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="border p-6 rounded-xl text-center w-full md:w-1/2 hover:shadow-md">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Brand Assets</h3>
            <p className="text-gray-600 text-sm mb-3">Includes logos, color palettes, and brand guidelines.</p>
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              <FaDownload /> Download
            </button>
          </div>
          <div className="border p-6 rounded-xl text-center w-full md:w-1/2 hover:shadow-md">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Media Kit</h3>
            <p className="text-gray-600 text-sm mb-3">Includes high-resolution product screenshots and team photos.</p>
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              <FaDownload /> Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKit;
