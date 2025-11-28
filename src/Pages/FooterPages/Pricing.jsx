import React from "react";
import { FaCrown, FaGem, FaRocket } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      icon: <FaRocket className="text-3xl text-amber-600" />,
      title: "Starter",
      price: "₹0",
      features: ["Basic tools", "Community support", "Limited storage"],
    },
    {
      icon: <FaGem className="text-3xl text-amber-600" />,
      title: "Pro",
      price: "₹499/month",
      features: ["All basic features", "Priority support", "Custom branding"],
    },
    {
      icon: <FaCrown className="text-3xl text-amber-600" />,
      title: "Enterprise",
      price: "₹1,999/month",
      features: ["Unlimited access", "Dedicated support", "Team collaboration"],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Pricing Plans</h1>
        <p className="text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          Choose a plan that fits your needs. Upgrade anytime as your business grows.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-gray-100"
            >
              <div className="flex flex-col items-center space-y-4">
                {plan.icon}
                <h3 className="text-2xl font-semibold text-gray-800">{plan.title}</h3>
                <p className="text-3xl font-bold text-amber-600">{plan.price}</p>
                <ul className="text-gray-600 space-y-2 mt-4">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
