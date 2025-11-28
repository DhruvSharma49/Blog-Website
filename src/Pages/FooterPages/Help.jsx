// src/pages/HelpPage.jsx
import React, { useState } from "react";
import { faqData } from "../../Data/faqdata";

const HelpPage = () => {
  const [search, setSearch] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("account");

  const faqs = faqData[selectedCategory] || [];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Help & Support</h1>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setExpandedIndex(null);
              setSearch("");
            }}
            className={`px-4 py-2 rounded-md font-medium capitalize ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search help topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-lg mb-6 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      />

      {/* FAQ list */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-md shadow-md">
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
            >
              <span className="text-gray-800 font-medium">{faq.question}</span>
              <span className="text-gray-600">
                {expandedIndex === index ? "-" : "+"}
              </span>
            </button>
            {expandedIndex === index && (
              <div className="px-4 py-3 border-t border-gray-200 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <p className="text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default HelpPage;
