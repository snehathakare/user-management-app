import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import FetchUserService from "../../services/FetchUserService";
import { useDispatch } from 'react-redux';
import { deleteUser } from "./../../actions/user";
import { Stack } from '@mui/system';

const ShowUser = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const initialUserState = {
        id: null,
        name: "",
        citizenship: "",
        residence: ""
    };
    const [user, setUser] = useState(initialUserState);

    const getUser = id => {
        FetchUserService.get(id)
            .then(response => {
                setUser(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getUser(id);
    }, [id]);
    useEffect(() => {
        getUser(id);
    }, [id]);

    const removeUser = () => {
        dispatch(deleteUser(user.id))
            .then(() => {
                navigate('/users')
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Box sx={{ display: 'flex' }} justifyContent="center">
            {user &&
                <div>
                    <Typography variant="h6" component="h2">
                        CURRENT USER
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Title: {user.name}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Nationality: {user.citizenship}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Resident of: {user.residence}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Active since: {user.createdAt}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Link to={"/users/edit/" + user.id}>
                            Edit
                        </Link>
                        <Link to={"/users/"} onClick={removeUser}>
                            Delete
                        </Link>
                    </Stack>

                </div>
            }
        </Box>
    )
}

export default ShowUser