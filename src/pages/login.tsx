import { Grid, Typography, Box, TextField, FormLabel, Button, Link as MuiLink, Paper } from '@mui/material'
import Link from 'next/link';
import github from 'public/img/github.png';
import React, { ChangeEventHandler, useState } from 'react'

const INITIAL_FORM = {
  username: '',
  password: '',
}

const login = () => {

  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <Grid>
        <Box display="flex" justifyContent="center" alignContent="center">
          <Box marginTop={15} width={1000} bgcolor="#26262F" style={{ borderRadius: 30 }} padding={10}>
            <Typography textAlign="center" variant="h3" fontWeight={900} color="white">
              INGRESA A TU CUENTA
            </Typography>
            <form action="">
              <Grid item xs={12} marginY={6}>
                <TextField name="username" label="Nombre de usuario" InputLabelProps={{ style: { color: "white" } }} inputProps={{ style: { color: "white" } }} fullWidth variant="filled" color='info' style={{ color: "white" }} ></TextField>
              </Grid>
              <Grid item xs={12} marginY={6}>
                <TextField name="" type="password" label="Contraseña" InputLabelProps={{ style: { color: "white" } }} inputProps={{ style: { color: "white" } }} fullWidth variant="filled" color='info' style={{ color: "white" }} ></TextField>
              </Grid>


              <Button color="warning" fullWidth variant='contained' style={{ boxShadow: "10px 10px 47px 0px rgba(255,92,0,0.75)" }}>
                Entra!
              </Button>

              <Box marginY={5}>
                <hr style={{ marginTop: 10, borderColor: "#999999", border: "1 px solid #999999" }} />
              </Box>

              <Button fullWidth style={{
                color: "black",
                backgroundColor: "white",
                marginTop: 10
              }}>
                <img height={30} src={github.src} style={{ marginRight: 10 }} />
                Ingresa con GitHub
              </Button>

              <Grid item paddingY={4} display="flex" justifyContent="space-between">
                <MuiLink>
                  Crea tu cuenta
                </MuiLink>
                <MuiLink>
                  Olvidaste tu contraseña?
                </MuiLink>
              </Grid>
              
            </form>
          </Box>
        </Box>
      </Grid>
    </div>
  )
}

export default login