import { useState } from "react"

const Bar = (props) => {

  const [isHover, setIsHover] = useState(false); 
  const { onclick } = props; 

  return (
    <div className="flex flex-col gap-[5px] cursor-pointer py-3" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={onclick}>
        <span className="bg-slate-700 w-8 h-[2px] rounded-full"></span>
        <div className="flex justify-end">
            <span className={`${isHover ? "w-8" : ""} bg-slate-700 w-4 h-[2px] rounded-full transition-all`}></span>
        </div>
    </div>
  )
}

export default Bar