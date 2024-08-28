import React from 'react'
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fadebot, FadeLeft, FadeRight, FadeUp } from '../../../utility/animation';
function Nosotros() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Crear la segunda ref e inView
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const datosFechas = [
    {
      id: 1,
      fecha: "Agosto 2021",
      evento: "Founded company",
      contenido: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."
      , delay: .8
    },
    {
      id: 2,
      fecha: "Diciembre 2021",
      evento: "Secured $65m in funding",
      contenido: "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil."
      , delay: 1
    },
    {
      id: 3,
      fecha: "Febreo 2022",
      evento: "Released beta",
      contenido: "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et."
      , delay: 1.2
    },
    {
      id: 4,
      fecha: "Diciembre 2022",
      evento: "Global launch of product",
      contenido: "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit."
      , delay: 1.4
    }
  ]
  return (
    <main>
      <div className="container grid px-2">
        <div className='grid grid-cols-1 min-h-[650px] lg:grid-cols-2 items-center gap-8 py-10 text-center md:text-start lg:py-20'>
          <div className="grid gap-8 translate-y-0 lg:translate-y-[-50px]">
            <motion.h2
              variants={FadeRight(.2)}
              initial="hidden"
              animate="visible"
              className='text-4xl lg:text-5xl font-semibold text-black dark:text-white font-averia'>We’re changing the way people connect.</motion.h2>
            <motion.p
              variants={FadeRight(.4)}
              initial="hidden"
              animate="visible"
              className='text-lg font-poppins tracking-wide text-gray-600 dark:text-gray-400'>Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.</motion.p>
          </div>
          <motion.img
            variants={FadeLeft(.3)}
            initial="hidden"
            animate="visible"
            className='translate-y-0 lg:translate-y-20 rounded-lg px-2 md:px-0 w-[350px] mx-auto  md:w-[550px] drop-shadow' src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80" alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 lg:py-20 gap-y-10">
          {
            datosFechas.map(datos => (
              <motion.div
                ref={ref}
                variants={FadeLeft(datos.delay)}
                initial="hidden"
                animate="visible"
                key={datos.id} className="grid items-center gap-2">
                <h3 className='flex text-secondary whitespace-nowrap gap-2 items-center font-medium'>
                  <span className='inline-block w-2 h-1 bg-secondary rounded-full mr-2'></span>
                  {datos.fecha}
                  <span className='inline-block w-full h-[.5px] bg-secondary'></span>
                </h3>
                <h2 className='text-lg font-bold font-poppins text-black dark:text-white'>{datos.evento}</h2>
                <p className='text-sm tracking-wide font-poppins text-gray-600 dark:text-gray-400'>{datos.contenido}</p>
              </motion.div>
            ))
          }
        </div>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0 }}
          animate={inView1 ? { opacity: 1 } : {}}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          className="px-2 rounded-lg w-full py-10 md:py-20 mt-10 md:my-10 text-center grid gap-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(222, 44, 77,1) 0%, rgba(251, 146, 60,1) 35%, rgba(222, 44, 77,1) 80%,rgba(251, 146, 60,1) 100%)',
          }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-white text-4xl lg:text-5xl font-bold font-poppins'
          >
            Our customers love us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: .6 }}
            className='text-gray-200 text-lg tracking-widest font-normal font-poppins lg:w-[60%] mx-auto'
          >
            Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi adipisicing officia excepteur tempor deserunt.
          </motion.p>

          <div className="grid lg:flex mx-auto w-[90%] justify-center gap-y-4">
            <div className="grid sm:flex justify-around gap-y-4">
              <motion.img
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: .8 }}
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor Logo"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform Logo"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple Logo"
              />
            </div>
            <div className="grid sm:flex justify-around gap-y-4">
              <motion.img
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.4 }}
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal Logo"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.6 }}
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic Logo"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0 }}
          animate={inView2 ? { opacity: 1 } : {}}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          className="my-20 grid grid-cols-4 gap-x-4 gap-y-10 items-center md:text-start text-center">
          <div className='lg:w-[90%] mb-10 lg:mb-0 w-full col-span-4 lg:col-span-2 grid gap-2 lg:translate-y-[-40px] translate-y-0'>
            <motion.h2
              variants={FadeRight(.6)}
              initial="hidden"
              animate={inView2 ? "visible" : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className='dark:text-white text-black text-4xl lg:text-5xl font-bold font-poppins '>Our people</motion.h2>
            <motion.p
              variants={FadeRight(.8)}
              initial="hidden"
              animate={inView2 ? "visible" : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className='dark:text-gray-400 text-gray-600 text-xl font-poppins'>Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.</motion.p>
            <motion.p
              variants={FadeRight(1)}
              initial="hidden"
              animate={inView2 ? "visible" : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className='dark:text-gray-600 text-gray-400 text-lg font-extralight font-poppins'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</motion.p>
          </div>
          <motion.img
            variants={FadeLeft(.7)}
            initial="hidden"
            animate={inView2 ? "visible" : {}}
            transition={{ duration: 1, delay: 1.6 }}
            className='col-span-2 rounded-lg drop-shadow-md w-[600px] translate-y-20 lg:translate-y-0' src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80" alt="" />
          <motion.img
            variants={FadeLeft(.9)}
            initial="hidden"
            animate={inView2 ? "visible" : {}}
            transition={{ duration: 1, delay: 1.6 }}
            className='col-span-2 lg:col-span-1 rounded-lg drop-shadow-md w-[350px] translate-y-0 lg:translate-y-[-80px]' src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80" alt="" />
          <motion.img
            variants={FadeLeft(1.2)}
            initial="hidden"
            animate={inView2 ? "visible" : {}}
            transition={{ duration: 1, delay: 1.6 }}
            className='col-span-2 rounded-lg drop-shadow-md translate-y-20 lg:translate-y-0' src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80" alt="" />
          <motion.img
            variants={FadeLeft(1.4)}
            initial="hidden"
            animate={inView2 ? "visible" : {}}
            transition={{ duration: 1, delay: 1.6 }}
            className='col-span-2 lg:col-span-1 rounded-lg drop-shadow-md w-[600px] mt-10 translate-y-0 lg:translate-y-10' src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80" alt="" />
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0 }}
          animate={inView3 ? { opacity: 1 } : {}}
          transition={{ type: 'spring', duration: 1, delay: .5 }}
          className="my-10 md:my-20 grid grid-cols-5 gap-10 lg:gap-20 items-center md:text-start text-center">
          <motion.div
            variants={FadeRight(.2)}
            initial="hidden"
            animate={inView3 ? "visible" : {}}
            transition={{ duration: 1, delay: 1 }}
            className="grid col-span-5 lg:col-span-3 gap-4 ">
            <motion.h2
              variants={FadeRight(.4)}
              initial="hidden"
              animate={inView3 ? "visible" : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className='dark:text-white text-black text-4xl lg:text-5xl font-bold font-poppins '>We approach the workplace as something that adds to our lives and adds value to world.</motion.h2>
            <motion.p
              variants={FadeRight(.6)}
              initial="hidden"
              animate={inView3 ? "visible" : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className='dark:text-gray-400 text-gray-600 text-xl font-poppins'>Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.</motion.p>
          </motion.div>
          <div className="col-span-2 hidden lg:grid">
          </div>
          <motion.div
            className="col-span-5 grid-cols-4 grid gap-3 items-end">
            <motion.div
              variants={FadeUp(.2)}
              initial="hidden"
              animate={inView3 ? "visible" : {}}
              transition={{ duration: 1, delay: .5 }}
              className="bg-white justify-between items-center col-span-4  lg:col-span-1 shadow rounded-lg flex lg:flex-col  flex-row-reverse lg:grid gap-4 p-4 h-auto lg:h-40">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView3 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: .7 }}
                className='text-black text-3xl lg:text-4xl font-bold font-poppins'>250K</motion.h3>
              <span className=' grid items-end '>
                <div className='text-start'>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: .9 }}
                    className='text-gray-600 text-xl font-poppins'>Users on the platform</motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.1 }}
                    className='text-gray-400 text-base font-poppins'>Vel labore deleniti veniam consequuntur sunt nobis.</motion.p>
                </div>
              </span>
            </motion.div>
            <motion.div
              variants={FadeUp(.4)}
              initial="hidden"
              animate={inView3 ? "visible" : {}}
              transition={{ duration: 1, delay: .7 }}
              className="col-span-4 flex-row-reverse justify-between items-center lg:col-span-2 dark:bg-gray-800 bg-black shadow rounded-lg flex lg:grid gap-4 p-4 h-auto lg:h-80">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView3 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: .9 }}
                className='text-white text-3xl lg:text-4xl font-bold text-nowrap font-poppins'>$8.9 billion</motion.h3>
              <span className=' grid items-end '>
                <div className='text-start'>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.1 }}
                    className='text-gray-200 text-xl font-poppins'>We’re proud that our customers have made over $8 billion in total revenue.</motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.3 }}
                    className='text-gray-500 text-lg font-poppins'>Eu duis porta aliquam ornare. Elementum eget magna egestas.</motion.p>
                </div>
              </span>
            </motion.div>
            <motion.div
             variants={FadeUp(.6)}
             initial="hidden"
             animate={inView3 ? "visible" : {}}
             transition={{ duration: 1, delay: 1.1 }}
            className="items-center col-span-4 flex-row-reverse lg:col-span-1 shadow bg-secondary rounded-lg flex justify-between lg:grid gap-2 p-4 h-auto lg:h-60">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView3 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.1 }}
                className='text-white text-3xl lg:text-4xl font-bold font-poppins'>401,093</motion.h3>
              <span className=' grid items-end'>
                <div className='text-start'>
                  <motion.p
                   initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.3 }}
                  className='text-gray-600 text-xl font-poppins'>Transactions this year</motion.p>
                  <motion.p
                   initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.6 }}
                  className='text-gray-200 text-base font-poppins'>Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.</motion.p>
                </div>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default Nosotros