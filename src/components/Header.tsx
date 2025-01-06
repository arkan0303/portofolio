import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", icon: FiHome },
    { name: "About", icon: FiUser },
    { name: "Skills", icon: FiCode },
    { name: "Projects", icon: FiBriefcase },
    { name: "Contact", icon: FiMail },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="#"
              className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300"
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                ARKANUL ADELIS
              </motion.span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="text-base font-medium text-gray-300 hover:text-blue-400 flex items-center space-x-1 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900 divide-y-2 divide-gray-800">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <a href="#" className="text-2xl font-bold text-blue-500">
                      AA
                    </a>
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={toggleMenu}
                      className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <FiX className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {menuItems.map((item) => (
                      <motion.a
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800 transition duration-300 ease-in-out"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-blue-500" />
                        <span className="ml-3 text-base font-medium text-gray-300">
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
