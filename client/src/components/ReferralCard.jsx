import { FaCopy } from "react-icons/fa";
import React from "react";
import { toast } from "react-toastify";

const ReferralCard = ({ referralCode }) => {
  const referralLink = `https://yourapp.com/ref/${referralCode}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied!");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Your Referral</h2>

      <div className="mb-4">
        <p className="text-gray-500">Referral Code</p>
        <h3 className="text-2xl font-bold text-blue-600">{referralCode}</h3>
      </div>

      <div>
        <p className="text-gray-500 mb-2">Referral Link</p>

        <div className="flex items-center gap-3">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 border rounded-lg p-3 bg-gray-100"
          />

          <button
            onClick={copyLink}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center gap-2"
          >
            <FaCopy />
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralCard;
