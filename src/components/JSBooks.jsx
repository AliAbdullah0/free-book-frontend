import React from 'react'
import BooksCard from './BooksCard'
import PageHeading from './PageHeading'

function JSBooks() {
    return (
        <div className='min-w-[75%] min-h-screen'>
        <PageHeading title={'Javascript'}/>
            <BooksCard path={'books'}/>
        </div>
    )
}

export default JSBooks
