import React from "react";
import { FaGavel } from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12 flex justify-center">
      <div className="max-w-5xl bg-white rounded-2xl shadow-lg p-10">
        <div className="flex items-center mb-8">
          <FaGavel className="text-blue-600 text-4xl mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Terms &amp; Conditions</h1>
        </div>

        <p className="text-gray-700 mb-6">
          Last updated: <strong>August 30, 2025</strong><br />
          Welcome to DevUI (“we”, “our”, or “us”). These Terms &amp; Conditions govern your access to and use of our platform, including our website, services, applications, and content (collectively, the “Service”). By accessing or using the Service you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">1. Eligibility &amp; Registration</h2>
        <p className="text-gray-700 mb-4">
          You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account. When you register, you agree to provide accurate, complete, and up-to-date information, and to keep your credentials secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">2. Acceptable Use</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>You agree not to use the Service for any unlawful or unauthorized purpose.</li>
          <li>You will not engage in spamming, distributing malware, reverse engineering, or scraping our systems.</li>
          <li>Any content you submit must comply with applicable laws and not infringe any third-party rights.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">3. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content, trademarks, and software on the Service are our property or licensed to us. You are granted a limited, non-exclusive, revocable license to access and use the Service, subject to these Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">4. Payment Terms</h2>
        <p className="text-gray-700 mb-4">
          For paid plans, you agree to pay the fees set forth on the pricing page. We may change fees at any time with prior notice. Subscription renewals are automatic unless cancelled at least 30 days before renewal.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">5. Termination &amp; Suspension</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to suspend or terminate your access if you violate these Terms. Upon termination, your right to use the Service stops immediately and fees paid are non-refundable unless required by law.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          The Service is provided “as-is” without warranties of any kind. To the maximum extent permitted by law, we disclaim all liability for damages arising from your use of the Service.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">7. Governing Law &amp; Dispute Resolution</h2>
        <p className="text-gray-700 mb-4">
          These Terms are governed by the laws of Haryana, India. Any dispute shall be resolved in the courts located in Faridabad unless otherwise agreed in writing.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">8. Changes to These Terms</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms from time to time. You will be notified of material changes and your continued use of the Service constitutes acceptance of the new Terms.
        </p>

        <p className="text-gray-500 text-sm mt-10">
          If you have any questions regarding these Terms, please contact us at support@devui.com.
        </p>
      </div>
    </section>
  );
}
