import React from 'react'
import { Link } from 'react-router'

function PageHeading({title}) {
  return (
    <div className='w-full flex ml-3 mt-10 lg:mt-2 items-center'>
    <Link to="/" class="inline-flex justify-center items-center py-3 px-5 text-base font-light text-center dark:text-white text-gray-900 rounded-lg">
                        <svg class="md:size-7 size-5 ms-2 mt-1 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
        <h4 class="md:text-4xl sm:text-xl text-lg font-bold dark:text-white light:text-blue-500">{title}</h4>

    </div>
  )
}

export default PageHeading
