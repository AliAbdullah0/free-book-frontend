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
  const [error, setError] = useState(null) // State for error handling

  const categories = [
    { path: 'css-books', title: 'CSS' },
    { path: 'database-books', title: 'Database' },
    { path: 'html-books', title: 'HTML5' },
    { path: 'books', title: 'Javascript' },
    { path: 'perl-books', title: 'Perl' },
    { path: 'python-page-lists', title: 'Python' }
  ]

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const requests = categories.map(({ path }) =>
          axios.get(`${import.meta.env.VITE_API_URL}/${path}?populate=*`)
        )

        const responses = await Promise.all(requests)

        const allBooks = responses.map((response) => response.data.data)

        setBooks(allBooks.flat())
        setLoading(false)
      } catch (err) {
        console.log(err)
        setError('Failed to load books. Please try again later.') 
        setLoading(false)
      }
    }

    fetchBooks()
  }, []) 

  return (
    <div className='flex flex-col w-full p-2 min-h-screen items-center justify-center mt-16 md:mt-3'>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full border-t-4 border-blue-600 w-16 h-16"></div>
        </div>
      ) : error ? ( 
        <div className="text-red-600 text-lg font-semibold">
          {error}
        </div>
      ) : books.length === 0 ? ( 
        <div className="text-gray-600 text-xl font-extrabold w-full text-center ">
          No books available at the moment.
        </div>
      ) : (
        <div className='flex flex-col w-full items-center'>
          <div className='flex flex-wrap p-2 w-full items-center justify-center'>
            {categories.map(({ path, title }, index) => (
              <div key={index} className='flex flex-col p-2 items-center justify-center w-full gap-2'>
                {/* <CardHead title={title} key={index} /> */}
                <div className='w-[85%] h-0.5 bg-blue-600 rounded-md'></div>
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
