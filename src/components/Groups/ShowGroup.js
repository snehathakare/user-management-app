import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { Box, Typography, Stack } from '@mui/material';
import FetchGroupService from "../../services/FetchGroupService";
import { useDispatch } from 'react-redux';
import { deleteGroup } from "./../../actions/group";

const ShowGroup = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const initialGroupState = {
        id: null,
        name: "",
        citizenship: "",
        residence: ""
    };
    const [group, setGroup] = useState(initialGroupState);

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
    useEffect(() => {
        getGroup(id);
    }, [id]);

    const removeGroup = () => {
        dispatch(deleteGroup(group.id))
            .then(() => {
                navigate('/groups')
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {group &&
                <div>
                    <Typography variant="h6" component="h2">
                        CURRENT GROUP
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Title: {group.name}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Description: {group.description}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Active since: {group.createdAt}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Link to={"/groups/edit/" + group.id}>
                            Edit
                        </Link>
                        <Link to={"/groups/"} onClick={removeGroup}>
                            Delete
                        </Link>
                    </Stack>
                </div>
            }
        </Box>
    )
}

export default ShowGroup