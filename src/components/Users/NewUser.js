import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createUser } from "./../../actions/user";
import { Stack, Box, Button, TextField, Typography } from '@mui/material';
import FetchUserService from "../../services/FetchUserService";

const NewUser = () => {
    let { id } = useParams();
    const initialUserState = {
        id: null,
        name: "",
        citizenship: "",
        residence: ""
    };
    const [user, setUser] = useState(initialUserState);
    const [isClicked, setIsClicked] = useState(false);
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

    const saveUser = () => {
        const { name, citizenship, residence } = user;

        dispatch(createUser(name, citizenship, residence))
            .then(data => {
                setUser({
                    id: data.id,
                    name: data.name,
                    citizenship: data.citizenship,
                    residence: data.residence
                });
                setIsClicked(false);
                setMessage("User added successfully!")
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newUser = () => {
        setUser(initialUserState);
        setIsClicked(true);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {!isClicked ? (
                <div>
                    <Button variant="contained" onClick={newUser}>
                        Add new user
                    </Button>
                    <p>{message}</p>
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
                    <Stack sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
                        <Button onClick={saveUser} variant='contained'>
                            Add new user
                        </Button>
                    </Stack>
                </Box>
            )
            }
        </Box >
    );
};

export default NewUser