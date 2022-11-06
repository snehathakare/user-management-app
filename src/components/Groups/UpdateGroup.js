import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteGroup, updateGroup } from "../../actions/group";
import { Stack, Box, Button, TextField, Typography } from '@mui/material';
import FetchGroupService from "../../services/FetchGroupService";

const UpdateGroup = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const initialGroupState = {
        id: null,
        name: "",
        description: "",
        createdAt: ""
    };
    const [group, setGroup] = useState(initialGroupState);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const getGroup = id => {
        FetchGroupService.get(id)
            .then(response => {
                setGroup(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getGroup(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setGroup({ ...group, [name]: value });
    };

    const newGroup = () => {
        setGroup(initialGroupState);
        setSubmitted(false);
    };

    const updateGroupContent = () => {
        dispatch(updateGroup(group.id, group))
            .then(response => {
                setMessage("The group was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const removeGroup = () => {
        dispatch(deleteGroup(group.id))
            .then(() => {
                setMessage("The group was deleted successfully!");
                navigate('/groups')
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
                        Group Added Successfully!
                    </Typography>
                    <Button variant="contained" onClick={newGroup}>
                        Add another group
                    </Button>
                </div>
            ) : (

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <Typography variant="overline" display='block' gutterBottom>
                            Name
                        </Typography>
                        <TextField
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={group.name}
                            onChange={handleInputChange}
                            name="name"
                        />

                    </div>
                    <div>
                        <Typography variant="overline" display='block' gutterBottom>
                            Description
                        </Typography>
                        <TextField
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={group.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>
                    <Stack direction="row" spacing={2}>
                        <Link onClick={updateGroupContent} variant='contained'>
                            Update
                        </Link>
                        <Link onClick={removeGroup} variant='contained'>
                            Delete
                        </Link>
                    </Stack>
                    <p>{message}</p>
                </Box>
            )}
        </Box>
    );
};

export default UpdateGroup;