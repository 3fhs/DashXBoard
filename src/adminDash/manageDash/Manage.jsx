import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './Data';
import { Box, Typography, useTheme } from "@mui/material";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import Title from '../../componentes/title/Title';


export default function Manage() {

  const theme = useTheme();

  const columns = [
    { field: 'col1', headerName: 'ID', flex: 1, headerAlign:"center" , align:"center"},
    { field: 'col2', headerName: 'Name' , flex: 1, headerAlign:"center", align:"center"},
    { field: 'col3', headerName: 'Email' , flex: 1, headerAlign:"center", align:"center"},
    { field: 'col4', headerName: 'Age', flex: 1, headerAlign:"center" , align:"center"},
    { field: 'col5', headerName: 'Phone', flex: 1, headerAlign:"center" , align:"center"},
    { field: 'col6', headerName: 'Access', flex: 1, headerAlign:"center" , align:"center", renderCell: ({row: {col6}}) => { 
        return (
            <Box sx={{
              p: "5px",
              borderRadius:"6px",
              width:"100%",
              height:"100%",
              backgroundColor: col6 === "admin" ? theme.palette.primary.dark : col6 === "manager" ? theme.palette.secondary.dark : "#00695f" ,
              display:"flex",
              alignItems:"center",
              justifyContent:"space-evenly",
              color:"#fff",
            }}>
                {col6 === "manager" ? <AdminPanelSettingsOutlined fontSize='small'/> : col6 === "admin" ? <SecurityOutlined/> : <LockOpenOutlined/> }
                <Typography sx={{fontSize:"13px"}}>
                    {col6}
                </Typography>
            </Box>
        )
     }},
  ];

  return (
  <Box sx={{ height: 600, width: '98%', mx:"auto" }}>
      <Title tit="Manager <> Board" des="" />

    <DataGrid rows={rows} columns={columns} />
  </Box>
  )
}
