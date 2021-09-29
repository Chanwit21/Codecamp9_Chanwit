import React from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';

function LoginPage() {
  return (
    <>
      <Box sx={{ width: '80%', display: 'flex', justifyContent: 'center', marginTop: 7, flexDirection: 'column' }}>
        <h2>Login Page</h2>
        <FormControl sx={{ width: '100%' }}>
          <TextField id='email' label='Email address' variant='outlined' sx={{ marginBottom: '20px' }} />
          <TextField
            id='password'
            type='password   '
            label='Password'
            variant='outlined'
            sx={{ marginBottom: '20px' }}
          />
          <Button variant='contained'>Login</Button>
        </FormControl>
      </Box>
    </>
  );
}

export default LoginPage;
