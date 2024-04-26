import React from 'react'

function Header() {
  return (
       <header className="fixed top-0 left-0 right-0 text-white flex justify-center max-h-20 min-h-20 font-mono text-xl z-50">
        <div className="w-4/6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-300 p-4 rounded-lg shadow-lg max-h-20 rounded-b-lg flex justify-evenly items-center text-black hover:text-red-400">
          <h1 className="font-black italic antialiased hover:subpixel-antialiased animate-pulse">
            FLICKFUSION
          </h1>
          <input
            type="text"
            className="border border-gray-300 rounded-lg shadow-lg pl-1"
          />
          <nav className="flex no-underline list-none gap-12">
            <li>Home</li>
            <li>Movies</li>
            <li>About</li>
            <li>Others</li>
          </nav>
        </div>
      </header>
  )
}

export default Header
