import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Box, TableBody, Table, TableContainer, Paper, TableHead, TableCell, TableRow } from '@mui/material';
import {
    retrieveGroups,
    deleteGroup
} from "../../actions/group";

const GroupList = () => {
    const groups = useSelector(state => state.groups);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(retrieveGroups());
    }, []);

    const removeGroup = (group_id) => {
        dispatch(deleteGroup(group_id))
            .then(() => {
                navigate('/groups')
            })
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
                            <TableCell>Group Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Active since</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groups.map((item) => (
                            <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">{item.description}</TableCell>
                                <TableCell align="right">{item.createdAt}</TableCell>
                                <TableCell align="right">
                                    <Stack direction="row" spacing={1} justifyContent="center">
                                        <Link to={"/groups/" + item.id}>Show</Link>
                                        <Link to={"/groups/edit/" + item.id}>Edit</Link>
                                        <Link to={"/groups/"} onClick={() => removeGroup(item.id)}>Delete</Link>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default GroupList;