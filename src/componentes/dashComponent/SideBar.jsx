import { Avatar, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { BarChartOutlined, CalendarTodayOutlined, HelpOutlineOutlined, MapOutlined, PersonOutlineOutlined, PieChartOutlineOutlined, TimelineOutlined } from '@mui/icons-material';
import me from "../../image/me.jpg";
import { useLocation, useNavigate } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';

export default function SideBar({open, handleDrawerClose, DrawerHeader, theme, Drawer}) {

  const navigate = useNavigate();
  let location = useLocation();

  const arrayOne = [
    {"text": "Dashboard", "icon": <HouseIcon/>, "path": "/" },
    {"text": "Manage Team", "icon": <GroupIcon/>, "path": "/manage" },
    {"text": "Contacts Information", "icon": <ContactsIcon/>, "path": "/contact" },
    {"text": "Invoices Balance", "icon": <ReceiptOutlinedIcon/>, "path": "/invoic" },
  ]
  const arrayTwo = [
    {"text": "Profile From", "icon": <PersonOutlineOutlined/>, "path": "/profile" },
    {"text": "Calendar", "icon": <CalendarTodayOutlined/>, "path": "/calendar" },
    {"text": "FAQ Page", "icon": <HelpOutlineOutlined/>, "path": "/faq" },
  ]
  const arrayThree = [
    {"text": "Bar Chart", "icon": <BarChartOutlined/>, "path": "/bar" },
    {"text": "Pie Chart", "icon": <PieChartOutlineOutlined/>, "path": "/pie" },
    {"text": "Line Chart", "icon": <TimelineOutlined/>, "path": "/line" },
    {"text": "Geography Chart", "icon": <MapOutlined/>, "path": "/geography" },
  ]

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Avatar sx={{mx: "auto", my: "5px", width:open ? "70px" : "45px", height: open ? "70px" : "45px", border:"2px solid white", transition:"0.25s"}} alt="me" src={me} />
      <Typography sx={{fontSize: open ? "18px" : "0", fontWeight:"600", textShadow:"0 0 5px white", transition:"0.25s"}} align='center' > Mohamed Abd Elghany </Typography>
      <Typography sx={{fontSize: open ? "20px" : "0", fontWeight:"bold", mb:"5px", paddingBottom:"2px", borderBottom:"2px solid white", transition:"0.25s", color: theme.palette.info.main}} align='center' > Admin </Typography>

      <Divider />

      <List>
        {arrayOne.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? "" : item.text} placement="right">
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "light" ? blueGrey[400] : blueGrey[900] : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {arrayTwo.map((item) => (
          <Tooltip title={open ? "" : item.text} placement="right">
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "light" ? blueGrey[400] : blueGrey[900] : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          </Tooltip>
        ))}
      </List>

      <Divider />

      <List>
        {arrayThree.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? "" : item.text} placement="right">
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "light" ? blueGrey[400] : blueGrey[900] : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

    </Drawer>
  )
}
