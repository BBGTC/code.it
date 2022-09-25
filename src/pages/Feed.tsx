import React from 'react'
import data from 'public/dummy.json';

import ProjectCard from '../components/ProjectCard';

import {
  Box,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';

import Navbar from 'components/Navbar';

const testSkills = ['Python', 'Java'];
const projects = ['Codemania', 'UberCode', 'Stylus', 'MGH']


const Feed = () => {

  const handleIsInterested = () => {

  }

  return (
    <div style={{ backgroundColor: "#1C1C23" }}>
      <Navbar />
      <Grid
        container
        component="main"
        display="flex"
        sx={{ marginTop: 4 }}>
        <Grid
          item
          xs={1}
        ></Grid>
        <Grid
          item
          xs={10}
          display="flex"
          flexDirection="column"
        >

          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight={300}
            sx={{ color: "white" }}
          >
            Descubre proyectos de otras personas!
          </Typography>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {data["projects"].map((project) => (
              <Box sx={{ p: 2, width: "33%" }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  skills={testSkills}
                  collaborators={3}
                  collaboratorsLimit={5}
                  status="activo"
                  isInterested={true}
                ></ProjectCard>
              </Box>
            ))}
          </div>
        </Grid>

        <Grid
          item
          xs={1}
        ></Grid>

      </Grid>
    </div>
  )
}

export default Feed
