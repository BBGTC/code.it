import React from 'react'

import {
  Box,
  Grid,
  Typography

} from '@mui/material';

import {
  Groups,
  Stream
} from '@mui/icons-material';


type CardProps = {
  title: string,
  description: string,
  status: string,
  skills: string[],
  collaborators: number,
  collaboratorsLimit: number,
}

const ProjectCard = ({ title, description, status, skills, collaborators, collaboratorsLimit }: CardProps) => {
  return (
    <Box
      sx={{ backgroundColor: '#353542', borderRadius: "24px", padding: "20px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex" }}>
          <Stream sx={{ color: "white", fontSize: 40, marginRight: 2, alignSelf: "center" }}></Stream>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography color="white" fontSize={28}>{title}</Typography>
            <Typography color="#FF7966" fontSize={14}>{description}</Typography>
          </Box>
        </Box>
        <Typography color="white" fontSize={14}>Tecnologías: {skills.map((skill) => skill).join(", ")}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Groups sx={{ color: "white", marginRight: 1 }}></Groups>
        <Typography color="white">: {collaborators} / {collaboratorsLimit}</Typography>
        <Typography color="white" sx={{ marginLeft: "16px" }}>{status}</Typography>
      </Box>

    </Box>
  )
}

export default ProjectCard
