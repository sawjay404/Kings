import React from 'react';

const BookingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <div className="bg-white p-6 rounded-lg border">
        <p className="text-gray-500">You have no upcoming bookings.</p>
      </div>
    </div>
  );
};
export default BookingsPage;