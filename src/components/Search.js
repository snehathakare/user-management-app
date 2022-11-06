import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Button, Stack, Box, TextField } from '@mui/material/'
import {
    findUser,
} from '../actions/user'


const Search = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const dispatch = useDispatch();

    const onChangeSearchUser = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const findUserByTitle = () => {
        dispatch(findUser(searchTitle));
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField id="outlined-basic"
                onChange={onChangeSearchUser}
                value={searchTitle}
                label="enter a name or location..."
                variant="outlined" />
            <Stack sx={{ p: 4 }}>
                <Button variant="contained" onClick={findUserByTitle}>Search</Button>
            </Stack>
        </Box>

    )
}

export default Search