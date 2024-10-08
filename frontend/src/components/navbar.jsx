import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center bg-transparent px-8 py-4 z-50">
      {/* Left Section - Logo and Menu Items */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <img src="./images/logo.svg" alt="StreamOO Logo" className="h-8" />
        <p className='text-white font-bold text-[1.25rem]'>StreamOO</p>

        {/* Menu Items */}
        <div className="flex space-x-4 text-white">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">TV Shows</a>
          <a href="#" className="hover:text-gray-400">Movies</a>
          <a href="#" className="hover:text-gray-400">New & Popular</a>
          <a href="#" className="hover:text-gray-400">My List</a>
          <a href="#" className="hover:text-gray-400">Browse by Languages</a>
        </div>
      </div>

      {/* Right Section - Search, Notifications, Profile */}
      <div className="flex items-center space-x-6 text-white">
        {/* Search Icon */}
        <div className="cursor-pointer hover:text-gray-400">
          <SearchIcon />
        </div>

        {/* Notifications Icon */}
        <div className="cursor-pointer hover:text-gray-400">
          <NotificationsIcon />
        </div>

        {/* Profile Icon */}
        <div className="cursor-pointer hover:text-gray-400">
          <AccountCircleIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
