import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-1 bg-primary shadow-font/60 shadow-lg transition-all duration-300">
      <div className="max-w-[90vw] mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight" >
            Quran<span className="pl-1 text-font">Connect</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex font-bold font-mono text-xl space-x-2 flex-grow justify-center pl-20">
            <NavItem href="/" label="Home" />
            <NavItem href="/Courses" label="Courses" hasDropdown />
            <NavItem href="/AboutUs" label="About Us" />
            <NavItem href="/ContactUs" label="Contact" />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              {isSearchOpen ? (
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-64 p-2 pr-10 rounded-md bg-secondary text-primary font-medium tracking-wide placeholder-primary focus:outline-none focus:ring-2 focus:ring-font"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="focus:outline-none transition-colors text-font border-2 border-font bg-primary"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Login and Sign Up Buttons */}
            <Link to="/login" className="hidden md:inline-block border-font border-2  text-font font-bold px-6 py-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg shadow-font hover:text-white hover:font-medium ">
              Log In
            </Link>
            <Link to="/signup" className="hidden md:inline-block  bg-primary  border-2 border-font text-font font-bold px-6 py-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg shadow-font hover:text-white hover:font-medium ">
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden focus:outline-none ${isScrolled ? 'text-black' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 text-white z-50 lg:hidden flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center space-y-8 text-2xl">
            <MobileNavItem href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem href="/courses" label="Courses" hasDropdown onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem href="/about" label="About Us" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem href="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            <div className="pt-8 flex flex-col space-y-4 w-64">
              <Link to="/login" className="text-white px-6 py-3 rounded-md transition-colors duration-300 text-center bg-font hover:text-white">
                Log In
              </Link>
              <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors duration-300 text-center">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="p-4 text-center text-gray-400 text-sm">
            © 2024 LMSPro. All rights reserved.
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ href, label, hasDropdown }) => (
  <div className="relative group">
    <Link 
      to={href} 
      className="inline-block px-4 py-2 rounded-md transition-colors duration-300 text-font font-bold hover:text-white"
    >
      {label}
      {hasDropdown && <ChevronDown size={16} className="inline-block ml-1" />}
    </Link>
    {hasDropdown && (
      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <Link to="#" className="block px-4 py-2 text-sm text-font hover:text-white">Category 1</Link>
        <Link to="#" className="block px-4 py-2 text-sm text-font hover:text-white">Category 2</Link>
        <Link to="#" className="block px-4 py-2 text-sm text-font hover:text-white">Category 3</Link>
      </div>
    )}
  </div>
);

const MobileNavItem = ({ href, label, hasDropdown, onClick }) => (
  <Link to={href} className="block py-2 px-4 text-center" onClick={onClick}>
    {label}
    {hasDropdown && <ChevronDown size={16} className="inline-block ml-1" />}
  </Link>
);

export default Navbar;