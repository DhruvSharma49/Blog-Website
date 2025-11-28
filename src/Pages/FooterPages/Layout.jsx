import React from "react";

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 text-lg mb-12">{subtitle}</p>
        <div className="text-left space-y-6">{children}</div>
      </div>
    </section>
  );
};

export default PageLayout;
