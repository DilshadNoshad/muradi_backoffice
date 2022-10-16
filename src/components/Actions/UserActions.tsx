import React from 'react'
import { Box, Tooltip, IconButton } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const UserActions = () => {
    return (
        <Box>
            <Tooltip title="View user details" >
                <IconButton onClick={() => { }}>
                    <PreviewIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Edit user details" >
                <IconButton onClick={() => { }}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete user " >
                <IconButton onClick={() => { }}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Box >
    )
}

export default UserActions