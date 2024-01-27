import TechStackCard from '../fragments/TechStackCard'

const Banner = () => {
  return (
    <section className='bg-zinc-100 xl:h-screen py-32 xl:py-0 w-full flex justify-center items-center px-5 xl:px-0 scroll-smooth' id='home'>
        <div className='w-[75rem]'>
            <div className='xl:flex justify-center items-center'>
                <div className=''>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-3xl font-bold text-zinc-600'>Pramudya Diagusta.</h3>
                    </div>
                    <h2 className='text-5xl font-bold text-zinc-700 mt-5 leading-tight'>a passionate web developer who crafting dynamic and interactive web applications</h2>
                    <div className="text-zinc-800 text-3xl flex gap-3 mt-10">
                        <a href="https://www.linkedin.com/in/pramudya-diagusta-853821251/" target="_blank"><i className="fa-brands fa-linkedin icons ease-linear duration-200 hover:text-blue-500"></i></a>
                        <a href="https://github.com/prampokan" target="_blank"><i className="fa-brands fa-github icons ease-linear duration-200 hover:text-blue-500"></i></a>
                    </div>
                </div>
                <div className='xl:mt-0 mt-10 xl:mb-0 mb-16 '>
                    <img src="images/face.jpg" alt="" className='xl:w-[650px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-white shadow-sm' />
                </div>
            </div>
            <div className='flex flex-wrap gap-4'>
                <p className='text-xl font-medium text-zinc-600 my-5 border-r-2 border-zinc-300 pr-10'>Tech Stack</p>
                <TechStackCard
                    image='images/html.svg'
                    bgColor='bg-red-500'
                    hover='hover:-rotate-6'
                    width='w-[50px]'
                />
                <TechStackCard
                    image='images/css.png'
                    bgColor='bg-blue-700'
                    hover='hover:-rotate-6'
                    width='w-[50px]'
                />
                <TechStackCard
                    image='images/javascript.png'
                    bgColor='bg-yellow-300'
                    hover='hover:-rotate-6'
                    width='w-[50px]'
                />
                <TechStackCard
                    image='images/react.png'
                    bgColor='bg-slate-800'
                    hover='hover:-rotate-6'
                    width='w-[50px]'
                />
                <TechStackCard
                    image='images/node.png'
                    bgColor='bg-green-200'
                    hover='hover:-rotate-6'
                    width='w-[50px]'
                />
                <TechStackCard
                    image='images/express.png'
                    bgColor='bg-white'
                    hover='hover:-rotate-6'
                    width='w-[50px]'
                />
                <TechStackCard
                    image='images/tailwind.png'
                    bgColor='bg-slate-800'
                    hover='hover:-rotate-6'
                    width='w-[50px]'
                />
            </div>
        </div>
    </section>
  )
}

export default Banner