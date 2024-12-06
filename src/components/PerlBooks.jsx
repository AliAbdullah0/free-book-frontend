import React from 'react'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function PerlBooks() {
  return (
    <div className='min-w-[75%] min-h-screen'>
      <PageHeading title={'Perl'}/>
      <BooksCard path={'perl-books'}/>
    </div>
  )
}

export default PerlBooks
