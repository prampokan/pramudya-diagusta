import TechStackCard from "./TechStackCard"
import GithubProjectButton from "../elements/GithubProjectButton"
import { motion } from "framer-motion"
import LiveProjectButton from "../elements/LiveProjectButton"

const MobileProjectCard = () => {
  const isMobile = window.innerWidth <= 768;
  if(isMobile) {
  return (
    <div className={`rounded-3xl p-[2px] bg-gradient-to-br from-green-300 via-slate-50 to-green-300 mt-10`}>
        <div className='bg-slate-50 w-full sm:h-[40rem] pt-10 rounded-[calc(25px-3px)] text-center flex flex-col items-center sm:overflow-hidden shadow p-10'>
            <h1 className='text-3xl font-bold text-slate-600'>Bangkit Capstone Project</h1>
            <p className='text-slate-500 mt-5 xl:w-[50rem] leading-relaxed'>I participated in the Bangkit Academy program under the Cloud Computing learning path. For our Bangkit capstone project, we developed an application to detect spoiled and fresh meat. I contributed to the backend development and deployment of the application on Google Cloud.</p>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-5 sm:mt-0">
                <LiveProjectButton
                    url="https://meatopia.vercel.app/"
                    text="Landing Page"
                />
                <GithubProjectButton
                    url="https://github.com/prampokan/spotify-clone"
                />
            </div>
            <div className='flex'>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: -6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/meatopia1.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer mt-5 sm:mt-0 z-[10]'
                    initial={{
                        translateY: 30
                    }}
                    whileHover={{
                        translateY: 20,
                    }}
                >
                    <img src="images/meatopia2.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: 6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/meatopia3.png" alt="" className=''/>
                </motion.div>
            </div>
        </div>
    </div>
  )
} 

return (
    <motion.div className={`rounded-3xl p-[2px] bg-gradient-to-br from-green-300 via-slate-50 to-green-300 mt-10`}
    initial={{ opacity: 0, translateX: 500}}
    whileInView={{ opacity: 1, translateX: 0}}
    viewport={{once: true}}
    transition={{
        delay: 0.2
    }}
    >
        <div className='bg-slate-50 w-full sm:h-[43rem] pt-10 rounded-[calc(25px-3px)] text-center flex flex-col items-center sm:overflow-hidden shadow p-10'>
            <h1 className='text-3xl font-bold text-slate-600'>Bangkit Capstone Project</h1>
            <p className='text-slate-500 mt-3 xl:w-[50rem]'>I participated in the Bangkit Academy program under the Cloud Computing learning path. For our Bangkit capstone project, we developed an application to detect spoiled and fresh meat. I contributed to the backend development and deployment of the application on Google Cloud.</p>
            <div className="flex flex-wrap justify-center items-center mt-5 gap-5">
                <LiveProjectButton
                    url="https://meatopia.vercel.app/"
                    text="Landing Page"
                />
                <GithubProjectButton
                    url="https://github.com/prampokan/spotify-clone"
                />
            </div>
            <div className='flex'>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: -6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/meatopia1.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer mt-5 sm:mt-0 z-[10]'
                    initial={{
                        translateY: 30
                    }}
                    whileHover={{
                        translateY: 20,
                    }}
                >
                    <img src="images/meatopia2.png" alt="" className=''/>
                </motion.div>
                <motion.div className='w-44 lg:w-60 ease-in-out cursor-pointer hidden sm:block'
                    initial={{
                        rotate: 6,
                        translateY: 60
                    }}
                    whileHover={{
                        translateY: 50,
                    }}
                >
                    <img src="images/meatopia3.png" alt="" className=''/>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default MobileProjectCard