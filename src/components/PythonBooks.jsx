import React from 'react';
import { Link } from 'react-router-dom';
import BooksCard from './BooksCard';
import PageHeading from './PageHeading';

function PythonBooks() {
    return (
        <div className="min-w-[75%] mt-16 p-2 flex flex-col items-center overflow-x-hidden min-h-screen">
           <PageHeading title={'Python'}/>
           <BooksCard path={'python-page-lists'}/>
        </div>
    );
}

export default PythonBooks;
