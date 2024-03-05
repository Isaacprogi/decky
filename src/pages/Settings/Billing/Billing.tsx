import React, { useState } from 'react';
import { FaCreditCard, FaHistory, FaRegFilePdf, FaRegChartBar, FaBell, FaSave } from 'react-icons/fa';

const Billing: React.FC = () => {
  const [autoRenewal, setAutoRenewal] = useState(false);

  const handleAutoRenewalChange = () => {
    setAutoRenewal(!autoRenewal);
  };

  return (
    <div className="w-full min-h-full text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Billing</h2>
      
      {/* Subscription Details */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Subscription Details</h3>
        <p className="mb-1">Current Plan: <span className="text-blue-500 hover:underline cursor-pointer">View details</span> of the current subscription plan.</p>
        <p>Upgrade or Downgrade: <span className="text-blue-500 hover:underline cursor-pointer">Change subscription levels.</span></p>
      </div>

      {/* Payment Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
        <p className="mb-1">Payment Method: <span className="text-blue-500 hover:underline cursor-pointer">Add or update payment methods.</span></p>
        <p>Billing History: <span className="text-blue-500 hover:underline cursor-pointer">Access past invoices and payment history.</span></p>
      </div>

      {/* Usage */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Usage</h3>
        <p className="mb-1">Usage Statistics: <span className="text-blue-500 hover:underline cursor-pointer">View usage stats</span> if your service has usage-based pricing.</p>
        <p>Alerts: <span className="text-blue-500 hover:underline cursor-pointer">Set up alerts</span> for nearing usage limits.</p>
      </div>

      {/* Invoices */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Invoices</h3>
        <p className="mb-1">Download Invoices: <span className="text-blue-500 hover:underline cursor-pointer">Access and download past invoices.</span></p>
        <p>Invoice Settings: <span className="text-blue-500 hover:underline cursor-pointer">Manage preferences</span> for billing notifications and invoice details.</p>
      </div>

      {/* Renewal and Cancellation */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Renewal and Cancellation</h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoRenewal}
              onChange={handleAutoRenewalChange}
              className="text-blue-600 border-gray-600 rounded mr-2"
            />
            <span className="text-sm">Auto-Renewal</span>
          </label>
        </div>
        <p>Cancel Subscription: <span className="text-red-500 hover:underline cursor-pointer">Option to cancel the current subscription.</span></p>
      </div>
    </div>
  );
};

export default Billing;
