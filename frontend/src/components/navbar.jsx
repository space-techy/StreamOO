import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center  px-8 py-4 z-50 rounded-2xl ">
      {/* Left Section - Logo and Menu Items */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <img src="./images/logo.svg" alt="StreamOO Logo" className="h-8" />
        <p className='text-white font-bold text-[1.25rem]'>StreamOO</p>
        {/* Menu Items */}
        <div className="flex space-x-4 text-white">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/tvshows" className="hover:text-gray-300">TV Shows</Link>
          <Link to="/movies" className="hover:text-gray-300">Movies</Link>
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
        <Link to="/account">
          <div className="cursor-pointer hover:text-gray-300">
            <AccountCircleIcon />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
