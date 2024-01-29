import ProjectCard from "../fragments/ProjectCard"
import MobileProjectCard from "../fragments/MobileProjectCard"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <section className='w-full bg-white flex justify-center items-center py-20 px-5 xl:px-0' id="projects">
        <div className='w-[75rem]'>
            <h1 className='text-3xl xl:text-5xl font-bold text-zinc-600 mb-5 flex'>
                <motion.div
                    initial={{ translateY: 50, translateX: -50, opacity: 0}}
                    whileInView={{ translateY: 0, translateX: 0, opacity: 1}}
                    transition={{duration: 0.7}}
                    viewport={{once: true}}
                >
                    🚀
                </motion.div>
                Highlighted Projects
            </h1>
            <p className='xl:w-[40rem] leading-loose text-zinc-500'>I work on various projects, such as front-end websites and full-stack sites with databases, Javascript is a perfect language for those projects, but I also work on mobile apps using react native!</p>
            <div>
                <ProjectCard 
                    title="Dinoco🦕"
                    description="Dinoco is a website that provide various type of car that stored into MySql Database, the backend is built with Node Js using Express Framework, React and Tailwind for the frontend development"
                    image="images/dinoco.png"
                    techStack1="images/react.png"
                    techStack2="images/tailwind.png"
                    techStack3="images/node.png"
                    techStack4="images/express.png"
                    reverse="flex-row"
                    gradient="bg-gradient-to-br from-red-300 via-zinc-50 to-red-300"
                    urlGit="https://github.com/prampokan/car-website"
                />
                <ProjectCard 
                    title="Cryptosans🪙"
                    description="Cryptosans is a website that shows real time data of Crypto Currency, consume API from Coin Gecko API's, built using React and Tailwind"
                    image="images/cryptosans.png"
                    techStack1="images/react.png"
                    techStack2="images/tailwind.png"
                    reverse="flex-row-reverse"
                    gradient="bg-gradient-to-br from-sky-300 via-zinc-50 to-sky-300"
                    urlDemo="https://cryptosans.vercel.app/"
                    urlGit="https://github.com/prampokan/cryptosans"
                />
                <MobileProjectCard/>
            </div>
        </div>
    </section>
  )
}

export default Projects