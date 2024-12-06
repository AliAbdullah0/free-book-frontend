import React from 'react'
import { Link } from 'react-router'

function Links({to,title}) {
  return (
    <Link to={to}>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
                           <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                           </svg>
                           <span>{title}</span>
                        </li>
                        </Link>
  )
}

export default Links
