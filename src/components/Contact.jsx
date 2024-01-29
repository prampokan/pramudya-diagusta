import { motion } from "framer-motion"

const Contact = () => {

    const phoneNumber = '6281250861588'
    const handleWhatsapp = () => {
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`
        window.open(url, '_blank')
    };

    const emailAddress = 'pramudyadiagusta@gmail.com'
    const handleEmail = () => {
        const url = `mailto:${emailAddress}`
        window.location.href = url
    }

  return (
    <div className='flex justify-center items-center pt-32 pb-12 bg-slate-950 px-5 xl:px-0' id='contact'>
        <div className='w-[75rem]'>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{once: true}}
                transition={{
                    delay: 0.1
                }}
            >
                <h1 className='text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white font-bold'>Get in touch with me!<span className='text-white'>👇🏻</span></h1>
            </motion.div>
            <motion.div className='sm:flex gap-16 items-center sm:mt-16 mt-10'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{once: true}}
                transition={{
                    delay: 0.3
                }}
            >
                <img src="images/face.jpg" alt="" className='w-32 rounded-full' />
                <span className='absolute text-5xl translate-x-16 sm:translate-y-10 -translate-y-12'>🔥</span>
                <div className='flex flex-col gap-8'>
                    <p className='text-xl text-transparent bg-clip-text bg-gradient-to-t from-sky-500 to-sky-200 mt-10 sm:mt-0'>Contact me via</p> 
                    <div className='text-xl'>
                        <div onClick={handleEmail} className='text-sky-100 flex items-center gap-2 mb-1 cursor-pointer'>
                            <i class="fa-solid fa-envelope text-[17px]"></i>
                            prampokan@gmail.com
                        </div>
                        <div onClick={handleWhatsapp} className='text-sky-100 flex items-center gap-2 cursor-pointer'>
                            <i class="fa-brands fa-whatsapp"></i>
                            +6281250861588
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{once: true}}
                transition={{
                    delay: 0.5
            }}
            >
            <p className='text-lg text-cyan-700 mt-20'>✨Built with React and Tailwind by Pramudya Diagusta</p> 
            </motion.div>
        </div>
    </div>
  )
}

export default Contact