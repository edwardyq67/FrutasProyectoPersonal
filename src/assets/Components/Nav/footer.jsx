import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { FaInstagram, FaLeaf, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { MdDarkMode, MdOutlineShoppingCart } from 'react-icons/md';
import { CiDark, CiFacebook } from 'react-icons/ci';
function footer() {
    const [darkMode, setDarkMode] = useState(false);

    // Cambiar la clase en el <html> según el estado de darkMode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Función para alternar el modo
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  return (
    <footer className='dark:bg-black bg-[#fff4eb] py-2'>
        <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: 0.5 }}
                className='container '>
                <div className='flex z-20 mx-2 justify-between items-center py-6 md:pt-4'>
                    {/* Logo */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <p className='text-primary'>Fruit</p>
                        <p className='text-secondary'>Store</p>
                        <FaLeaf className='text-green-500' />
                    </div>
                    {/* Menu */}
                    <div className=" block">
                        <ul className='flex items-center gap-6 text-gray-600 dark:text-gray-400'>
                            <li className='text-3xl cursor-pointer hover:scale-105 transition-all duration-150'><FaInstagram /></li>
                            <li className='text-3xl cursor-pointer hover:scale-105 transition-all duration-150'><CiFacebook /></li>
                            <li className='text-3xl cursor-pointer hover:scale-105 transition-all duration-150'><FaYoutube /></li>
                            <li className='text-3xl cursor-pointer hover:scale-105 transition-all duration-150'><FaTelegramPlane /></li>
                          
                        </ul>
                    </div>
                </div>
            </motion.nav>
    </footer>
  )
}

export default footer