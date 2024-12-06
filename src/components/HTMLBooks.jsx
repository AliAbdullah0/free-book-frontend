import React from 'react'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function HTMLBooks() {
  return (
    <div className='min-w-[75%] min-h-screen'>
      <PageHeading title={'HTML5'}/>
      <BooksCard path={'html-books'}/>
    </div>
  )
}

export default HTMLBooks
