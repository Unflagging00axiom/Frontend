import { Avatar, Box, Button, ButtonBase, Card, CardContent, CardMedia, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
      sx: {
      bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


function ProfileCard({category, firstName, lastName}) {
  return (
    <>
      <Box variant='section' 
        sx={{height: 400, width: 400}}
      
      >
        <div className='profil-card'>
          <div className="photo-de-profil">
            <Stack spacing={3} direction='row' alignItems={'center'} margin={2}>
              <Avatar {...stringAvatar( `${lastName} ${firstName}`)} sx={{width: 60, height: 60}} />
              <Typography variant='body1' component='h4'>
                {`${lastName} ${firstName}`}
              </Typography>
            </Stack>
          </div>
          <div className='infos'>
            <Typography variant='caption' marginBottom={3}>
              {category}
            </Typography>
            <Box componenent='div' alignItems='center' alignItem='center' justifyContent='center' >
              <Button 
                variant='contained' 
                sx={{
                  borderRadius: 5,
                  width: 250,
                  alignSelf: 'center'
                }}
              >
                New Post
              </Button>
            </Box>
          </div>
        </div>
      </Box>
    </>
  )
}

export default ProfileCard
