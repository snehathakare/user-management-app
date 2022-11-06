import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createGroup } from "./../../actions/group";
import { Stack, Box, Button, TextField, Typography } from '@mui/material';
import FetchGroupService from "../../services/FetchGroupService";

const NewGroup = () => {
    let { id } = useParams();
    const initialGroupState = {
        id: null,
        name: "",
        description: ""
    };
    const [group, setGroup] = useState(initialGroupState);
    const [isClicked, setIsClicked] = useState(false);
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

    const saveGroup = () => {
        const { name, description } = group;

        dispatch(createGroup(name, description))
            .then(data => {
                setGroup({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                });
                setIsClicked(false);
                setMessage("Group added successfully!")
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newGroup = () => {
        setGroup(initialGroupState);
        setIsClicked(true);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {!isClicked ? (
                <div>
                    <Button variant="contained" onClick={newGroup}>
                        Add new group
                    </Button>
                    <p>{message}</p>
                </div>
            ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <Typography variant="overline" display='block' gutterBotteom>
                            Group Name
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
                        <Typography variant="overline" display='block' gutterBotteom>
                            Description
                        </Typography>
                        <TextField
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={group.citizenship}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
                        <Button onClick={saveGroup} variant='contained'>
                            Add new group
                        </Button>
                    </Stack>
                </Box>
            )
            }
        </Box >
    );
};

export default NewGroup