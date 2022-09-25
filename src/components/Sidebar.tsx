import React from 'react'

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
  Groups,
  Stream,
  Home,
  Code,

} from '@mui/icons-material';

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
            Profile
          </MenuItem>
          <MenuItem>
            <Code></Code>
            Requests
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
