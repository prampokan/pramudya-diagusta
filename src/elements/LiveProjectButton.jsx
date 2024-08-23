import React from 'react'

const LiveProjectButton = (props) => {
 const {url, text} = props 
  return (
    <a href={url} target="_blank" className='border rounded-lg py-2 px-4 flex text-zinc-600 font-medium gap-2 text-lg justify-center items-center cursor-pointer ease-linear duration-200 hover:text-blue-500'> 
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
      {text}
    </a>
  )
}

export default LiveProjectButton