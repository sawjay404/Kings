import React, { useState, useEffect } from 'react';
import { supabase } from '../../../Lib_temp/supabaseClient';
import { User, Shield, Stethoscope, Settings, Save, Edit2, CreditCard, Info } from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // State initialized with all your database fields
  const [profile, setProfile] = useState({
    child_first_name: '', child_last_name: '', child_dob: '', child_gender: '', child_age_group: '',
    parent_name: '', relationship: '', email: '', phone: '', address: '',
    emergency_name: '', emergency_number: '', emergency_relationship: '',
    medical_needs: '', dietary_restrictions: '',
    media_consent: false, terms_accepted: false, subscribe_newsletter: false,
    payment_tier: '', custom_payment: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('registrations') 
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        // Merge DB data with user auth email
        setProfile({ ...data, email: user.email });
      }
    } catch (error) { 
      console.error("Error fetching profile:", error); 
    } finally { 
      setLoading(false); 
    }
  };

  const handleSave = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Update everything in the profile object
    const { error } = await supabase
      .from('registrations')
      .update(profile)
      .eq('user_id', user.id);

    if (error) {
      alert("Error saving profile: " + error.message);
    } else {
      setIsEditing(false);
      alert("Profile updated successfully!");
    }
  };

  if (loading) return <div className="p-10 text-center text-gray-500">Loading mission data...</div>;

  return (
    <div className="max-w-5xl mx-auto pb-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Account Profile</h1>
        <button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {isEditing ? <><Save size={18}/> Save Changes</> : <><Edit2 size={18}/> Edit Profile</>}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Child Information */}
        <Section title="Child Details" icon={<User className="text-indigo-600"/>}>
          <Field label="First Name" name="child_first_name" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Last Name" name="child_last_name" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Date of Birth" name="child_dob" type="date" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Gender" name="child_gender" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Age Group" name="child_age_group" profile={profile} setProfile={setProfile} isEditing={isEditing} />
        </Section>

        {/* Parent & Contact */}
        <Section title="Contact Information" icon={<Info className="text-blue-600"/>}>
          <Field label="Parent/Guardian Name" name="parent_name" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Relationship" name="relationship" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Email (Linked)" name="email" profile={profile} setProfile={setProfile} isEditing={false} disabled />
          <Field label="Phone" name="phone" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Address" name="address" isTextarea profile={profile} setProfile={setProfile} isEditing={isEditing} />
        </Section>

        {/* Emergency & Safety */}
        <Section title="Safety & Medical" icon={<Stethoscope className="text-rose-600"/>}>
          <Field label="Emergency Contact Name" name="emergency_name" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Emergency Number" name="emergency_number" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Emergency Relationship" name="emergency_relationship" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Medical Needs" name="medical_needs" isTextarea profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Dietary Restrictions" name="dietary_restrictions" isTextarea profile={profile} setProfile={setProfile} isEditing={isEditing} />
        </Section>

        {/* Payment & Consent */}
        <Section title="Billing & Consent" icon={<CreditCard className="text-emerald-600"/>}>
          <Field label="Payment Tier" name="payment_tier" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <Field label="Custom Payment Notes" name="custom_payment" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <ToggleField label="Media Consent" name="media_consent" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <ToggleField label="Newsletter Subscribe" name="subscribe_newsletter" profile={profile} setProfile={setProfile} isEditing={isEditing} />
          <ToggleField label="Terms Accepted" name="terms_accepted" profile={profile} setProfile={setProfile} isEditing={isEditing} />
        </Section>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const Section = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <div className="flex items-center gap-2 mb-4 border-b pb-2">
      {icon} <h2 className="font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

const Field = ({ label, name, isEditing, profile, setProfile, isTextarea, type = "text", disabled = false }) => (
  <div>
    <label className="block text-xs font-bold text-gray-500 uppercase">{label}</label>
    {isEditing && !disabled ? (
      isTextarea ? 
        <textarea className="w-full border p-2 rounded mt-1" value={profile[name] || ''} onChange={(e) => setProfile({...profile, [name]: e.target.value})} /> :
        <input type={type} className="w-full border p-2 rounded mt-1" value={profile[name] || ''} onChange={(e) => setProfile({...profile, [name]: e.target.value})} />
    ) : (
      <p className="text-gray-800 font-medium bg-gray-50 p-2 rounded mt-1 border border-transparent">{profile[name] || '-'}</p>
    )}
  </div>
);

const ToggleField = ({ label, name, isEditing, profile, setProfile }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
    <span className="text-sm text-gray-600 font-medium">{label}</span>
    <input 
      type="checkbox" 
      disabled={!isEditing}
      checked={!!profile[name]} 
      onChange={(e) => setProfile({...profile, [name]: e.target.checked})}
      className="w-5 h-5 cursor-pointer accent-indigo-600"
    />
  </div>
);

export default ProfilePage;