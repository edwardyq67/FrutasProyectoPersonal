import React, { useState, useEffect } from 'react';
import Filtros from './Filtros'; // Asegúrate de ajustar las rutas de importación
import FiltroVertical from './FiltroVertical';
import ProdutoFiltro from './ProdutoFiltro';

const Productos = () => {
    const [buscar, setBuscar] = useState('');
    const [filto, setFiltro] = useState([]);

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className='px-2 py-10'>
            <div className="container grid grid-cols-4 gap-4">
                {/* Filtros visibles solo en pantallas grandes */}
                {isLargeScreen && (
                    <div className="col-span-1 hidden lg:block">
                        <Filtros setBuscar={setBuscar} setFiltro={setFiltro} />
                    </div>
                )}

                {/* Filtros visibles solo en pantallas pequeñas */}
                {!isLargeScreen && (
                    <div className="col-span-4 lg:hidden">
                        <FiltroVertical setBuscar={setBuscar} setFiltro={setFiltro} />
                    </div>
                )}

                {/* Contenido principal que ocupa el resto del espacio */}
                <div className="col-span-4 lg:col-span-3">
                    <ProdutoFiltro buscar={buscar} filto={filto} />
                </div>
            </div>
        </main>
    );
};

export default Productos;
