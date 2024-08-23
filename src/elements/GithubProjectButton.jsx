import React from 'react'

const GithubProjectButton = (props) => {
  const {url} = props
  return (
    <a href={url} target="_blank" className='border rounded-lg py-2 px-4 flex text-zinc-600 font-medium gap-2 text-lg justify-center items-center cursor-pointer ease-linear duration-200 hover:text-blue-500'> 
      <i className="fa-brands fa-github icons text-xl"></i>
      Code
    </a>
  )
}

export default GithubProjectButton