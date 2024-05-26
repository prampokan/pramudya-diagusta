import TechStackCard from '../fragments/TechStackCard'
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section className='bg-zinc-100 xl:h-screen py-32 xl:py-0 w-full flex justify-center items-center px-5 xl:px-0 scroll-smooth' id='home'>
        <div className='w-[75rem]'>
            <div className='xl:flex justify-center items-center'>
                <motion.div className=''
                    initial={{ opacity: 0, translateY: 200}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    viewport={{once: true}} 
                >
                    <div className='flex items-center gap-2'>
                        <h3 className='text-xl sm:text-3xl font-bold text-slate-600'>Pramudya Diagusta.</h3>
                    </div>
                    <div className='text-3xl sm:text-5xl font-bold text-slate-700 mt-5 sm:leading-tight leading-tight'>
                        <span className="bg-gradient-to-r from-sky-300 to-zinc-50 h-7 sm:h-10 w-48 sm:w-72 -rotate-2 absolute translate-x-6 sm:translate-x-10 translate-y-1 sm:translate-y-3 opacity-75"></span>
                        <h2 className='relative z-[10]'>a passionate web developer who crafting dynamic and interactive web applications</h2>
                    </div>        
                    <div className="text-slate-800 text-3xl flex gap-3 mt-10">
                        <a href="https://www.linkedin.com/in/pramudya-diagusta-853821251/" target="_blank"><i className="fa-brands fa-linkedin icons ease-linear duration-200 hover:text-blue-500"></i></a>
                        <a href="https://github.com/prampokan" target="_blank"><i className="fa-brands fa-github icons ease-linear duration-200 hover:text-blue-500"></i></a>
                    </div>
                </motion.div>
                <motion.div className='xl:mt-0 mt-10 xl:mb-0 mb-16 '
                     initial={{ opacity: 0, translateY: 200}}
                     whileInView={{ opacity: 1, translateY: 0}}
                     transition={{duration: 0.5}}
                     viewport={{once: true}}    
                >
                    <img src="images/face.jpg" alt="" className='xl:w-[650px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-white shadow-sm' />
                </motion.div>
            </div>
            <motion.div className='flex flex-wrap gap-4 2xl:mt-10'
                initial={{ opacity: 0, translateY: 100}}
                whileInView={{ opacity: 1, translateY: 0}}
                transition={{duration: 0.5, delay: 0.4}}
                viewport={{once: true}} 
            >
                <p className='text-xl font-medium text-slate-600 my-5 border-r-2 border-slate-300 pr-10'>Tech Stack</p>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                    viewport={{once: true}}
                >
                    <TechStackCard
                        image='images/javascript.png'
                        bgColor='bg-yellow-300'
                        width='w-[55px]'
                        height='h-[55px]'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    viewport={{once: true}}
                >
                <TechStackCard
                    image='images/typescript.png'
                    bgColor='bg-sky-600'
                    width='w-[55px]'
                    height='h-[55px]'
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    viewport={{once: true}}
                >
                <TechStackCard
                    image='images/react.png'
                    bgColor='bg-slate-800'
                    width='w-[55px]'
                    height='h-[55px]'
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 0.7}}
                    viewport={{once: true}}
                >
                <TechStackCard
                    image='images/next.png'
                    bgColor='bg-white'
                    width='w-[55px]'
                    height='h-[55px]'
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 0.8}}
                    viewport={{once: true}}
                >
                <TechStackCard
                    image='images/astro.png'
                    bgColor='bg-slate-900'
                    width='w-[55px]'
                    height='h-[55px]'
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 0.9}}
                    viewport={{once: true}}
                >
                <TechStackCard
                    image='images/node.png'
                    bgColor='bg-green-200'
                    width='w-[55px]'
                    height='h-[55px]'
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 1}}
                    viewport={{once: true}}
                >
                <TechStackCard
                    image='images/express.png'
                    bgColor='bg-white'
                    width='w-[55px]'
                    height='h-[55px]'
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100}}
                    whileInView={{ opacity: 1, translateY: 0}}
                    transition={{duration: 0.5, delay: 1.1}}
                    viewport={{once: true}}
                >
                <TechStackCard
                    image='images/tailwind.png'
                    bgColor='bg-slate-800'
                    width='w-[55px]'
                    height='h-[55px]'
                />
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default Banner