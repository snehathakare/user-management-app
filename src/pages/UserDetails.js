import React from 'react'
import UserList from '../components/Users/UserList'
import { Box } from '@mui/material';
import NewUser from '../components/Users/NewUser';
import { Stack } from '@mui/system';
import Search from './../components/Search'

const UserDetails = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }}>
            <Search />
            <Stack sx={{ p: 4 }} direction="row" spacing={2} justifyContent="center">
                <NewUser />
                <UserList />
            </Stack>

        </Box>
    )
}

export default UserDetails