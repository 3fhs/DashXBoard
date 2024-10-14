import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { columns, rows } from './DataContact'
import Title from '../../componentes/title/Title'

export default function Contact() {
  return (
    <Box sx={{ height: 600, width: '98%', mx:"auto" }}>
      <Title tit="Contact" des="" />

      <DataGrid 
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows} 
        columns={columns} 
      />
    </Box>
  )
}
