import React from 'react'

const NavLink = ({title}) => {
  return (
    <div className='p-2 text-lg h-full hover:bg-slate-300 transition ease-in-out duration-300 mr-4'>
        <a href="#">{title}</a>
    </div>
  )
}

export default NavLink