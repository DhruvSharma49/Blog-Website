
import { FaBolt, FaShieldAlt, FaRobot, FaUserFriends } from "react-icons/fa";

const features = [
  {
    icon: <FaUserFriends className="text-blue-600 w-10 h-10" />,
    title: "Smart Collaboration",
    desc: "Work seamlessly with your team using real-time collaboration and smart workspace syncing.",
  },
  {
    icon: <FaShieldAlt className="text-green-600 w-10 h-10" />,
    title: "Secure Platform",
    desc: "Your privacy is our priority. Advanced encryption ensures that all your data stays protected.",
  },
  {
    icon: <FaBolt className="text-yellow-500 w-10 h-10" />,
    title: "Blazing Speed",
    desc: "Experience instant response and minimal load times with our highly optimized infrastructure.",
  },
  {
    icon: <FaRobot className="text-purple-600 w-10 h-10" />,
    title: "AI Assistance",
    desc: "Let AI handle the repetitive work — from automation to insights, we’ve got it covered.",
  },
];

export default function Features() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Powerful Features That Help You Grow
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock cutting-edge tools designed to improve performance, boost productivity,
          and enhance every part of your digital workflow.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 text-center border border-gray-100"
          >
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
