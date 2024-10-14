import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'

export default function Title({tit, des}) {
    const theme = useTheme();
  return (
    <Box sx={{margin:"20px 0", padding:"10px", borderBottom: "2px solid #777"}} textAlign={"center"} >
        <Typography
        sx={{
            color: theme.palette.info.light,
            fontWeight: "bold",
        }}
        variant='h5'
        >
        {tit}
        </Typography>
        <Typography
        sx={{
            marginTop:"20px",
        }}
        variant='body1'
        >
        {des}
        </Typography>
    </Box>
  )
}
