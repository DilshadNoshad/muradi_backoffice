import { Box } from '@mui/system';
import React from 'react'
import { theme } from '../../theme';

interface ProgressEle {
    progress: String;
    size: String;
}
const ProgressCircle: React.FC<ProgressEle> = (props) => {

    const angle = Number(props.progress) * 360;
    return (
        <Box sx={{
            background: `radial-gradient(${"white"} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.primary.main} ${angle}deg 360deg),
                ${theme.palette.primary.light}`,
            borderRadius: "50%",
            width: `${props.size}px`,
            height: `${props.size}px`,
        }}
        >
        </Box >
    )
}

export default ProgressCircle