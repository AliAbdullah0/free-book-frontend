import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
    <div className='w-full flex md:flex-row flex-col '>
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Layout
