import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';

function NavBar() {
    const [open, setOpen] = useState(false)
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
    const navigate = useNavigate()
    const NavBarMenu = [
        { id: 1, title: "Inicio", link: "/" },
        { id: 2, title: "Productos", link: "/productos" },
        // { id: 3, title: "Contacto", link: "/contacto" },
        { id: 4, title: "Nosotros", link: "/nosotros" },
    ]
    return (
        <>
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
                    <div className="hidden md:block">
                        <ul className='flex items-center gap-6 text-gray-600 dark:text-gray-400'>
                            {NavBarMenu.map((menu) => (
                                <li key={menu.id} className=''>
                                    <Link className='inline-block py-1 px-3 hover:text-primary transition-all duration-200 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' to={menu.link} onClick={() => navigate(menu.link)}>
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                            <button className='text-2xl hover:bg-primary hover:text-white text-primary hover:shadow p-2 rounded-full transition-all duration-200'>
                                <MdOutlineShoppingCart />
                            </button>
                            <button onClick={toggleDarkMode} className="p-2">
                                {darkMode ? <CiDark size={24} /> : <MdDarkMode size={24} />}
                            </button>
                        </ul>
                    </div>
                    <div className='block md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-2xl text-black dark:text-white' />
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence mode='wait'>
                {
                    open && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className=' absolute top-14 left-0 w-full h-screen z-20'>
                            <div className="font-semibold uppercase bg-primary text-white py-5 m-6 rounded-lg">
                                <ul className='flex flex-col items-center gap-5'>
                                    {NavBarMenu.map((menu) => (
                                        <li key={menu.id} className='py-2'>
                                            <Link className='flex flex-col items-center' to={menu.link} onClick={() => setOpen(false)}>
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}
                                    <button className='text-2xl hover:bg-primary text-white  hover:shadow p-2 rounded-full transition-all duration-200'>
                                        <MdOutlineShoppingCart />
                                    </button>
                                    <button onClick={toggleDarkMode} className="p-2">
                                        {darkMode ? <CiDark size={24} /> : <MdDarkMode size={24} />}
                                    </button>
                                </ul>
                            </div>

                        </motion.div>
                    )

                }
            </AnimatePresence>
        </>

    )
}

export default NavBar