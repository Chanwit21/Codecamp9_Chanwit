import { Button, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function RegisterPage() {
  return (
    <Box sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginTop: 7, flexDirection: 'column' }}>
      <h2>Register Page</h2>
      <FormControl sx={{ width: '100%' }}>
        <TextField id='email' label='Email address' variant='outlined' sx={{ marginBottom: '20px' }} />
        <TextField id='username' label='Username' variant='outlined' sx={{ marginBottom: '20px' }} />
        <TextField id='password' type='password' label='Password' variant='outlined' sx={{ marginBottom: '20px' }} />
        <TextField
          id='confirmPassword'
          type='password'
          label='Confirm Password'
          variant='outlined'
          sx={{ marginBottom: '20px' }}
        />
        <Button variant='contained'>Register</Button>
      </FormControl>
    </Box>
  );
}

export default RegisterPage;
