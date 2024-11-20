"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'Blog', href: '/blog' },
    { name: 'Car', href: '/car' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link 
              href="/" 
              className="text-2xl font-extralight tracking-wider text-white 
                         hover:text-gray-200 transition-colors duration-300 
                         drop-shadow-lg"
            >
              Luxe Car Rentals
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 items-center"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm font-light tracking-wider uppercase
                  transition-all duration-300 ease-in-out
                  ${pathname === item.href 
                    ? 'text-white font-semibold' 
                    : 'text-gray-300 hover:text-white hover:scale-105'}
                  transform hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]
                `}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;