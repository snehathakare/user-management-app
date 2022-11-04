import React from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material/'

const Footer = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels >
                <BottomNavigationAction label="About" />
                <BottomNavigationAction label="Contact" />
                <BottomNavigationAction label="Locations" />
            </BottomNavigation>
        </Paper>
    )
}

export default Footer