import React from 'react'
import Link from 'next/link'

import {
  Grid,
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';

import {
  Code
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box >
      <Grid
        container
        sx={{ background: '#26262F', py: 1, borderRadius: "0px 0px 24px 24px", border: "1px #353542 solid" }}
      >
        <Grid
          xs={4}
          item
          display="flex"
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <Code sx={{ fontSize: '40px', pl: 2, color: "#61DBFB" }}></Code>
            <Typography
              variant="h4"
              component="h2"
              textAlign="center"
              fontWeight="medium"
              sx={{ color: "white", pl: 1 }}
            >

              Code:it!
            </Typography>
          </div>


        </Grid>
        <Grid
          xs={4}
          item
          display="flex"
          justifyContent="space-evenly"
        >
          <Link href="Feed">
            <Button variant="text" sx={{ color: "white" }}>Explora</Button>
          </Link>
          <Link href="CreateProject">
            <Button variant="text" sx={{ color: "white" }}>Construye</Button>
          </Link>
          <Link href="InviChat">
            <Button variant="text" sx={{ color: "white" }}>Conecta</Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="end"
        >
          xd
        </Grid>

      </Grid>
    </Box>

  )
}

export default Navbar
