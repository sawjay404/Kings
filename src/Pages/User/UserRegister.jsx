import React, { useState } from 'react';
import { supabase } from '../../Lib/supabaseClient_temp';

const UserRegister = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    child_first_name: '', child_last_name: '', child_dob: '', child_gender: '', child_age_group: '',
    parent_name: '', relationship: '', email: '', phone: '', address: '',
    emergency_name: '', emergency_number: '', emergency_relationship: '',
    medical_needs: '', dietary_restrictions: '',
    media_consent: false, terms_accepted: false, subscribe_newsletter: false,
    payment_tier: '20',
    custom_payment: '' 
  });
  
  const [loading, setLoading] = useState(false);
  const [isCustom, setIsCustom] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'payment_tier') {
      setIsCustom(value === 'other');
    }

    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms_accepted) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }
    
    setLoading(true);

    try {
      // 1. Get the current authenticated user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert("You must be logged in to register.");
        setLoading(false);
        return;
      }

      // 2. Prepare final data with user_id linkage
      const finalData = { 
        ...formData,
        user_id: user.id, // <--- THIS IS THE FIX
        email: user.email // Ensure email is saved to the row
      };

      // 3. Remove non-table fields before inserting
      delete finalData.custom_payment;

      if (formData.payment_tier === 'other') {
        finalData.payment_tier = formData.custom_payment;
      }

      // 4. Save to Supabase
      const { error } = await supabase
        .from('registrations')
        .insert([finalData]);

      if (error) {
        console.error("Supabase Error Details:", error);
        alert("Error saving registration: " + error.message);
      } else {
        alert("Registration submitted successfully!");
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
      {/* Child Information */}
      <section className="space-y-4">
        <h3 className="font-bold border-b pb-2">Child Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <input name="child_first_name" placeholder="First Name*" required className="p-2 border rounded" onChange={handleChange} />
          <input name="child_last_name" placeholder="Last Name*" required className="p-2 border rounded" onChange={handleChange} />
        </div>
        <input type="date" name="child_dob" required className="w-full p-2 border rounded" onChange={handleChange} />
        <select name="child_gender" required className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input name="child_age_group" placeholder="Age Group*" required className="w-full p-2 border rounded" onChange={handleChange} />
      </section>

      {/* Parent/Guardian Info */}
      <section className="space-y-4">
        <h3 className="font-bold border-b pb-2">Parent/Guardian Information</h3>
        <input name="parent_name" placeholder="Full Name*" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="relationship" placeholder="Relationship to Child*" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email*" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="phone" placeholder="Phone*" required className="w-full p-2 border rounded" onChange={handleChange} />
        <textarea name="address" placeholder="Home Address" className="w-full p-2 border rounded" onChange={handleChange} />
      </section>

      {/* Emergency Contact */}
      <section className="space-y-4">
        <h3 className="font-bold border-b pb-2">Emergency Contact</h3>
        <input name="emergency_name" placeholder="Contact Name*" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="emergency_number" placeholder="Contact Number*" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="emergency_relationship" placeholder="Relationship to Child*" required className="w-full p-2 border rounded" onChange={handleChange} />
      </section>

      {/* Medical Info */}
      <section className="space-y-4">
        <h3 className="font-bold border-b pb-2">Medical & Special Needs</h3>
        <textarea name="medical_needs" placeholder="Special needs, medical conditions, allergies..." className="w-full p-2 border rounded" onChange={handleChange} />
        <textarea name="dietary_restrictions" placeholder="Dietary restrictions (if any)" className="w-full p-2 border rounded" onChange={handleChange} />
      </section>

      {/* Consent & Payment */}
      <section className="space-y-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="media_consent" onChange={handleChange} />
          I give permission for media usage (photos/videos).
        </label>
        
        <label className="block font-medium">Pay What You Can</label>
        <select name="payment_tier" className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="20">£20</option>
          <option value="30">£30</option>
          <option value="50">£50</option>
          <option value="other">Other Amount</option>
        </select>

        {isCustom && (
          <input 
            type="number" 
            name="custom_payment" 
            placeholder="Enter custom amount" 
            required={isCustom}
            className="w-full p-2 border rounded mt-2" 
            onChange={handleChange} 
          />
        )}

        <label className="flex items-center gap-2">
          <input type="checkbox" name="subscribe_newsletter" onChange={handleChange} />
          Subscribe me to your newsletter.
        </label>

        <label className="flex items-center gap-2 font-bold text-red-600">
          <input type="checkbox" name="terms_accepted" required onChange={handleChange} />
          I agree to the Terms & Conditions*
        </label>
      </section>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition disabled:bg-gray-400"
      >
        {loading ? "Registering..." : "Complete Registration"}
      </button>
    </form>
  );
};

export default UserRegister;