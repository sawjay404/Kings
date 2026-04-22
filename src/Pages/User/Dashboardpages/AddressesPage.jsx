import React from 'react';

const AddressesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Addresses</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg hover:border-black transition">
          <p className="font-semibold">Home</p>
          <p className="text-gray-600">General Trias, Cavite</p>
        </div>
      </div>
    </div>
  );
};
export default AddressesPage;