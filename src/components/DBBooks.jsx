import React from 'react'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function DBBooks() {
  return (
    <div className='min-w-[75%] mt-16 p-2 flex flex-col items-center overflow-x-hidden min-h-screen'>
      <PageHeading title={'Databases'}/>
      <BooksCard path={'database-books'}/>
    </div>
  )
}

export default DBBooks
