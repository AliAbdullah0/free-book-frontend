import React from 'react'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function AlgorithmBooks() {
  return (
    <div className="min-w-[75%] min-h-screen">
    <PageHeading title={'Algorithms'}/>
    <BooksCard path={'algorithms'}/>
 </div>
  )
}

export default AlgorithmBooks
