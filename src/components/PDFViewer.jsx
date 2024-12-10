import React, { useState, useEffect } from 'react';
import { Document,Page } from 'react-pdf';
import { useLocation } from 'react-router-dom';

function PDFViewer() {
    const location = useLocation();
    const [pdfUrl, setPdfUrl] = useState('');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setPdfUrl(queryParams.get('url'));
    }, [location]);

    const onLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const goToPrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <div className="pdf-container" style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {pdfUrl ? (
                <div className="pdf-viewer" style={{ width: '80%', height: '80vh' }}>
                    <Document file={pdfUrl} onLoadSuccess={onLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>

                    <div className="navigation-buttons">
                        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                            Previous
                        </button>
                        <span>
                            Page {pageNumber} of {numPages}
                        </span>
                        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <img src="imgs/aeroplane loading.gif" alt="" />
            )}
        </div>
    );
}

export default PDFViewer;
