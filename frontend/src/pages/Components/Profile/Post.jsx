import { Stack, Typography, FormControl, OutlinedInput, Divider, Chip, Box, Card, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function Post({title, content, category}) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 500 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {category}
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          {content}
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Soft" size="small" />
          <Chip label="Medium" size="small" />
          <Chip label="Hard" size="small" />
        </Stack>
      </Box>
      <Divider light />
      <Box 
        component='form' 
        sx={{ p:2 }}
        
      >
        <FormControl >
          <Stack direction='row' spacing={1} alignItems='flex-end' justifyContent={'space-between'}>
            <OutlinedInput 
              multiline
              rows={4}
              sx={{
                width: 300
              }}
            />
            <Button variant='contained' sx={{ width: 120, borderRadius: 8, height: 40}} >soumettez</Button>
          </Stack>
        </FormControl>
      </Box>
    </Card>
  )
}

export default Post
