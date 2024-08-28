import React, { useState } from 'react'
import { delay, motion } from 'framer-motion';
import { Fadebot, FadeLeft, FadeUp } from '../../../utility/animation';
function ProdutoFiltro({ buscar, filto }) {

    const frutas = [
        {
            "id": 1,
            "nombre": "Zanahorias",
            "precio": 2.5,
            "vitaminas": ["A", "B6", "K"],
            "img": "https://www.gob.mx/cms/uploads/article/main_image/81178/zanah1.jpg",
            "delay": .1
        },
        {
            "id": 2,
            "nombre": "Naranjas",
            "precio": 3.0,
            "vitaminas": ["C", "B1", "A"],
            "img": "https://www.cuerpomente.com/medio/2020/10/21/naranja_d5a1192b_1200x630.jpg",
            "delay": .2
        },
        {
            "id": 3,
            "nombre": "Espinacas",
            "precio": 2.8,
            "vitaminas": ["K", "A", "C", "B9"],
            "img": "https://cdn.milenio.com/uploads/media/2021/06/21/las-espinacas-son-ricas-en.jpg",
            "delay": .3
        },
        {
            "id": 4,
            "nombre": "Plátanos",
            "precio": 1.5,
            "vitaminas": ["B6", "C"],
            "img": "https://frutasesanchez.com/wp-content/uploads/2019/04/platanos.png",
            "delay": .1
        },
        {
            "id": 5,
            "nombre": "Almendras",
            "precio": 4.0,
            "vitaminas": ["E", "B2"],
            "img": "https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/604204064a61a.jpeg",
            "delay": .2
        },
        {
            "id": 6,
            "nombre": "Huevos",
            "precio": 2.2,
            "vitaminas": ["B12", "D", "A"],
            "img": "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/016E/production/_115766300_gettyimages-1185128848.jpg.webp",
            "delay": .3
        },
        {
            "id": 7,
            "nombre": "Pechuga de Pollo",
            "precio": 5.5,
            "vitaminas": ["B3", "B6", "B12"],
            "img": "https://i0.wp.com/www.domiciliohavana.com/wp-content/uploads/2024/01/domiclio-havana-blog-pechuga-pollo-receta-suprema.jpg",
            "delay": .1
        },
        {
            "id": 8,
            "nombre": "Aguacate",
            "precio": 3.5,
            "vitaminas": ["E", "K", "B5", "B6"],
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQ7vKs31kei8m3Xtxfe7otXncWKNPZ_zgtQ&s"
            , "delay": .2
        },
        {
            "id": 9,
            "nombre": "Leche",
            "precio": 1.2,
            "vitaminas": ["D", "B12", "A"],
            "img": "https://cloudfront-us-east-1.images.arcpublishing.com/semana/T6OYUFIEAVALTDZHROLTF72PQY.jpg"
            , "delay": .3
        },
        {
            "id": 10,
            "nombre": "Salmón",
            "precio": 7.0,
            "vitaminas": ["D", "B12", "B6"],
            "img": "https://hips.hearstapps.com/hmg-prod/images/salmon-elle-gourmet-2-64c38d1d435c7.jpg"
            , "delay": .1
        },
        {
            "id": 11,
            "nombre": "Fresas",
            "precio": 3.2,
            "vitaminas": ["C", "B9"],
            "img": "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd",
            "delay": 0.2
        },
        {
            "id": 12,
            "nombre": "Brócoli",
            "precio": 2.3,
            "vitaminas": ["C", "K", "B9"],
            "img": "https://s1.abcstatics.com/media/bienestar/2019/07/22/brocoli-beneficios-3-kk7H--1248x698@abc.jpg",
            "delay": 0.3
        },
        {
            "id": 13,
            "nombre": "Tomates",
            "precio": 2.1,
            "vitaminas": ["C", "K", "B9"],
            "img": "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate.jpg",
            "delay": 0.1
        },
        {
            "id": 14,
            "nombre": "Pimientos Rojos",
            "precio": 3.7,
            "vitaminas": ["C", "B6", "A"],
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegkHSfaLi3BqOWe_PJlR_HR1V0dIroMD1Gg&s",
            "delay": 0.2
        },
        {
            "id": 15,
            "nombre": "Mango",
            "precio": 2.6,
            "vitaminas": ["A", "C", "E", "B6"],
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-0Z8dGqmxSS7njMr20r1fm6LB_H9yUZqsg&s",
            "delay": 0.3
        },
        {
            "id": 16,
            "nombre": "Lentejas",
            "precio": 1.8,
            "vitaminas": ["B1", "B6", "B9"],
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT316dt6nbzWnl6CTTJ9fqtN6OJ3rJiTRwGhw&s",
            "delay": 0.2
        },
        {
            "id": 19,
            "nombre": "Champiñones",
            "precio": 3.0,
            "vitaminas": ["D", "B2", "B3", "B5"],
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwJXkcGfmw1G8eD6kE2CCNmeNy_zQAwlMFQ&s",
            "delay": 0.3
        },
        {
            "id": 20,
            "nombre": "Yogur",
            "precio": 1.5,
            "vitaminas": ["B2", "B12", "D"],
            "img": "https://imag.bonviveur.com/yogur-griego.jpg",
            "delay": 0.1
        },
        {
            "id": 21,
            "nombre": "Camarones",
            "precio": 6.5,
            "vitaminas": ["B12", "D", "B6", "B3"],
            "img": "https://esenciadelmar.es/wp-content/uploads/2023/05/diferencias-gambas-camarones-1199x700.jpeg",
            "delay": 0.2
        }
    ]
    const datos = frutas
        .filter(fruta =>
            buscar === '' || fruta.nombre.toLowerCase().includes(buscar.toLowerCase()) // Filtrar por nombre
        )
        .filter(fruta =>
            filto.length === 0 || // Si no hay vitaminas seleccionadas, incluir todas las frutas
            filto.every(vitamina => fruta.vitaminas.includes(vitamina)) // Si hay vitaminas seleccionadas, incluir solo las frutas que contienen al menos una de las vitaminas seleccionadas
        ); return (
            <section>
                <div className="container w-full min-h-[80vh] ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {datos.map((producto) => (
                            <motion.section
                                variants={Fadebot(producto.delay)}
                                initial="hidden"
                                whileInView={"visible"}
                                whileHover={{ scale: 1.02, duration: .5 }}
                                key={producto.id}
                            >
                                <div className="p-4 cursor-pointer">
                                    <img src={producto.img} alt={producto.nombre} className="mb-2 rounded scale-105 w-full h-[200px] object-cover" />
                                    <h2 className="text-gray-600 dark:text-gray-200 text-xl font-bold font-poppins">{producto.nombre}</h2>
                                    <p className="text-gray-400  text-sm">Precio: ${producto.precio}</p>
                                </div>
                            </motion.section>
                        ))}
                    </div>
                </div>
            </section>
        )
}

export default ProdutoFiltro