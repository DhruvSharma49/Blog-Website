import React from "react";
import { FaHeadset, FaUserShield, FaClock } from "react-icons/fa";

export default function CustomerSupport() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <FaHeadset className="text-blue-600 text-5xl mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Support</h1>
        <p className="text-gray-600 mb-10">
          Our dedicated team is available 24/7 to assist you with any issues or queries.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-8 rounded-2xl">
            <FaUserShield className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Account Safety</h3>
            <p className="text-gray-600">We ensure your account stays secure and protected from unauthorized access.</p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-2xl">
            <FaClock className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-600">Get round-the-clock assistance through email or live chat support.</p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-2xl">
            <FaHeadset className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
            <p className="text-gray-600">Chat instantly with our support agents for quick resolutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
