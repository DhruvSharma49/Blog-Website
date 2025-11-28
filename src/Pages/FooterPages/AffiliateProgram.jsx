import React from "react";
import { FaUsers, FaLink, FaWallet } from "react-icons/fa";

export default function AffiliateProgram() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-8">
          Affiliate Program
        </h1>
        <p className="text-gray-700 text-center mb-16 max-w-2xl mx-auto">
          Earn rewards for sharing our platform with your community. It's simple — share, refer, and earn.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FaLink className="mx-auto text-4xl text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Share Your Link</h3>
            <p className="text-gray-600">
              Invite friends with your personal referral link to join our platform.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FaUsers className="mx-auto text-4xl text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Grow Your Network</h3>
            <p className="text-gray-600">
              Every successful referral helps you level up and unlock more rewards.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FaWallet className="mx-auto text-4xl text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
            <p className="text-gray-600">
              Receive instant commission for every successful signup through your link.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
