import React from 'react'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function CSSBooks() {
  return (
    <div className='min-w-[75%] min-h-screen'>
      <PageHeading title={'Cascading Style Sheets (CSS)'}/>
      <BooksCard path={'css-books'}/>
    </div>
  )
}

export default CSSBooks
