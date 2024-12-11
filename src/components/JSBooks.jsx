import React from 'react'
import BooksCard from './BooksCard'
import PageHeading from './PageHeading'

function JSBooks() {
    return (
        <div className='min-w-[75%] mt-16 p-2 flex flex-col items-center overflow-x-hidden min-h-screen'>
        <PageHeading title={'Javascript'}/>
        <BooksCard path={'books'}/>
        </div>
    )
}

export default JSBooks
