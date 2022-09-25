import Navbar from 'components/Navbar'
import React from 'react'

import dummyData from '../../public/dummy.json'

import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

const Two = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ background: '#26262F', borderRadius: "24px", border: "1px #353542 solid", padding: "20px", width: "70%", marginTop: 40 }}>
          <Typography variant="h4">Sobre el proyecto</Typography>
          <Typography>{dummyData.projects[1].description}</Typography>
          <Typography variant="h4" mt={4}>Sobre Jorge Munguía</Typography>
          <Typography>{dummyData.projects[1].author}</Typography>
          
        </div>
      </div>
    </>
  )
}

export default Two
