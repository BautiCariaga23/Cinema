"use client"
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <nav className="border-b-2 border-b-gray-900 bg-transparent">
        <div className="w-full flex justify-between items-center p-4">
          <Link href={"/homepage"} className='flex justify-start'>
            <h2 className='font-black italic tracking-widest'>CINEMA</h2>
          </Link>
          <div className="mr-5">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
    text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
    dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul
                className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row 
      md:space-x-8 md:mt-0 md:border-0"
              >
                <li>
                  <a
                    className="duration-300 relative bottom-0 block py-2 pl-3 pr-4 text-gray-900 font-black
          md:p-0 dark:text-white md:dark:hover:text-gray-500 hover:cursor-pointer hover:bottom-0.5 hover:duration-300"
                  >
                    PACKS
                  </a>
                </li>
                <li>
                  <a
                    className="duration-300 relative bottom-0 block py-2 pl-3 pr-4 text-gray-900 font-black
          md:p-0 dark:text-white md:dark:hover:text-gray-500 hover:cursor-pointer hover:bottom-0.5 hover:duration-300"
                  >
                    CONTACT
                  </a>
                </li>
                <li>
                  <a
                    className="duration-300 relative bottom-0 block py-2 pl-3 pr-4 text-gray-900 font-black
          md:p-0 dark:text-white md:dark:hover:text-gray-500 hover:cursor-pointer hover:bottom-0.5 hover:duration-300"
                  >
                    MOVIES
                  </a>
                </li>
                <li>
                  <Link href={"/login"}
                    className="duration-300 relative bottom-0 block py-2 pl-3 pr-4 text-gray-900 font-black
          md:p-0 dark:text-white md:dark:hover:text-gray-500 hover:cursor-pointer hover:bottom-0.5 hover:duration-300"
                  >
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
