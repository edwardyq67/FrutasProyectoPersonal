
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io'

function FiltroVertical({ setBuscar, setFiltro }) {
    const [selectedVitaminas, setSelectedVitaminas] = useState([]);
    const [activar, setActivar] = useState(false)
    const contentRef = useRef(null);
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = activar ? `${contentRef.current.scrollHeight}px` : '0px';
        }
    }, [activar]);
    const vitaminas = [
        {
            vitamina: "A"
        },
        {
            vitamina: "B1"
        },
        {
            vitamina: "B2"
        },
        {
            vitamina: "B3"
        },
        {
            vitamina: "B5"
        },
        {
            vitamina: "B6"
        },
        {
            vitamina: "B7"
        },
        {
            vitamina: "B9"
        },
        {
            vitamina: "B12"
        },
        {
            vitamina: "C"
        },
        {
            vitamina: "D"
        },
        {
            vitamina: "K"
        },
    ]
    setFiltro(selectedVitaminas)
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: 'tween', duration: 1 }}
            className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4'>
            <form onSubmit={(e) => {
                e.preventDefault()
                setBuscar(e.target[0].value)
            }}>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-[#f35672] transition-all duration-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Buscar
                    </button>
                </div>
            </form>

            <div
                onClick={() => setActivar(!activar)}
                className='flex items-center justify-between bg-primary text-white font-semibold py-2 px-4 rounded duration-200 transition-all gap-4 cursor-pointer'
            >
                <h3>Filtrados</h3>
                <span><IoIosArrowDown /></span>
            </div>

            <div
                ref={contentRef}
                className={`transition-max-height ${activar ? 'max-h-screen duration-300' : 'max-h-0 invisible'}  grid col-span-1 sm:col-span-2 grid-cols-3 gap-2 justify-around px-4`}
            >
                {vitaminas.map((vitamina) => (
                    <div key={vitamina.vitamina} className='flex items-center justify-start gap-2'>
                        <input
                            onChange={(e) => setSelectedVitaminas(e.target.checked ? [...selectedVitaminas, e.target.id] : selectedVitaminas.filter(vitamina => vitamina !== e.target.id))}
                            type="checkbox"
                            id={vitamina.vitamina}
                            name={vitamina.vitamina}
                            className="form-checkbox"
                        />
                        <label htmlFor={vitamina.vitamina} className="text-sm cursor-pointer dark:text-white text-black w-[100%]">
                            {vitamina.vitamina}
                        </label>
                    </div>
                ))}
            </div>
        </motion.section>

    )
}

export default FiltroVertical