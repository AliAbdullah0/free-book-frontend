import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PageHeading from './PageHeading'
import BooksCard from './BooksCard'

function CardHead({ title }) {
  return (
    <h2 className='font-light w-fit md:text-2xl dark:text-white text-gray-800'>{title}</h2>
  )
}

function AllBooks() {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])

  const paths = [
    'css-books',
    'database-books',
    'html-books',
    'books',
    'perl-books',
    'python-page-lists',
  ]

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const requests = paths.map((path) =>
          axios.get(`${import.meta.env.VITE_API_URL}/${path}?populate=*`)
        )

        const responses = await Promise.all(requests)
        
        const allBooks = responses.map((response) => response.data.data)

        setBooks(allBooks.flat())
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchBooks()
  }, []) 

  return (
    <div className='flex flex-col w-full p-2 min-h-screen items-center justify-center mt-16'>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full border-t-4 border-blue-600 w-16 h-16"></div>
        </div>
      ) : (
        <div className='flex flex-col w-full items-center'>
          <div className='flex flex-wrap p-2 w-full items-center justify-center'>
            {paths.map((path, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                <CardHead title={path.replace('-', ' ').toUpperCase()} />
                <BooksCard path={path} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AllBooks
