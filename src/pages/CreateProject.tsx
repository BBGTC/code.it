import React, { useState, useEffect, ChangeEvent } from 'react'
import {
  Grid,
  Typography,
  TextField,
  Autocomplete,
  Chip,
  Button,
} from '@mui/material';
import {
  Groups,
  Stream,
  Home,
  Code,
} from '@mui/icons-material';

import Sidebar from '../components/Sidebar';
import Navbar from 'components/Navbar';

const INITIAL_PROJECT = {
  title: '',
  description: '',
  skills: [] as string[],
  status: 'starting',
  limit: 0 as number,
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

  const handleChangeStatus = (status: string) => {

    setProject((prevProject) => ({
      ...prevProject,
      status: status,
    }));
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLInputElement>) => {

    const valueString = (event.target as HTMLInputElement).value;
    const value = parseInt(valueString, 10) || 0;
    


    setProject((prevProject) => ({
      ...prevProject,
      limit: value,
    }));
  }

  const handleChangeSkills = (selectedSkills: string[]) => {

    setProject((prevProject: typeof INITIAL_PROJECT) => ({
      ...prevProject,
      skills: selectedSkills,
    }));
  };

  console.log(project);

  return (
    <div style={{ backgroundColor: "#1C1C23" }}>
      <Navbar />
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
                <TextField
                  name='limit'
                  label='Límite de colaboradores'
                  variant='outlined'
                  value={project.limit}
                  onChange={handleChangeLimit}
                  required
                  fullWidth
                  InputProps={{ style: { color: '#666680' } }}
                  InputLabelProps={{ style: { color: '#666680' } }}
                ></TextField>
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 4 }}>
                <Autocomplete
                  options={statuses}
                  onChange={(_, newValue) => handleChangeStatus(newValue ?? '')}
                  renderInput={(params) => (<TextField
                    {...params}
                    label="Estatus"
                    variant='outlined'
                    InputProps={{ ...params.InputProps, style: { color: '#666680' } }}
                    InputLabelProps={{ style: { color: '#666680' } }}
                  />)}
                />
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 4 }}>
                <Autocomplete
                  multiple
                  freeSolo
                  options={[]}
                  onChange={(_, newValue) => handleChangeSkills(newValue)}
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
              <Grid item xs={12} sx={{ marginBottom: 4 }} textAlign='center'>
                <Button
                  variant='contained'
                  sx={{ backgroundColor: "#FF7966", boxShadow: '0px 5px 5px #FF7966', borderRadius: '100px' }}
                >
                  Crear Proyecto
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid >
      </Grid >
    </div>

  )
}


export default CreateProject;
