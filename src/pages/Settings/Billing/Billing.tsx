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
        <p className="mb-1">Current Plan: <a href="#" className="text-blue-500 hover:underline">View details</a> of the current subscription plan.</p>
        <p>Upgrade or Downgrade: <a href="#" className="text-blue-500 hover:underline">Change subscription levels.</a></p>
      </div>

      {/* Payment Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
        <p className="mb-1">Payment Method: <a href="#" className="text-blue-500 hover:underline">Add or update payment methods.</a></p>
        <p>Billing History: <a href="#" className="text-blue-500 hover:underline">Access past invoices and payment history.</a></p>
      </div>

      {/* Usage */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Usage</h3>
        <p className="mb-1">Usage Statistics: <a href="#" className="text-blue-500 hover:underline">View usage stats</a> if your service has usage-based pricing.</p>
        <p>Alerts: <a href="#" className="text-blue-500 hover:underline">Set up alerts</a> for nearing usage limits.</p>
      </div>

      {/* Invoices */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Invoices</h3>
        <p className="mb-1">Download Invoices: <a href="#" className="text-blue-500 hover:underline">Access and download past invoices.</a></p>
        <p>Invoice Settings: <a href="#" className="text-blue-500 hover:underline">Manage preferences</a> for billing notifications and invoice details.</p>
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
        <p>Cancel Subscription: <a href="#" className="text-red-500 hover:underline">Option to cancel the current subscription.</a></p>
      </div>
    </div>
  );
};

export default Billing;
