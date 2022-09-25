import Navbar from 'components/Navbar'
import React from 'react'

import dummyData from '../../public/dummy.json'

import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

const One = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ background: '#26262F', borderRadius: "24px", border: "1px #353542 solid", padding: "20px" }}>
          <Typography variant="h4">Sobre el proyecto</Typography>
          <Typography>{dummyData.projects[0].description}</Typography>
        </div>
      </div>
    </>
  )
}

export default One
