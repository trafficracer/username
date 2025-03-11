import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' }
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-green-500/20 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-mono">{'>'}</span>
          <span className="text-xl font-bold">NULL BORN</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'hover:text-green-300 transition-colors',
                  isActive && 'text-green-500 font-bold'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'absolute top-16 right-0 bg-black/90 w-64 h-screen p-4 transform transition-transform duration-300 ease-in-out md:hidden',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'hover:text-green-300 transition-colors',
                  isActive && 'text-green-500 font-bold'
                )
              }
              onClick={toggleMenu} // Close menu on link click
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
