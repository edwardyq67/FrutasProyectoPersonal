import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import { delay, motion } from 'framer-motion';
import { Fadebot, FadeLeft, FadeRight, FadeUp } from '../../../utility/animation';
const bgStyle = {
    backgroundImage: "url('https://fruits-selling-tcj.netlify.app/assets/banner-bg-z4y1lx0D.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}
const menudata = [
    {
        id: 1,
        title: "Manzana",
        link: "/",
        price: "$7.50",
        delay: .3,
        img: "https://fruits-selling-tcj.netlify.app/assets/apple-dU8UKi7U.png"
    },
    {
        id: 2,
        title: "Naranja",
        link: "/",
        price: "$5.00",
        delay: .6,
        img: "https://fruits-selling-tcj.netlify.app/assets/orange-SYYSet8r.png"
    },
    {
        id: 3,
        title: "Palta",
        link: "/",
        price: "$11.00",
        delay: .9,
        img: "https://fruits-selling-tcj.netlify.app/assets/avocado-CLmYh0bp.png"
    },
    {
        id: 4,
        title: "Uva",
        link: "/",
        price: "$12.40",
        delay: 1.2,
        img: "https://fruits-selling-tcj.netlify.app/assets/cherry-K8SpylM9.png"
    }
]
function Inicio() {
    return (
        <main className='pb-10'>
            <section className="container relative items-center grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                {/* info */}
                <div className="px-2 md:px-0 flex flex-col justify-center py-10 md:py-0 relative z-10">
                    <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
                        <motion.h1
                            variants={FadeRight(.6)}
                            initial="hidden"
                            animate="visible"
                            className='text-black dark:text-white text-5xl lg:text-6xl font-bold leading-relaxed font-averia '>Healthy <br /> Fresh <span className='text-secondary'>Fruits!</span></motion.h1>
                        <motion.p
                            variants={FadeRight(.9)}
                            initial="hidden"
                            animate="visible"
                            className='text-black dark:text-white text-2xl tracking-wide'>
                            Order Now For Fresh Healthy Life
                        </motion.p>
                        <motion.p
                            variants={FadeRight(1.2)}
                            initial="hidden"
                            animate="visible"
                            className='text-gray-400'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est natus, illo beatae aut officia illum ullam perspiciatis voluptas, quae culpa nobis et cumque adipisci provident necessitatibus perferendis architecto inventore totam?
                        </motion.p>
                        <motion.div
                            variants={FadeRight(1.5)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center items-center md:justify-start'>
                            <button className='primary-btn flex items-center gap-2'>
                                <span>
                                    <IoBagHandleOutline />
                                </span>
                                Order Now
                            </button>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 200, rotate: 75 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: .2 }}
                >
                    <img className='px-2 md:px-0 w-[350px] mx-auto  md:w-[550px] drop-shadow' src="https://fruits-selling-tcj.netlify.app/assets/fruit-plate-DRbIgdOk.png" alt="" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200, rotate: 75 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="absolute top-14 blur-sm opacity-70 md:top-0 right-1/2 rotate-[40deg]">
                    <img className=' w-full md:max-w-[300px]' src="https://fruits-selling-tcj.netlify.app/assets/leaf-CCkW9aP6.png" alt="" />
                </motion.div>
            </section>
            <section className='container my-10 md:my-20'>
                <motion.h2
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: .3 }}
                    className='px-4 md:px-0 text-black dark:text-white text-2xl font-bold text-left pb-20 uppercase'>Productos</motion.h2>
                <div className='px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        menudata.map((fruta) => (
                            <motion.div
                                variants={FadeLeft(fruta.delay)}
                                initial="hidden"
                                whileInView={"visible"}
                                whileHover={{ scale: 1.02, duration: .5 }}
                                key={fruta.id}
                                className="rounded-lg cursor-pointer shadow-[0_0_22px_0_rgba(251,146,60,.20)] dark:shadow-[0_0_22px_0_rgba(31, 41, 55,.40)] flex gap-6 justify-center items-center ">
                                <img src={fruta.img} className='w-[60px] mb-4 scale-110 transform-translate-y-6' alt="" />
                                <div className='grid justify-center items-start'>
                                    <h3 className='dark:text-white text-black text-xl font-semibold'>{fruta.title}</h3>
                                    <p className='dark:text-gray-400 text-gray-600 font-normal text-lg'>{fruta.price}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </section>
            <section className='bg-[#FFF4EB] dark:bg-gray-800 my-10 '>
                <div className="container grid grid-cols-1 md:grid-cols-2  space-y-6 md:space-y-0 py-14">
                    <div className="px-2 md:px-0 flex justify-center items-center ">
                        <motion.img
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: .2 }}
                            className='w-[300px] md:max-w-[400px] h-full object-cover' src="https://fruits-selling-tcj.netlify.app/assets/fruits-splash-BeZYLA1d.png" alt="" />
                    </div>
                    <div className="px-2 md:px-0 flex flex-col justify-center">
                        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                            <motion.h2
                                variants={Fadebot(.5)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='dark:text-white text-black  text-3xl lg:text-5xl font-bold'>Brand Info</motion.h2>
                            <motion.p
                                variants={Fadebot(.6)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='dark:text-gray-400 text-gray-600 font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit soluta a officia quibusdam ex repudiandae, dignissimos harum ut cum! Est maxime a earum quia, perferendis minus explicabo libero doloribus.</motion.p>
                            <motion.p
                                variants={Fadebot(.7)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='dark:text-gray-400 text-gray-600 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et deleniti nesciunt officiis labore qui explicabo magni tempora, itaque soluta, rerum iste molestias maiores esse. Pariatur quae perferendis quis cumque accusamus!</motion.p>
                            <motion.div
                                variants={Fadebot(.8)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='flex justify-center items-center md:justify-start'>
                                <button className='primary-btn flex items-center gap-2'>
                                    Learn More
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=''>
                <div className="container grid grid-cols-1 md:grid-cols-2  space-y-6 md:space-y-0 py-14">
                    <div className="px-2 md:px-0 flex flex-col justify-center">
                        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                            <motion.h2
                                variants={Fadebot(.5)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='dark:text-white text-black  text-3xl lg:text-5xl font-bold'>Online Fruit Store</motion.h2>
                            <motion.p
                                variants={Fadebot(.6)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='dark:text-gray-400 text-gray-600 font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit soluta a officia quibusdam ex repudiandae, dignissimos harum ut cum! Est maxime a earum quia, perferendis minus explicabo libero doloribus.</motion.p>
                            <motion.p
                                variants={Fadebot(.7)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='dark:text-gray-400 text-gray-600 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et deleniti nesciunt officiis labore qui explicabo magni tempora, itaque soluta, rerum iste molestias maiores esse. Pariatur quae perferendis quis cumque accusamus!</motion.p>
                            <motion.div
                                variants={Fadebot(.8)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='flex justify-center items-center md:justify-start'>
                                <button className='primary-btn flex items-center gap-2'>
                                    Download the App
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className=" px-2 md:px-0 flex justify-center items-center ">
                        <motion.img
                            initial={{ opacity: 0, x: 200, rotate: 75 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1, delay: .2 }}
                            viewport={{ once: true }}
                            className='w-[400px] md:max-w-[450px] h-full object-cover' src="https://fruits-selling-tcj.netlify.app/assets/fruit-plate2-BK55XwYa.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='px-4' >
                <div className="container px-4 mx-auto  max-w-[1350px] rounded-lg  relative bg-cover bg-center bg-fixed grid grid-cols-1 md:grid-cols-2  space-y-6 md:space-y-0 py-20" style={bgStyle}>
                    <div className="px-2 md:px-0 flex justify-center items-center ">
                    </div>
                    <div className="px-2 md:px-0 flex flex-col justify-center">
                        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                            <motion.h2
                                variants={Fadebot(.5)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className=' text-black  text-3xl lg:text-5xl font-bold'>Get Fresh Fruits Today</motion.h2>
                            <motion.p
                                variants={Fadebot(.6)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className=' text-gray-900 font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit soluta a officia quibusdam ex repudiandae, dignissimos harum ut cum! Est maxime a earum quia, perferendis minus explicabo libero doloribus.</motion.p>
                            <motion.div
                                variants={Fadebot(.8)}
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                className='flex justify-center items-center md:justify-start'>
                                <button className='primary-btn flex items-center gap-2'>
                                <span>
                                    <IoBagHandleOutline />
                                </span>
                                    Learn More
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Inicio