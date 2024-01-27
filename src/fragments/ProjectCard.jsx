import LiveProjectButton from "../elements/LiveProjectButton"
import GithubProjectButton from "../elements/GithubProjectButton"
import TechStackCard from "./TechStackCard"

const ProjectCard = (props) => {
  const {image, title, description, techStack1, techStack2, techStack3, techStack4, reverse, gradient, urlDemo, urlGit} = props
  return (
    <div className={`rounded-3xl p-[2px] ${gradient} mt-10`}>
        <div className={`xl:flex shadow ${reverse} xl:h-[450px] p-6 bg-zinc-50 rounded-[calc(25px-3px)] gap-5`}>
            <div className={`w-[100%] xl:w-[40rem] h-[400px] rounded-3xl overflow-hidden ease duration-[3s] 
                bg-cover bg-top hover:bg-bottom cursor-pointer shadow-sm`} style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='xl:w-[35rem] text-center flex flex-col justify-center items-center xl:mt-0 mt-10'>
                <h1 className='text-3xl font-bold text-zinc-600'>{title}</h1>
                <p className='text-zinc-500 mt-5 xl:w-[30rem]'>{description}</p>
                <div className="md:flex justify-center items-center gap-6 mt-10">
                    <LiveProjectButton
                        url={urlDemo}
                    />
                    <GithubProjectButton
                        url={urlGit}
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center mt-10 gap-5">
                    <p className='text-lg font-medium text-zinc-600 my-5 border-r-2 border-zinc-300 pr-10'>Tech Stack</p>
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

export default ProjectCard