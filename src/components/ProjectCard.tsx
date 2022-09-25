import React from 'react'
import {useTheme} from '@mui/material';

import {
  Box,
  Grid,
  Typography,
  Badge,
  Chip
} from '@mui/material';

import {
  Groups,
  Stream,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';


type CardProps = {
  title: string,
  description: string,
  status: string,
  skills: string[],
  collaborators: number,
  collaboratorsLimit: number,
  isInterested: boolean,
}

const ProjectCard = ({ title, description, status, skills, collaborators, collaboratorsLimit, isInterested }: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{ background: '#26262F', borderRadius: "24px", border: "1px #353542 solid", padding: "20px", minHeight: 300 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Grid>

        </Grid>
        <Box justifyContent="space-around" sx={{ display: "flex" }}>
          <Stream sx={{ color: "white", fontSize: 40, marginRight: 2, alignSelf: "center" }}></Stream>
          <Box sx={{ display: "flex", flexDirection: "colum n" }}>
            <Typography color={theme.palette.warning.light} fontSize={28}>{title} </Typography>
          </Box>
          <Chip style={{ margin: 10 }} label={status} color={status === 'activo' ? 'success' : 'primary'} />
        </Box>
        <Box marginY={5}>
            <Typography color="white" fontSize={14}>{description}</Typography>
        </Box>
        <Typography color="white" fontSize={14}>Tecnologías: {skills.map((skill) => <Chip label={skill} color="info" style={{margin: 4}} />)}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Groups sx={{ color: "white", marginRight: 1 }}></Groups>
        <Typography color={theme.palette.info.main}>: {collaborators} / {collaboratorsLimit}</Typography>

      </Box>

    </Box>
  )
}

export default ProjectCard
