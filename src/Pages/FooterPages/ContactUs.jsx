import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12">
          We'd love to hear from you. Get in touch with our team for any queries or feedback.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <FaEnvelope className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">support@devui.com</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <FaPhoneAlt className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 Tech Park, Bangalore, India</p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 shadow-lg rounded-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Send a Message</h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <textarea placeholder="Your Message" rows="4" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
