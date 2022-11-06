import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Stack, Box, TableBody, Table, TableContainer, Paper, TableHead, TableCell, TableRow } from '@mui/material';
import {
    retrieveUsers,
    deleteUser
} from "../../actions/user";

const UserList = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUsers());
    }, []);

    const removeUser = (user_id) => {
        dispatch(deleteUser(user_id))
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="right">Citizenship</TableCell>
                            <TableCell align="right">Resident of</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((item) => (
                            < TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">{item.citizenship}</TableCell>
                                <TableCell align="right">{item.residence}</TableCell>
                                <TableCell align="right">
                                    <Stack direction="row" spacing={1} justifyContent="center">
                                        <Link to={"/users/" + item.id}>Show</Link>
                                        <Link to={"/users/edit/" + item.id}>Edit</Link>
                                        <Link onClick={() => { removeUser(item.id) }} to='/users'>
                                            Delete
                                        </Link>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >

    );
};

export default UserList;