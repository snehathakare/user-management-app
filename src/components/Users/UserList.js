import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, List, ListItem, Typography } from '@mui/material';
import {
    retrieveUsers,
} from "../../actions/user";

const UserList = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUsers());
    });

    const setActiveUser = (user, index) => {
        setCurrentUser(user);
        setCurrentIndex(index);
    };

    return (
        <Box>
            <div>
                <Typography variant="h4" component="h2">
                    USER LIST
                </Typography>
                <List>
                    {users &&
                        users.map((user, index) => (
                            <ListItem
                                onClick={() => setActiveUser(user, index)}
                                key={index}
                            >
                                <Typography variant="overline" display="block">
                                    {user.name}
                                </Typography>
                            </ListItem>
                        ))}
                </List>
            </div>
            <Box sx={{ display: 'flex' }}>
                {currentUser ? (
                    <div>
                        <Typography variant="h6" component="h2">
                            CURRENT USER
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Title: {currentUser.name}
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Nationality: {currentUser.citizenship}
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Active since: {currentUser.createdAt}
                        </Typography>
                        <Link to={"/users/" + currentUser.id}>
                            Edit
                        </Link>
                    </div>
                ) : (
                    <Typography variant="caption" display="block" gutterBottom>
                        Click on a user name...
                    </Typography>
                )}
            </Box>
        </Box>

    );
};

export default UserList;