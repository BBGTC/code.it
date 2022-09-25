import React from 'react'

import ProjectCard from '../components/ProjectCard';

import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from 'components/Navbar';




const testSkills = ['Python', 'Java'];

const projects = ['Codemania', 'Projectino', 'Don Fortino']


const Feed = () => {
  return (
    <div style={{ backgroundColor: "#1C1C23" }}>
      <Navbar />
      <Grid
        container
        component="main"
        display="flex"
        sx={{ marginTop: 4 }}>

        <Sidebar />
        <Grid
          item
          xs={9}
          display="flex"
          flexDirection="column"
        >

          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="medium"
            sx={{ color: "white" }}
          >
            Discover  peoples's projects
          </Typography>
          {projects.map((project) => (
            <Box sx={{ marginBottom: 4 }}>
              <ProjectCard title={project}
                description='Coding for maniacs'
                skills={testSkills}
                collaborators={3}
                collaboratorsLimit={5}
                status="Activo"
              ></ProjectCard>
            </Box>
          ))}
        </Grid>

      </Grid>
    </div>
  )
}

export default Feed
