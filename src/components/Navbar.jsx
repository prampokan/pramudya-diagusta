import { useState, useRef, useEffect } from "react"
import Bar from "../elements/Bar"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-white flex w-full justify-center items-center h-[4.5rem] fixed shadow-sm px-5 xl:px-0 z-[999]'>
        <div className='flex w-[75rem] justify-between items-center text-slate-800'>
            <div className='text-xl font-semibold'>
                <a href="/">
                pramudev
                </a>
            </div>
            <div className="flex gap-10 items-center">
                <ul className={`hidden md:flex gap-8 text-lg font-medium bg-white w-full transition-all duration-300 ease-in`}>
                    <li className="ease-linear duration-200 hover:text-sky-500"><a href="#home">Home</a></li>
                    <li className="ease-linear duration-200 hover:text-sky-500"><a href="#projects">Projects</a></li>
                    <li className="ease-linear duration-200 hover:text-sky-500"><a href="#experience">Experience</a></li>
                    <li className="ease-linear duration-200 hover:text-sky-500"><a href="#contact">Contact</a></li>
                </ul>
                <div className="relative flex flex-col" ref={divRef}>
                    <Bar onclick={() => setOpen(!open)}/>
                    <div className={`${open ? "opacity-100 translate-y-7" : "invisible"} shadow-sm rounded-md p-2 w-44 opacity-0 bg-white absolute top-8 right-0 transition-all flex flex-col gap-2 z-99`}>
                        <a href="#home" className="flex md:hidden justify-between text-slate-700 p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100">
                            <h1 className='font-semibold text-sm'>Home</h1>
                        </a>
                        <a href="#projects" className="flex md:hidden justify-between text-slate-700 p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100">
                            <h1 className='font-semibold text-sm'>Projects</h1>
                        </a>
                        <a href="#experience" className="flex md:hidden justify-between text-slate-700 p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100">
                            <h1 className='font-semibold text-sm'>Experience</h1>
                        </a>
                        <a href="#contact" className="flex md:hidden justify-between text-slate-700 p-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100">
                            <h1 className='font-semibold text-sm'>Contact</h1>
                        </a>
                        <a href="https://tekkomai.vercel.app/" target="_blank" className="flex justify-between text-slate-700 px-2 py-2 bg-slate-50 rounded-md items-center shadow-inner cursor-pointer transition-all hover:bg-slate-100">
                            <h1 className='font-semibold text-sm'>try my AI</h1>
                            <span>✨</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar