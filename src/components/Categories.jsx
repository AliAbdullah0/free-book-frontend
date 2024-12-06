import React from 'react'
import Category from './Category'

function Categories() {
  return (
    <>
    <div className='w-full flex sm:flex-row flex-col flex-wrap md:gap-7 gap-5 justify-center sm:p-0 p-4'>
      <Category title={'Python'} link={'pybooks'}/>
      <Category title={'Javascript'} link={'jsbooks'}/>
      <Category title={'Algorithms'} link={'algobooks'}/>
      <Category title={'CSS'} link={'cssbooks'}/>
      <Category title={'Databases'}  link={'dbbooks'}/>
      <Category title={'HTML5'} link={'htmlbooks'}/>
    </div>
    </>
  )
}

export default Categories
