import React from 'react'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function DBBooks() {
  return (
    <div className='min-w-[75%] min-h-screen'>
      <PageHeading title={'Databases'}/>
      <BooksCard path={'databases'}/>
    </div>
  )
}

export default DBBooks
