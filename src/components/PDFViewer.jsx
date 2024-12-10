import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer({ fileUrl }) {
  const [error, setError] = useState(false); // Track PDF loading error
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages); // Update number of pages on successful load
    setError(false); // Reset error state if PDF loads successfully
  };

  const onLoadError = (error) => {
    console.error("PDF load error:", error);
    setError(true); // Set error state if PDF fails to load
  };

  if (!fileUrl) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center dark:bg-gray-900">
        <div className="text-center dark:bg-gray-900 text-gray-300 p-12 rounded-lg max-w-md w-full">
          <h2 className="text-4xl font-extrabold dark:text-gray-200 text-gray-800 mb-4">No PDF File Provided</h2>
          <p className="text-lg dark:text-gray-300 text-gray-600 mb-6">
            We couldn't find a PDF to display. Please check the link and try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-gray-800">
      {error ? (
        <div className="text-center bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-300 mb-4">Oops! Something Went Wrong</h2>
          <p className="text-lg text-gray-600 mb-6">
            We encountered an issue while loading the PDF. Please try again later.
          </p>
          <div className="flex justify-center items-center mb-6">
            <svg className="animate-spin w-12 h-12 text-gray-800 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4" fill="none"></circle>
              <path d="M4 12a8 8 0 0 1 8-8v2a6 6 0 0 0 6 6h2a8 8 0 0 1-8 8v-2a6 6 0 0 0-6-6H4a8 8 0 0 1 8-8z" fill="currentColor"></path>
            </svg>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Reload Page
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-lg w-full">
          <Document
            file={fileUrl}
            onLoadSuccess={onLoadSuccess}
            onLoadError={onLoadError}
            className="flex justify-center items-center"
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
}

export default PDFViewer;
