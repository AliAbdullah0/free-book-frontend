import React from 'react'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function DBBooks() {
  return (
    <div className='min-w-[75%] min-h-screen overflow-x-hidden'>
      <PageHeading title={'Databases'}/>
      <BooksCard path={'database-books'}/>
    </div>
  )
}

export default DBBooks
