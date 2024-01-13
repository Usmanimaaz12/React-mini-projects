import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

function Layout() {
  return (
      <>
        <Header/>
        <Outlet />  
            {/* NOTES:
            - Outlet is a component from react-router-dom that renders the component that matches the path
            - Outlet uses the Layout as a Base and renders the other components inside the Outlet based on the path 
           */}  
        <Footer />

      </>
  )
}

export default Layout
