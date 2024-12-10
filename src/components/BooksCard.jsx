import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BooksCard({ path }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(null);


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

    const downloadFile = (url, filename, bookId) => {
        setDownloading(bookId); // Set which book is downloading
        axios.get(url, { responseType: 'blob' })
            .then((response) => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((err) => console.log('Error downloading file', err))
            .finally(() => setDownloading(null)); // Reset downloading state
    };


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
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => downloadFile(book.PDFfile.url, `${book.title}.pdf`, book.id)}
                                        className="btn-download bg-blue-600 p-2 font-semibold focus:bg-blue-700 focus:transition-all rounded-md text-white"
                                    >
                                        {downloading === book.id ? (
                                            <img
                                                src="imgs/Animation - 1732196348627.gif"
                                                alt="Loading..."
                                                className="w-10 inline-block"
                                            />
                                        ) : (
                                            'Download PDF'
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default BooksCard;
