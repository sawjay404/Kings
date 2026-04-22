import React from 'react';

const AccountPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Account</h1>
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="font-semibold">Security</h3>
          <button className="text-blue-600 underline">Change Password</button>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold">Notification Settings</h3>
          <p className="text-gray-500">Manage your email preferences here.</p>
        </div>
      </div>
    </div>
  );
};
export default AccountPage;