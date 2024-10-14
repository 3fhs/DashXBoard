import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { columns, rows } from './DataIvoic'
import Title from '../../componentes/title/Title'

export default function Invoic() {
  return (
  <Box sx={{ height: 600, width: '98%', mx:"auto" }}>
    <Title tit="Invoice" des="" />

    <DataGrid 
      checkboxSelection
      rows={rows} 
      columns={columns} 
    />
  </Box>
  )
}
