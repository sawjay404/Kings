import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../../../Lib_temp/supabaseClient';
import UserRegister from '../UserRegister'; 

const UserDashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          console.log("No user found in session.");
          return;
        }

        console.log("Checking registration for user_id:", user.id);

        // Updated Query: We now filter by user_id instead of email
        const { data, error } = await supabase
          .from('registrations')
          .select('id') // We just need to know if a record exists
          .eq('user_id', user.id); 

        if (error) {
          console.error("Supabase Query Error:", error);
          return;
        }

        console.log("Supabase returned:", data);

        // If the array length is 0, no registration is linked to this user
        if (data && data.length === 0) {
          console.log("No registration found for this user_id. Showing popup.");
          setShowPopup(true);
        } else {
          console.log("Registration found! Hiding popup.");
          setShowPopup(false);
        }
      } catch (err) {
        console.error("Unexpected error in checkRegistration:", err);
      }
    };

    checkRegistration();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/user-login');
  };

  const navLinks = [
    { name: 'Profile', path: 'profile' },
    { name: 'My Bookings', path: 'bookings' },
    { name: 'My Wallet', path: 'wallet' },
    { name: 'My Orders', path: 'orders' },
    { name: 'My Addresses', path: 'addresses' },
    { name: 'My Subscriptions', path: 'subscriptions' },
    { name: 'My Account', path: 'account' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8 text-black">Dashboard</h2>
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-black text-white font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <button 
          onClick={handleLogout}
          className="text-red-500 font-medium hover:text-red-700 mt-auto p-4 border-t border-gray-100"
        >
          Log Out
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet /> 
      </main>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Complete Registration</h2>
            <p className="text-gray-500 mb-6 text-center">Please complete your details to continue.</p>
            {/* The popup closes automatically when registration is successful */}
            <UserRegister onSuccess={() => setShowPopup(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;