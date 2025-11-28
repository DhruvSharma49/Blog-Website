import PageLayout from "./Layout";

export default function Privacy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Your privacy and data security are our highest priorities."
    >
      <div className="space-y-10">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to DevUI. This Privacy Policy explains how we collect, use,
            and protect your personal information when you use our website,
            products, and services. By accessing our platform, you agree to the
            terms outlined in this policy.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We collect only essential information to deliver and improve our
            services. This includes:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 text-lg">
            <li>Personal details like your name and email address</li>
            <li>Account and login information</li>
            <li>Usage analytics (pages visited, time spent, device type)</li>
            <li>Cookies and IP address for better user experience</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            3. How We Use Your Data
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Your information helps us deliver personalized experiences,
            including:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 text-lg">
            <li>Improving our platform’s performance and design</li>
            <li>Providing product updates and feature announcements</li>
            <li>Ensuring account security and preventing fraudulent activity</li>
            <li>Responding to your support requests and feedback</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            4. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We implement industry-standard encryption and security protocols to
            keep your information safe. Access to personal data is strictly
            controlled and monitored. We never share, sell, or rent your
            information to any third-party advertisers.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            5. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            You have complete control over your data. You can:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 text-lg">
            <li>Request access to your personal data</li>
            <li>Ask for corrections or deletion of stored data</li>
            <li>Opt out of marketing communications anytime</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            6. Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            This policy may be updated periodically. Any major changes will be
            communicated via email or in-app notifications to ensure complete
            transparency.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 border-t pt-6 text-gray-600 text-sm text-center">
          <p>
            Last updated: November 2025 — For questions, email us at{" "}
            <span className="text-amber-700 font-medium">
              privacy@devui.com
            </span>
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
