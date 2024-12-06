import React from 'react'
import { Link } from 'react-router'

function Category({link,title,description}) {
    
    return (
                    <div class="sm:w-1/4 w-full p-4 bg-white border border-gray-200 rounded-lg hover:transition-all hover:shadow-xl hover:scale-[1.02] md:hover:scale-105 shadow dark:bg-gray-800 dark:border-gray-700">

                        <Link to={link}>
                            <h5 class="mb-2 sm:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </Link >
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
                        <Link to={link} class="inline-flex font-medium items-center text-blue-600 hover:underline">
                            Check out
                            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </Link>
                    </div>
    )
}

export default Category
