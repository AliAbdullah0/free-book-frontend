import React, { useState } from 'react'
import { Link } from 'react-router'
import Links from './Links'

function Sidebar() {
   const [dropDown, setDropdown] = useState(false)

   const handleMobileDropdown = () => {
      setDropdown((prev) => !prev)
   }

   return (
      <>
         <div className='md:min-w-[15%] max-w-[23%] w-full h-fit md:h-screen bg-gray-900 text-neutral-200'>
            <div className='md:size-full w-full h-14 flex md:flex-col flex-row gap-2 justify-between p-4'>
               <div className='flex md:flex-col gap-2 md:gap-0'>
                  <Link to='/'>
                  <h1 class="mb-4 text-2xl md:text-3xl font-extrabold hidden md:block tracking-tight leading-none text-gray-900 lg:4xl dark:text-white">Free Book Archive</h1>
                  </Link>
                  <h1 class="mb-4 text-xl font-semibold tracking-tight hidden md:block leading-none text-gray-900 lg:text-2xl dark:text-blue-400">Categories</h1>
                  <div className='w-full md:flex hidden flex-col gap-2'>

                     <ul class="space-y-4 text-left text-gray-500 text-sm lg:text-base dark:text-gray-400">
                        <Links to='htmlbooks' title={'HTML'}/>
                        <Links to='cssbooks' title={'CSS'}/>
                        <Links to='jsbooks'title={'Javascript'}/>
                        <Links to='pybooks'title={'Python'}/>
                        <Links to='dbbooks'title={'Databases'}/>
                        <Links to='perlbooks'title={'Perl'}/>
                     </ul>

                  </div>
               </div>
               <div className='md:w-full mb-20'>
                  <nav class="bg-white dark:bg-gray-900 fixed sm:block md:hidden sm:text-base overflow-x-hidden text-sm w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                 <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                 <Link to='/' class="flex items-center space-x-3 rtl:space-x-reverse">
                     <span class="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">Free Books</span>
                 </Link>
                 <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> 
                     <button onClick={handleMobileDropdown} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                       <span class="sr-only">Open main menu</span>
                       <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                       </svg>
                   </button>
                 </div>
                 {
                  dropDown &&
                 <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                   <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 overflow-scroll">
                     <li>
                       <Link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                     </li>
                     <li>
                       <Link to='htmlbooks' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">HTML</Link>
                     </li>
                     <li>
                       <Link to="cssbooks" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CSS</Link>
                     </li>
                     <li>
                       <Link to='jsbooks' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Javascript</Link>
                     </li>
                     <li>
                       <Link to='pythonbooks' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Python</Link>
                     </li><li>
                       <Link to='cppbooks' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">C++</Link>
                     </li>
                   </ul>
                 </div>
                 }

                 </div>
               </nav>
               </div>
            </div>
            
         </div>
      </>
   )
}

export default Sidebar
