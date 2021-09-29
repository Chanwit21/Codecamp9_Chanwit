import { AppBar, Badge, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ bgcolor: 'info.main' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6' component='div'>
              FakeBook
            </Typography>
            <ButtonGroup variant='string'>
              <IconButton>
                <HomeIcon sx={{ color: '#FFF' }} />
              </IconButton>
              <IconButton>
                <GroupIcon sx={{ color: '#FFF' }} />
              </IconButton>
              <IconButton>
                <Badge badgeContent={17} color='error'>
                  <NotificationsIcon sx={{ color: '#FFF' }} />
                </Badge>
              </IconButton>
            </ButtonGroup>
            <ButtonGroup variant='string'>
              <IconButton>
                <AccountCircleIcon sx={{ color: '#FFF' }} />
              </IconButton>
              <Button color='inherit' href='/'>
                Login
              </Button>
              <Button color='inherit' href='/register'>
                Register
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
