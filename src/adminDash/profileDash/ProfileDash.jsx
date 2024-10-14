import { Box, Button, MenuItem, Stack, TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import React from 'react'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Title from '../../componentes/title/Title';

export default function ProfileDash() {

  const [open, setOpen] = React.useState(false);

  //snaks Bar code
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // code library react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset // <-- This function will be used to reset the form fields
  } = useForm ()
  const onSubmit = () => {
    handleClick();  
    // Clear the form fields
    reset(); // This will reset all the form fields
  }

  const roles = [
    {
      value: 'Admin',
      label: 'A ->',
    },
    {
      value: 'Manager',
      label: 'B ->',
    },
    {
      value: 'Member',
      label: 'C ->',
    },
    {
      value: 'User',
      label: 'D ->',
    },
  ];
  

  return (
  <Box onSubmit={handleSubmit(onSubmit)}
    component="form"
    sx={{ display:"flex", flexDirection:"column", gap: "20px" }}
    noValidate
    autoComplete="off"
  >
    
    <Title tit="Profile <> Board" des="This Page is Show All Data" />


    <Stack direction={"row"} sx={{gap: 2}} >  
      <TextField 
        error={errors.firstName} // this code is in material ui validation 
        helperText= {Boolean(errors.firstName) ? "This Input Is Required": null} // this code is in material ui validation 
        sx={{flex: 1}} 
        label="First Name" 
        variant="filled" 
        {...register("firstName", { required: true, maxLength: 10 })} // this code is in react-hook-form validation
      />
      <TextField 
        error={errors.lastName} // this code is in material ui validation 
        helperText= {Boolean(errors.firstName) ? "This Input Is Required": null} // this code is in material ui validation         
        sx={{flex: 1}} 
        label="Last Name" 
        variant="filled" 
        {...register("lastName", { required: true, maxLength: 10 })} // this code is in react-hook-form validation
      />
    </Stack>   

    <TextField  
          error={errors.email} // this code is in material ui validation 
          helperText= {Boolean(errors.firstName) ? "This Input Is Required": null} // this code is in material ui validation  
          sx={{flex: 1}} 
          label="Email" 
          variant="filled" 
          {...register("email", { required: true, maxLength: 20 })} // this code is in react-hook-form validation
    />
    <TextField  label="Contact Number" variant="filled" />
    <TextField  label="Address one" variant="filled" />
    <TextField  label="Address two" variant="filled" />

    <TextField
          id="filled-select-currency"
          select
          label="Role"
          defaultValue="Manager"
          variant="filled"
    >
    {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label} {option.value}
            </MenuItem>
    ))}
    </TextField>
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>This field is required</span>}

    <Box sx={{textAlign:"center"}}>
      <Button type='submit' variant='contained'>
        Create New User
      </Button>
    </Box>

    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top" , horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Now You Can Use The Wepsite
        </Alert>
      </Snackbar>

  </Box>
  )
} 