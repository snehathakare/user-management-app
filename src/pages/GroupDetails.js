import React from 'react'
import { Box, Stack } from '@mui/material';
import GroupList from './../components/Groups/GroupList'
import NewGroup from './../components/Groups/NewGroup'

const GroupDetails = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <Stack sx={{ p: 6 }} direction="row" spacing={2}>
                <NewGroup />
                <GroupList />
            </Stack>
        </Box>
    )
}

export default GroupDetails