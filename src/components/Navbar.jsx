import { useState } from "react"

const Navbar = () => {
const [open, setOpen] = useState(false)
  return (
    <div className='bg-white flex w-full justify-center items-center py-6 fixed shadow-sm px-5 xl:px-0 z-[999]'>
        <div className='xl:flex w-[75rem] justify-between items-center text-zinc-800'>
            <div className='text-xl font-bold'>
                pramudev
            </div>
            <div onClick={() => setOpen(!open)} className="text-zinc-700 text-2xl absolute right-5 top-7 cursor-pointer xl:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
            <div>
                <ul className={`xl:flex gap-8 text-lg font-semibold absolute xl:static bg-white w-full xl:z-auto z-[-1] left-0 xl:w-auto px-5 xl:px-0 pb-5 xl:pb-0 transition-all duration-300 ease-in ${open ? 'top-12 opacity-100' : 'top-[-100px] opacity-0 xl:opacity-100'}`}>
                    <li className="xl:mb-0 mb-5 xl:mt-0 mt-10 ease-linear duration-200 hover:text-blue-500"><a href="#home">Home</a></li>
                    <li className="xl:mb-0 mb-5 ease-linear duration-200 hover:text-blue-500"><a href="#projects">Projects</a></li>
                    <li className="xl:mb-0 mb-5 ease-linear duration-200 hover:text-blue-500"><a href="#experience">Experience</a></li>
                    <li className="xl:mb-0 mb-5 ease-linear duration-200 hover:text-blue-500"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar