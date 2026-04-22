import React from 'react';

const OrdersPage = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Order ID</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-gray-600">#ORD-1001</td>
              <td className="p-4 text-gray-600">April 21, 2026</td>
              <td className="p-4 text-green-600 font-medium">Delivered</td>
              <td className="p-4 text-gray-800">₱1,250.00</td>
            </tr>
          </tbody>
        </table>
        
        {/* Empty state example */}
        <div className="p-8 text-center text-gray-400">
          No orders found.
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;