import React from 'react'
import Category from './Category'

function Categories() {
  return (
    <>
    <div className='w-full flex flex-wrap gap-3 justify-center sm:p-0 p-3'>
      <Category title={'Python'} description={'Explore The Python Programming'} link={'pybooks'}/>
      <Category title={'Javascript'} description={'Explore Javascript Programming'} link={'jsbooks'}/>
      <Category title={'Algorithms'} description={'Expand your understanding of DSA.'} link={'algobooks'}/>
      <Category title={'CSS'} description={'Learn to Create Beautiful Designs with CSS'} link={'cssbooks'}/>
      <Category title={'Databases'} description={'Learn Database Here!'} link={'dbbooks'}/>
      <Category title={'HTML5'} description={'Learn Complete HTML Here quickly and easily!'} link={'htmlbooks'}/>

    </div>
    </>
  )
}

export default Categories
