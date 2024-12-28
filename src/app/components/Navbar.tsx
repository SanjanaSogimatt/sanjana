import React from 'react'
const navItems=['Home','About','Projects','Contact']
const Navbar = () => {
  return (
      <div className='relative fixed top-0 border border-white/20  w-full z-50 h-16'>
          <header className='absolute top-1/2 w-full h-full -translate-y-1/2'>
              <nav className='flex size-full items-center justify-between p-4'>
                  <div className="brand flex items-center space-x-2">
                      <a href="/" className='flex items-center space-x-2'>
                      <img src="/logo.jpg" alt="" className='object-contain rounded-full w-10'/>
                          <h1 className='leading-[1] '>Sanjana <br /> Sogimatt</h1>
                      </a>
                  </div>
                  
              </nav>
          </header>
    </div>
  )
}

export default Navbar