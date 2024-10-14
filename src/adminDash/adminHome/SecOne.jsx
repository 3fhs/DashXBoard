import { Stack, useTheme } from '@mui/material'
import React from 'react'
import Card from './Card'
import { EmailOutlined, PersonAddAlt1Outlined, PointOfSaleOutlined, TrafficOutlined } from '@mui/icons-material'

export default function SecOne() {

  const data = [
    {
      "id": "python",
      "label": "python",
      "value": 451,
      "color": "hsl(252, 70%, 50%)"
    },
    {
      "id": "stylus",
      "label": "stylus",
      "value": 126,
      "color": "hsl(148, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 272,
      "color": "hsl(92, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 486,
      "color": "hsl(109, 70%, 50%)"
    },
  ]

  const theme = useTheme()

  return (
    <Stack direction={"row"} sx={{display:"flex", gap: "20px", flexWrap:"wrap", justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}} >
      <Card icon={<EmailOutlined sx={{fontSize:"23px", color: theme.palette.secondary.main}}/>} numIcon={"12,361"} title={"Email Sent"} data={data} numChart={"+14%"}  color={'paired'}/>
      <Card icon={<PointOfSaleOutlined sx={{fontSize:"23px", color: theme.palette.secondary.main}}/>} numIcon={"431,225"} title={"Sales Obtained"} data={data} numChart={"+21%"}  color={'category10'}/>
      <Card icon={<PersonAddAlt1Outlined sx={{fontSize:"23px", color: theme.palette.secondary.main}}/>} numIcon={"32,441"} title={"New Client"} data={data} numChart={"+5%"} color={'set1'}/>
      <Card icon={<TrafficOutlined sx={{fontSize:"23px", color: theme.palette.secondary.main}}/>} numIcon={"1,325,134"} title={"Traffic Received"} data={data} numChart={"+43%"}  color={'pastel1'}/>
    </Stack>
  )
}
 