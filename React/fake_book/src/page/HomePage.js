import { ButtonGroup, IconButton, Badge, TextareaAutosize, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import React from 'react';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          backgroundColor: '#a7ffeb',
          width: '100%',
          boxShadow: '6px 6px 10px 2px rgba(0,0,0,0.19 )',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: 5,
        }}
      >
        <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}>
          <img
            src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
            alt='profile'
            style={{ width: '25px', height: '25px', objectFit: 'cover', borderRadius: '50%' }}
          />
          <p style={{ marginLeft: '10px' }}>Chanwit Pansila</p>
        </div>

        <TextareaAutosize
          minRows={5}
          placeholder='Create Post'
          style={{ width: '85%', margin: '15px 10px', resize: 'none', borderRadius: '10px', padding: '3px 10px' }}
        />

        <div style={{ display: 'flex', justifyContent: 'center', width: '90%', marginBottom: '15px' }}>
          <Button variant='contained' style={{ width: '100%', borderRadius: '10px' }}>
            Post
          </Button>
        </div>
      </Box>

      <Box
        sx={{
          backgroundColor: '#a7ffeb',
          width: '100%',
          boxShadow: '6px 6px 10px 2px rgba(0,0,0,0.19 )',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: 5,
        }}
      >
        <div style={{ width: '90%', display: 'flex', alignItems: 'center', borderBottom: '1px solid black' }}>
          <img
            src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
            alt='profile'
            style={{ width: '25px', height: '25px', objectFit: 'cover', borderRadius: '50%' }}
          />
          <p style={{ marginLeft: '10px' }}>Chanwit Pansila</p>
        </div>

        <div style={{ width: '90%', margin: '10px' }}>
          <p>
            The best preparation for tomorrow is doing your best today. <br />- การเตรียมความพร้อมสำหรับวันพรุ่งนี้
            ก็คือการทำวันนี้ให้ดีที่สุด
          </p>
        </div>

        <img
          style={{ objectFit: 'cover', width: '100%' }}
          src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
          alt={`test`}
        />

        <div style={{ width: '100%', borderBottom: '1px solid ' }}>
          <ButtonGroup variant='text' sx={{ width: '100%', marginTop: '5px' }}>
            <IconButton sx={{ flexGrow: 1 }}>
              <Badge badgeContent={17} color='error'>
                <ThumbUpIcon sx={{ color: '#00bcd4' }} />
              </Badge>
            </IconButton>
            <IconButton sx={{ flexGrow: 1 }}>
              <CommentIcon sx={{ color: '#00bcd4' }} />
            </IconButton>
            <IconButton sx={{ flexGrow: 1 }}>
              <ShareIcon sx={{ color: '#00bcd4' }} />
            </IconButton>
          </ButtonGroup>
        </div>

        <div
          style={{
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '10px',
            borderBottom: '1px solid ',
          }}
        >
          <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}>
            <img
              src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
              alt='profile'
              style={{ width: '25px', height: '25px', objectFit: 'cover', borderRadius: '50%' }}
            />
            <p style={{ margin: '0 10px' }}>Harry Potter</p>
          </div>

          <div style={{ width: '90%' }}>
            <p>
              The best preparation for tomorrow is doing your best today. <br />- การเตรียมความพร้อมสำหรับวันพรุ่งนี้
              ก็คือการทำวันนี้ให้ดีที่สุด
            </p>
          </div>
        </div>
        <div
          style={{
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '10px',
            borderBottom: '1px solid ',
          }}
        >
          <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}>
            <img
              src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
              alt='profile'
              style={{ width: '25px', height: '25px', objectFit: 'cover', borderRadius: '50%' }}
            />
            <p style={{ margin: '0 10px' }}>Hermione granger</p>
          </div>

          <div style={{ width: '90%' }}>
            <p>Very Well</p>
          </div>
        </div>

        <div
          style={{
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '10px',
            borderBottom: '1px solid ',
          }}
        >
          <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}>
            <img
              src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
              alt='profile'
              style={{ width: '25px', height: '25px', objectFit: 'cover', borderRadius: '50%' }}
            />
            <p style={{ margin: '0 10px' }}>Ronal wisley</p>
          </div>

          <div style={{ width: '90%' }}>
            <p>
              The best preparation for tomorrow is doing your best today. <br />- การเตรียมความพร้อมสำหรับวันพรุ่งนี้
              ก็คือการทำวันนี้ให้ดีที่สุด
            </p>
          </div>
        </div>

        <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}>
          <img
            src='https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
            alt='profile'
            style={{ width: '25px', height: '25px', objectFit: 'cover', borderRadius: '50%' }}
          />
          <TextareaAutosize
            minRows={1}
            placeholder='Comment'
            style={{ width: '85%', margin: '15px 10px', resize: 'none', borderRadius: '10px', padding: '3px 10px' }}
          />
          <IconButton sx={{ flexGrow: 1 }}>
            <SendIcon sx={{ color: '#00bcd4' }} />
          </IconButton>
        </div>
      </Box>
    </div>
  );
}

export default HomePage;
