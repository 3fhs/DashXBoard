import { Box, Paper, Typography, useTheme } from '@mui/material';
import React from 'react';
import BarBora from '../barDash/BarBora';
import Pie from '../pieDash/Pie';
import Geography from "../GeographyDash/Geography";

export default function SecThree() {
  
  const theme = useTheme();

  return (
    <Box flexWrap={"wrap"} sx={{marginTop:"30px", display:"flex", gap:"10px", justifyContent:"space-evenly", width:"100%", overflow:"hidden"}}>
      <Paper sx={{width:"32%", minWidth:"400px", flexGrow: 1, borderRadius:"6px"}}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{padding: "30px 30px 0 30px"}}
          variant='h6'
          fontWeight="600"
        >
          Campaign
        </Typography>
        <BarBora isDash={true} />
        <Typography
          variant='h6' align='center' sx={{mt: "15px"}}
        >
          $48,352 revenue generated
        </Typography>
        <Typography
          variant='body2' align='center' px={0.7} pb={3}
        >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>


      <Paper sx={{width:"32%", minWidth:"400px", flexGrow: 1, borderRadius:"6px"}}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{padding: "30px 30px 0 30px"}}
          variant='h6'
          fontWeight="600"
        >
          Sales Quantity
        </Typography>
        <Pie isDashboard = {true}/>
      </Paper>


      <Paper sx={{width:"32%", minWidth:"400px", flexGrow: 1, borderRadius:"6px"}}>
        <Geography isDashboard = {true}/>
      </Paper>
    </Box>
  )
}
