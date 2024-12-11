import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import your Layout component
import Home from './components/Home.jsx';
import JSBooks from './components/JSBooks'
import PythonBooks from './components/PythonBooks.jsx';
import AlgorithmBooks from './components/AlgorithmBooks.jsx';
import CSSBooks from './components/CSSBooks.jsx';
import DBBooks from './components/DBBooks.jsx';
import HTMLBooks from './components/HTMLBooks.jsx';
import PerlBooks from './components/PerlBooks.jsx';
import NotFound from './components/NotFound.jsx'
import PDFViewer from './components/PDFViewer.jsx';
import AllBooks from './components/AllBooks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='jsbooks' element={<JSBooks/>} />
          <Route path='pybooks' element={<PythonBooks/>} />
          <Route path='algobooks' element={<AlgorithmBooks/>} />
          <Route path='cssbooks' element={<CSSBooks/>} />
          <Route path='dbbooks' element={<DBBooks/>} />
          <Route path='htmlbooks' element={<HTMLBooks/>} />
          <Route path='perlbooks' element={<PerlBooks/>} />
          <Route path="pdf-viewer" element={<PDFViewer/>} />
          <Route path='allbooks' element={<AllBooks/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);