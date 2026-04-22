import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from "../../Lib/supabaseClient";

const UserLogin = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 1. Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      if (setIsAuthenticated) setIsAuthenticated(true);
      // We will handle navigation logic in App.jsx now
      navigate('/'); 
    }
  };

  // 2. Google Login (Redirecting to root '/' to handle onboarding logic)
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // We redirect to root '/' so App.jsx can decide the path
        redirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded shadow-md">
        
        <h2 className="text-3xl font-light text-center mb-2">Log In</h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Not a member? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
        </p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <button 
          onClick={handleGoogleLogin}
          className="w-full py-2 px-4 border border-gray-300 rounded mb-6 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 mr-2" />
          Log in with Google
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button 
            type="submit" 
            className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition font-medium"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;