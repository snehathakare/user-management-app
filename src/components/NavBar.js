import React from 'react'
import { Stack, Link, Box } from '@mui/material/';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Stack spacing={2} direction="row">
                <Link variant="overline" underline="none" href="/">
                    Home
                </Link>
                <Link variant="overline" underline="none" href="/users"
                >
                    Users
                </Link>
                <Link variant="overline" underline="none" href="/groups"
                >
                    Groups
                </Link>
            </Stack>
        </Box >

    )
}

export default NavBar