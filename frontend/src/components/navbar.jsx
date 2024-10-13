import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center bg-[rgba(0,0,0,0.25)] px-8 py-4 z-50 rounded-2xl backdrop-blur-md">
      {/* Left Section - Logo and Menu Items */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <img src="./images/logo.svg" alt="StreamOO Logo" className="h-8" />
        <p className='text-white font-bold text-[1.25rem]'>StreamOO</p>

        {/* Menu Items */}
        <div className="flex space-x-4 text-white">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="#" className="hover:text-gray-300">TV Shows</Link>
          <Link to="#" className="hover:text-gray-300">Movies</Link>
          <Link to="#" className="hover:text-gray-300">New & Popular</Link>
          <Link to="#" className="hover:text-gray-300">My List</Link>
          <Link to="#" className="hover:text-gray-300">Browse by Languages</Link>
        </div>
      </div>

      {/* Right Section - Search, Notifications, Profile */}
      <div className="flex items-center space-x-6 text-white">
        {/* Search Icon */}
        <div className="cursor-pointer hover:text-gray-300">
          <SearchIcon />
        </div>

        {/* Notifications Icon */}
        <div className="cursor-pointer hover:text-gray-300">
          <NotificationsIcon />
        </div>

        {/* Profile Icon */}
        <div className="cursor-pointer hover:text-gray-300">
          <AccountCircleIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
