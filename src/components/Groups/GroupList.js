import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, List, ListItem, Typography } from '@mui/material';
import {
    retrieveGroups,
} from "../../actions/group";

const GroupList = () => {
    const [currentGroup, setCurrentGroup] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const groups = useSelector(state => state.groups);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveGroups());
    });

    const setActiveGroup = (group, index) => {
        setCurrentGroup(group);
        setCurrentIndex(index);
    };
    console.log(groups)
    return (
        <Box>
            <div>
                <Typography variant="h4" component="h2">
                    GROUP LIST
                </Typography>
                <List>
                    {groups &&
                        groups.map((group, index) => (
                            <ListItem
                                onClick={() => setActiveGroup(group, index)}
                                key={index}
                            >
                                <Typography variant="overline" display="block">
                                    {group.groupName}
                                </Typography>
                            </ListItem>
                        ))}
                </List>
            </div>
            <Box sx={{ display: 'flex' }}>
                {currentGroup ? (
                    <div>
                        <Typography variant="h6" component="h2">
                            CURRENT GROUP
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Name: {currentGroup.groupName}
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Active since: {currentGroup.createdAt}
                        </Typography>
                        <Link to={"/groups/" + currentGroup.id}>
                            Edit
                        </Link>
                    </div>
                ) : (
                    <Typography variant="caption" display="block" gutterBottom>
                        Click on a group name...
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default GroupList;