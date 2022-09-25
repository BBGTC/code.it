import React from 'react'

import { useRouter } from 'next/router'


import {
  Box,
  Grid,
  Typography,
  Paper,
  Stack,
  MenuList,
  MenuItem
} from '@mui/material';

import {
  Home,
  Code,
  Stream,
} from '@mui/icons-material';
import ActiveLink from './ActiveLink';

const Sidebar = () => {
  return (
    <>
      <Grid
        item
        xs={2}
        sx={{ backgroundColor: "#26262F", borderRadius: "0px 24px 24px 0px", border: "1px #353542 solid" }}
      >
        <MenuList sx={{ color: "white" }}>
          <MenuItem>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
              <Home sx={{color: "#61DBFB"}}/>
              <ActiveLink href='Feed'>Feed</ActiveLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
              <Code sx={{color: "#61DBFB"}} />
              <ActiveLink href='Requests'>Invitaciones</ActiveLink>
            </div>
          </MenuItem>
          <MenuItem>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
              <Stream sx={{color: "#61DBFB"}} />
              <ActiveLink href='CreateProject'>Crea un Proyecto</ActiveLink>
            </div>
          </MenuItem>
        </MenuList>
      </Grid>
      <Grid
        item
        xs={1}
      >
      </Grid>
    </>
  )
}

export default Sidebar
