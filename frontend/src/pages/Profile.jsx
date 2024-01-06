import React from 'react'
import {
    Box, 
    Grid,
    Paper
} from '@mui/material'

import '../styles/Profile.css'
import ProfileCard from './Components/Profile/ProfileCard'
import Post from './Components/Profile/Post'


function Profile() {
  return (
    <Box >
        <Grid 
            container
            justifyContent='center'
            spacing={3}
        >
            <Grid item xs={5} >
                <Box>
                    <Post title={"Hurrry, i'm too late"} content="Pourquoi tu es toujours en retard, Je ne suis pas le seul a ne pas vouloir la salutation de tous" />
                </Box>
            </Grid>
            <Grid item xs={3} >
                <Box component='section'>
                    <ProfileCard firstName={'Kayinda'} lastName={'Immaculé'} category={'ChildCare'}/>
                </Box>
            </Grid>
        </Grid> 
    </Box>
  )
}

export default Profile
