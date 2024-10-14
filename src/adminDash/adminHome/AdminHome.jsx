import React from 'react'
import SecOne from './SecOne'
import SecTwo from './SecTwo'
import SecThree from './SecThree'
import { Box, Button } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import Title from '../../componentes/title/Title'

export default function AdminHome() {

  return (
    <div>
      <Title tit="Dash <> Board" des="This Page is Show All Data" />

      <Box sx={{textAlign:"right"}}>
        <Button variant='contained' sx={{padding:"6px 8px"}} color='primary'>
          <DownloadOutlined/>
          Download Reports
        </Button>
      </Box>
      <SecOne/>
      <SecTwo/>
      <SecThree/>
    </div>
  )
}
