import React from 'react'

const GithubProjectButton = (props) => {
  const {url} = props
  return (
    <a href={url} target="_blank" className='flex text-zinc-600 font-medium gap-2 text-lg justify-center items-center cursor-pointer ease-linear duration-200 hover:text-blue-500'> 
      Code
      <i className="fa-brands fa-github icons text-xl"></i>
    </a>
  )
}

export default GithubProjectButton