'use client';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

function About() {
  return (
    <div id="aboutPage">
      <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold' }} align="center" variant="h2">
        About POWOW
      </Typography>
      <Typography sx={{ color: '#FFFFFF', mb: 2 }} align="center" variant="h4">
        Online Chat Service
      </Typography>
      <Typography sx={{ color: '#FFFFFF' }} align="left" variant="h6">
        POWOW introduces users to an all new experience for chatting across the web. Combining popular features like
        Zoom`&apos;`s room creation to Omegles randomized public chatting feature, we bring it all together for immerse
        conversations. POWOW allows you to either join an pre-existing room via a room code. Create your own unique chat
        room in a simple input. And join the public chat room whenever your feeling bored.
      </Typography>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Card sx={{ m: 10, textDecoration: 'none', bgcolor: '#10131F' }}>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: 3, mt: 5, ml: 5, mr: 5 }}>
            <CardContent>
              <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold' }} align="center" variant="h2">
                About POWOW
              </Typography>
              <Typography sx={{ color: '#FFFFFF', mb: 2 }} align="center" variant="h4">
                Online Chat Service
              </Typography>
              <Typography sx={{ color: '#FFFFFF' }} align="left" variant="h6">
                POWOW introduces users to an all new experience for chatting across the web. Combining popular features
                like Zoom`&apos;`s room creation to Omegles randomized public chatting feature, we bring it all together
                for immerse conversations. POWOW allows you to either join an pre-existing room via a room code. Create
                your own unique chat room in a simple input. And join the public chat room whenever your feeling bored.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Stack>
    </div>
  );
}
export default About;
