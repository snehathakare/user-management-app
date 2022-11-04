import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Search />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home