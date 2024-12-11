import React from 'react'
import Category from './Category'
import FeatureCard from './FeatureCard'

function Categories() {
  return (
    <>
    <div className='w-full flex flex-col gap-3 p-1 items-center'>
      <div className='w-full flex sm:flex-row flex-col flex-wrap md:gap-7 gap-5 justify-center sm:p-0 p-4'>
      <Category title={'All Books'} link={'allbooks'} />
        <Category title={'Python'} link={'pybooks'} />
        <Category title={'Javascript'} link={'jsbooks'} />
        <Category title={'CSS'} link={'cssbooks'} />
        <Category title={'Databases'} link={'dbbooks'} />
        <Category title={'HTML5'} link={'htmlbooks'} />
      </div>
       <FeatureCard title='More Coming Soon!'/>
      </div>
    </>
  )
}

export default Categories
