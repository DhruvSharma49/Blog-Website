import React from "react";
import { FaFileContract } from "react-icons/fa";

export default function Licensing() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12 flex justify-center">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-10">
        <div className="flex items-center mb-8">
          <FaFileContract className="text-blue-600 text-4xl mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Licensing Agreement</h1>
        </div>

        <p className="text-gray-700 mb-6">
          Effective Date: <strong>August 30, 2025</strong><br />
          This Licensing Agreement (“Agreement”) is between DevUI (“Licensor”) and you (“Licensee”). By using our licensed assets or software, you agree to the following terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">1. Grant of License</h2>
        <p className="text-gray-700 mb-4">
          Licensor hereby grants Licensee a non-exclusive, non-transferable license to use the Licensed Materials solely in accordance with the terms of this Agreement. The license is limited to the territories and purposes defined here.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">2. Permitted Uses</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Use the web applications, libraries or assets for internal business operations.</li>
          <li>Embed the licensed brand assets in marketing materials with attribution to DevUI.</li>
          <li>Distribute user-facing applications that integrate our licensed software, subject to royalty terms.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">3. Restrictions</h2>
        <p className="text-gray-700 mb-4">
          Licensee shall not sublicense, modify the Licensed Materials for resale, reverse engineer, or remove copyright or trademark notices. Any misuse will result in immediate termination of this license.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">4. Fees &amp; Royalties</h2>
        <p className="text-gray-700 mb-4">
          Licensee agrees to pay the applicable fees and ongoing royalties as set forth in the Statement of Work or fee schedule. All payments are due within 30 days of invoice unless otherwise agreed in writing.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">5. Term &amp; Termination</h2>
        <p className="text-gray-700 mb-4">
          This Agreement remains effective until terminated by either party in writing. Upon termination, Licensee must cease all use of the Licensed Materials and destroy any future-use copies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">6. Intellectual Property &amp; Ownership</h2>
        <p className="text-gray-700 mb-4">
          Licensor retains all rights, title and interest in the Licensed Materials. Licensee acknowledges that no ownership rights are conveyed by this license.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">7. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          This Agreement shall be governed by the laws of Haryana, India. Any dispute hereunder shall be resolved exclusively in the courts of Faridabad.
        </p>

        <p className="text-gray-500 text-sm mt-10">
          For questions regarding licensing, please contact licensing@devui.com.
        </p>
      </div>
    </section>
  );
}
