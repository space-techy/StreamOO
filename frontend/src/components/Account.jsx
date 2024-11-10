import React, { useState } from 'react';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [name, setName] = useState('John Doe');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [currentPlan] = useState('Premium');
  const [newPicPreview, setNewPicPreview] = useState(null);
  
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setNewPicPreview(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  const handleSaveChanges = () => {
    console.log('Changes saved:', { name, password, profilePic });
  };

  return (
    <>
    <Navbar />
    <div
      className="flex flex-col justify-center items-center h-[100vh] text-white"
      style={{ background: "radial-gradient(circle at center, rgba(65,74,92,1) 5%, rgba(0,0,0,1) 80%)" }}
    >
      <div className="flex h-[80vh] flex-col justify-center px-6 py-12 lg:px-8 w-[25vw] bg-[rgba(0,0,0,0.5)] rounded-xl border-2 border-slate-600">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-6">Account Settings</h1>

          {/* Profile Picture */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Profile Picture</label>
            <div className="flex items-center space-x-4">
              {newPicPreview ? (
                <img src={newPicPreview} alt="Profile Preview" className="w-16 h-16 rounded-full" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Pic
                </div>
              )}
              <input type="file" onChange={handleProfilePicChange} className="text-gray-400"/>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-800 pl-2 text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">New Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-800 pl-2 text-white"
            />
          </div>

          {/* Current Plan */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Current Plan</label>
            <p className="text-gray-400">{currentPlan}</p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleSaveChanges}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Changes
            </button>
            <button
              onClick={handleLogout}
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Account;