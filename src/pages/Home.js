import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'

const Home = () => {
    return (
        <Box>
            <NavBar />
            <Stack textAlign='center'>
                <Typography variant='h6'>
                    Welcome to user management system!
                </Typography>
                <Typography variant='body2'>
                    Use the navbar links to explore the website
                </Typography>
            </Stack>
            <Outlet />
            <Footer />
        </Box >
    )
}

export default Home