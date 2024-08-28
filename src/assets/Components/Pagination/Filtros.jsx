import React, { useState } from 'react'
import { delay, motion } from 'framer-motion';
import { FadeLeft, FadeRight } from '../../../utility/animation';
function Filtros({setBuscar,setFiltro}) {
    const [selectedVitaminas, setSelectedVitaminas] = useState([]);
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
        <main>
            
            <section
            className='grid gap-4 text-black dark:text-white text-lg tracking-wide font-semiboldbold '>
            <motion.div
             variants={FadeRight(.2)}
             initial="hidden"
             whileInView={"visible"}
            >
                <h2 className='mb-2'>Filtro</h2>
                    <form className='' onSubmit={(e)=>{
                        e.preventDefault()
                        setBuscar(e.target[0].value)
                    }}>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:primary hover:bg-[#f35672]  transition-all duration-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
                            >
                                Buscar
                            </button>
                        </div>
                    </form>
                </motion.div>
                <motion.h2
                 variants={FadeRight(.4)}
                 initial="hidden"
                 whileInView={"visible"}
                >Vitaminas</motion.h2>
                <motion.ul
                 variants={FadeRight(.6)}
                 initial="hidden"
                 whileInView={"visible"}
                className='pl-4'>
                    {
                        vitaminas.map((vitamina) => (
                            <li key={vitamina.vitamina} className=' flex items-center justify-start gap-4'>
                                <input
                                onChange={(e) => setSelectedVitaminas(e.target.checked ? [...selectedVitaminas, e.target.id] : selectedVitaminas.filter(vitamina => vitamina !== e.target.id))}
                                id={vitamina.vitamina} type="checkbox" className='checkbox' />
                                <label htmlFor={vitamina.vitamina} className='cursor-pointer w-full text-gray-600 dark:text-gray-400 text-base tracking-wide'>{vitamina.vitamina}</label>
                            </li>
                        ))
                    }
                </motion.ul>
            </section>
        </main>
    )
}

export default Filtros