import LiveProjectButton from "../elements/LiveProjectButton"
import GithubProjectButton from "../elements/GithubProjectButton"
import TechStackCard from "./TechStackCard"
import { motion } from "framer-motion"

const ProjectCard = (props) => {
  const {image, title, description, techStack1, techStack2, techStack3, techStack4, reverse, gradient, urlDemo, urlGit, duration, text} = props
  const isMobile = window.innerWidth <= 768;

  if(isMobile) {
  return (
    <div className={`rounded-3xl p-[2px] ${gradient} mt-10`}>
        <div className={`xl:flex shadow ${reverse} xl:h-[450px] p-6 bg-slate-50 rounded-[calc(25px-3px)] gap-5`}>
            <div className={`w-[100%] xl:w-[40rem] h-[400px] rounded-3xl overflow-hidden ease-linear ${duration} 
                bg-cover bg-top hover:bg-bottom cursor-pointer shadow-sm`} style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='xl:w-[35rem] text-center flex flex-col justify-center items-center xl:mt-0 mt-10'>
                <h1 className='text-3xl font-bold text-slate-600'>{title}</h1>
                <p className='text-slate-500 mt-5 xl:w-[30rem]'>{description}</p>
                <div className="flex justify-center items-center gap-6 mt-10">
                    <LiveProjectButton
                        url={urlDemo}
                        text={text}
                    />
                    <GithubProjectButton
                        url={urlGit}
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center mt-10 gap-5">
                    <p className='text-lg font-medium text-slate-600 my-5 border-r-2 border-slate-300 pr-10'>Tech Stack</p>
                    <TechStackCard
                        image={techStack1}
                        width='w-[40px]'
                    />
                    <TechStackCard
                        image={techStack2}
                        width='w-[40px]'
                    />
                    <TechStackCard
                        image={techStack3}
                        width='w-[40px]'
                    />
                    <TechStackCard
                        image={techStack4}
                        width='w-[40px]'
                    />
                </div>
            </div>
        </div>
    </div>
    )
    } 
    return (
        <motion.div className={`rounded-3xl p-[2px] ${gradient} mt-10`}
        initial={{ opacity: 0, translateX: 500}}
        whileInView={{ opacity: 1, translateX: 0}}
        viewport={{once: true}}
        transition={{
            delay: 0.2
        }}
    >
        <div className={`xl:flex shadow ${reverse} xl:h-[450px] p-6 bg-slate-50 rounded-[calc(25px-3px)] gap-5`}>
            <div className={`w-[100%] xl:w-[40rem] h-[400px] rounded-2xl overflow-hidden ease-linear ${duration} 
                bg-cover bg-top hover:bg-bottom cursor-pointer shadow-sm`} style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='xl:w-[35rem] text-center flex flex-col justify-center items-center xl:mt-0 mt-10'>
                <h1 className='text-3xl font-bold text-slate-600'>{title}</h1>
                <p className='text-slate-500 leading-loose mt-5 xl:w-[27rem]'>{description}</p>
                <div className="flex justify-center items-center gap-3 mt-10">
                    <LiveProjectButton
                        url={urlDemo}
                        text={text}
                    />
                    <GithubProjectButton
                        url={urlGit}
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center mt-10 gap-5">
                    <p className='text-lg font-medium text-slate-600 my-5 border-r-2 border-slate-300 pr-10'>Tech Stack</p>
                    {techStack1 && 
                        <TechStackCard
                            image={techStack1}
                            width='w-[40px]'
                            height='h-[40px]'
                        />
                    }
                    {techStack2 && 
                        <TechStackCard
                            image={techStack2}
                            width='w-[40px]'
                            height='h-[40px]'
                        />
                    }
                    {techStack3 && 
                        <TechStackCard
                            image={techStack3}
                            width='w-[40px]'
                            height='h-[40px]'
                        />
                    }
                    {techStack4 && 
                        <TechStackCard
                            image={techStack4}
                            width='w-[40px]'
                            height='h-[40px]'
                        />
                    }
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default ProjectCard