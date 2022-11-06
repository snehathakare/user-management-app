import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { updateUser, deleteUser } from "../../actions/user";
import { Stack, Box, Button, TextField, Typography } from '@mui/material';
import FetchUserService from "../../services/FetchUserService";

const UpdateUser = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const initialUserState = {
        id: null,
        name: "",
        citizenship: "",
        residence: ""
    };
    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

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

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);
    };

    const updateContent = () => {
        dispatch(updateUser(user.id, user))
            .then(response => {
                setMessage("The user was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const removeUser = () => {
        dispatch(deleteUser(user.id))
            .then(() => {
                setMessage("The user was deleted successfully!");
                navigate('/users')
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {submitted ? (
                <div>
                    <Typography variant="h4" component="h2">
                        User Added Successfully!
                    </Typography>
                    <Button variant="contained" onClick={newUser}>
                        Add another user
                    </Button>
                </div>
            ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <Typography variant="overline" display='block' gutterBotteom>
                            User Name
                        </Typography>
                        <TextField
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={user.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>
                    <div>
                        <Typography variant="overline" display='block' gutterBotteom>
                            Citizenship
                        </Typography>
                        <TextField
                            type="text"
                            className="form-control"
                            id="citizenship"
                            required
                            value={user.citizenship}
                            onChange={handleInputChange}
                            name="citizenship"
                        />
                    </div>
                    <div>
                        <Typography variant="overline" display='block' gutterBotteom>
                            Country of Residence
                        </Typography>
                        <TextField
                            type="text"
                            className="form-control"
                            id="residence"
                            required
                            value={user.residence}
                            onChange={handleInputChange}
                            name="residence"
                        />
                    </div>
                    <Stack direction="row" spacing={2}>
                        <Link onClick={updateContent} variant='contained'>
                            Update
                        </Link>
                        <Link onClick={removeUser} variant='contained'>
                            Delete
                        </Link>
                    </Stack>
                    <p>{message}</p>
                </Box>
            )
            }
        </Box >
    );
};

export default UpdateUser;