import { motion } from "framer-motion"
import { useState } from "react"


const ExperienceCard = (props) => {
    const [open, setOpen] = useState(false); 
    console.log(open);

    const { title, image, description, projectImg1, projectImg2, projectImg3, tech1, tech2, tech3 } = props

    return (
    <motion.div
        className={`${open ? "h-[630px]" : " h-[360px]"} bg-white shadow-sm border rounded-3xl flex flex-col items-center overflow-hidden`}
        animate={{ height: open ? "630px" : "360px" }}
        transition={{ duration: 0.3 }}
    >
        <div className="w-20 h-20 border rounded-2xl p-5 flex items-center justify-center mt-8">
            <img src={image} alt=""/>
        </div>
        <h1 className="text-slate-700 font-semibold text-2xl mt-4">{title}</h1>
        <h2 className="text-red-400 font-medium text-lg cursor-pointer flex gap-1 items-center hover:gap-2 transition-all" onClick={() => setOpen(!open)}>{`${open ? "See Less" : "See More"}`}<i className="fa-solid fa-arrow-right text-sm"></i></h2>
        <div className='flex'>
            <motion.div className='w-44 h-32 rounded-xl hidden sm:block'
                initial={{
                    rotate: -4,
                    translateX: 10,
                    translateY: 35
                }}
                whileHover={{
                    translateY: 32,
                }}
            >
                <img src={projectImg1} alt="" className='rounded-xl'/>
            </motion.div>
            <motion.div className='w-44 h-32 z-[10] rounded-xl'
                initial={{
                    translateY: 20
                }}
                whileHover={{
                    translateY: 17,
                }}
            >
                <img src={projectImg2} alt="" className='rounded-xl'/>
            </motion.div>
            <motion.div className='w-44 h-32 rounded-xl hidden sm:block'
                initial={{
                    rotate: 4,
                    translateX: -10,
                    translateY: 35
                }}
                whileHover={{
                    translateY: 32,
                }}
            >
                <img src={projectImg3} alt="" className='rounded-xl'/>
            </motion.div>
        </div>
        <div className="mt-11 pt-8 px-6 bg-white z-10 w-full">
            <div className="flex gap-2 mb-2">
                { tech1 &&
                    <div className="text-[10px] font-medium border px-2 py-1 rounded">
                        {tech1}
                    </div>
                }
                { tech2 &&
                    <div className="text-[10px] font-medium border px-2 py-1 rounded">
                        {tech2}
                    </div>
                }
                { tech3 &&
                    <div className="text-[10px] font-medium border px-2 py-1 rounded">
                        {tech3}
                    </div>
                }
            </div>
            <p className="text-slate-500 leading-loose text-sm mt-3">
                {description}
            </p>
        </div>
    </motion.div>
  )
}

export default ExperienceCard