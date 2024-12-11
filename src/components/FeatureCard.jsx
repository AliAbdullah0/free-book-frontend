import React from 'react'

function FeatureCard({title}) {
  return (
    <div className='w-full flex sm:flex-row flex-col flex-wrap md:gap-7 gap-5 justify-center sm:p-0 p-4'>
      <div class="sm:w-1/4 w-full p-4 bg-white border border-gray-200 rounded-lg hover:transition-all hover:shadow-xl hover:scale-[1.02] md:hover:scale-105 shadow dark:bg-blue-700 dark:border-blue-600">
        <h5 class="mb-2 sm:text-3xl text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </div>
      </div>
  )
}

export default FeatureCard
