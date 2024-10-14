import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Line from "../lineDash/Line.jsx";
import { DownloadOutlined } from '@mui/icons-material';

const Transactions = [
  {
    txId: "01e4dsaewf",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.91",
  },
  {
    txId: "02dsfr43sf",
    user: "janedoe",
    date: "2021-09-02",
    cost: "58.20",
  },
  {
    txId: "03adsfsf23",
    user: "mikejohnson",
    date: "2021-09-03",
    cost: "25.50",
  },
  {
    txId: "04fgh34rfs",
    user: "sarahsmith",
    date: "2021-09-04",
    cost: "74.00",
  },
  {
    txId: "05wer43sdf",
    user: "emilybrown",
    date: "2021-09-05",
    cost: "15.75",
  }
];


export default function SecTwo() {

  const theme = useTheme();

  return (
    <Stack direction={"row"} sx={{marginTop: "30px", display:"flex", gap:"10px", flexWrap:"wrap"}}>
      <Paper sx={{ flex: 1}} >
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Typography color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant='h6'
            >
              Revenue Generated
            </Typography>
            <Typography variant='body2' ml={4}>
              $ 59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{mr: 3}}>
              <DownloadOutlined/>
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard = {true}/>
      </Paper>
      <Box sx={{minWidth:"300px", maxHeight:"380px", overflow:"scroll", paddingRight:"5px"}} flexGrow={1}>
          <Paper>
            <Typography color={theme.palette.secondary.main} fontWeight={"bold"} p={1.2} variant='h6'>
              Recent Transactions
            </Typography>
          </Paper>
          {Transactions.map((item, index) => (
          <Paper key={index} sx={{
            mt: 1,
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
          }}
          >
                        <Box p={1.2}>
                          <Typography variant='body1' fontWeight="600">
                            {item.txId}
                          </Typography>
                          <Typography variant='body2'>
                            {item.user}
                          </Typography>
                        </Box>
            
                        <Typography variant='body1'> {item.date} </Typography>
                        
                        <Typography variant='body2'
                          borderRadius={1.4}
                          p={1}
                          bgcolor={theme.palette.error.main}
                          color={theme.palette.getContrastText(theme.palette.error.main)}
                        >
                          {item.cost}
                        </Typography>
          </Paper>
          ))}
      </Box>
    </Stack>
  )
}