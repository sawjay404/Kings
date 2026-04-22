import React from 'react';

const WalletPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Wallet</h1>
      <div className="bg-black text-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-400">Current Balance</p>
        <h2 className="text-4xl font-bold">₱0.00</h2>
      </div>
    </div>
  );
};
export default WalletPage;