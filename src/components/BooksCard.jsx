import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BooksCard({ path }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${import.meta.env.VITE_API_URL}/${path}?populate=*`)
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
                console.log(import.meta.env.VITE_API_URL)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [path]);

    const getDescriptionText = (description) => {
        if (!description) return '';
        return description
            .map((para) =>
                para.children
                    .map((child) => (child.type === 'text' ? child.text : ''))
                    .join(' ')
            )
            .join('\n');
    };

    return (
        <div className="flex flex-wrap w-full gap-2 ml-2 mt-15 md:mt-3">
            {loading ? (
                <div className="w-full flex items-center justify-center">
                    <img src="imgs/aeroplane loading.gif" alt="Loading..." className='h-[5rem]' />
                </div>
            ) : books.length === 0 ? (
                <div className="w-full text-center">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-300">
                        No Books Available!
                    </h5>
                </div>
            ) : (
                books.map((book) => (
                    <div
                        key={book.id}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg md:hover:scale-105 hover:transition-all hover:scale-[1.02] hover:shadow-xl shadow dark:bg-gray-800 dark:border-gray-700 m-2"
                    >
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {book.title}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {getDescriptionText(book.description) ||
                                    'No description available'}
                            </p>
                            {book.PDFfile && (
                                <a
                                  href={`${import.meta.env.VITE_FILE_URL}${book.PDFfile.url}`}
                                  download
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                  Download PDF
                                  <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                  </svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default BooksCard;
