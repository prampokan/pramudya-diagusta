import React from 'react'

const LiveProjectButton = (props) => {
 const {url} = props 
  return (
    <a href={url} target="_blank" className='flex text-zinc-600 font-medium gap-2 text-lg justify-center items-center cursor-pointer ease-linear duration-200 hover:text-blue-500'> 
      Live Demo
      <i className="fa-solid fa-arrow-up-right-from-square link-icon text-[16px]"></i> 
    </a>
  )
}

export default LiveProjectButton