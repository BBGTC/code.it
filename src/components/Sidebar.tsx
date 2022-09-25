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
        sx={{ backgroundColor: "#353542", borderRadius: "0px 24px 24px 0px" }}
      >
        <MenuList sx={{ color: "white" }}>
          <MenuItem>
            <Home></Home>
            <ActiveLink href='Feed'>Feed</ActiveLink>
          </MenuItem>
          <MenuItem>
            <Code></Code>
            <ActiveLink href='Requests'>Requests</ActiveLink>
          </MenuItem>
          <MenuItem>
            <Stream></Stream>
            <ActiveLink href='CreateProject'>Create a Project</ActiveLink>
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
