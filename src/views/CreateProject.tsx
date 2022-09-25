import React, { useState, useEffect, ChangeEvent } from 'react'
import {
  Box,
  Grid,
  Typography,
  Paper,
  Stack,
  MenuList,
  MenuItem,
  TextField,
  Autocomplete,
  Chip,
} from '@mui/material';
import {
  Groups,
  Stream,
  Home,
  Code,

} from '@mui/icons-material';
import Sidebar from '../components/Sidebar';

const INITIAL_PROJECT = {
  title: '',
  description: '',
  skills: [],
  status: 'starting',
  limit: 0,
};

const statuses = ['starting', 'ongoing', 'finished'];


const CreateProject = () => {

  const [project, setProject] = useState(INITIAL_PROJECT);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;

    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  return (
    <Grid
      container
      component="main"
      display="flex"
      sx={{ marginTop: 4 }}>
      <Sidebar />
      <Grid
        item
        xs={8}
      // sx={{ backgroundColor: "#666680", borderRadius: "24px", padding: 4 }}
      >
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="medium"
          sx={{ color: "white", ml: 1 }}
        >Create a new Project!</Typography>
        <form>
          <Grid
            container
          >
            <Grid item xs={12} sx={{ marginBottom: 4 }}>
              <TextField
                name='title'
                label='Título'
                variant='outlined'
                value={project.title}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ style: { color: '#666680' } }}
                InputLabelProps={{ style: { color: '#666680' } }}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 4 }}>
              <TextField
                name='description'
                label='Descripción'
                variant='outlined'
                value={project.description}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ style: { color: '#666680' } }}
                InputLabelProps={{ style: { color: '#666680' } }}
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 4 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={statuses}
                renderInput={(params) => (<TextField
                  {...params}
                  label="Estátus"
                  variant='outlined'
                  InputProps={{ style: { color: '#666680' } }}
                  InputLabelProps={{ style: { color: '#666680' } }}
                />)}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 4 }}>
              <Autocomplete
                multiple
                freeSolo
                options={[]}
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="filled"
                      label={option}
                      color="primary"
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Habilidades"
                    variant='outlined'
                    InputProps={{ ...params.InputProps, style: { color: '#666680' } }}
                    InputLabelProps={{ style: { color: '#666680' } }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </form>
      </Grid >
    </Grid >
  )
}


export default CreateProject
