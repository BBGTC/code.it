import { trpcNext } from 'utils/trpcNext';
import { Grid, Typography, Paper, Button } from '@mui/material';

import character_1 from 'public/img/character_1.png';
import { Box } from '@mui/system';

export default function IndexPage() {

  const handleSubmit = () => { }

  return (
    <Grid container px={10}>
      <Grid item xs={6}>
        <Box marginX="auto" display="flex">
          <img src={character_1.src} alt="something" width={500} style={{ margin: "inherit" }} />
        </Box>
      </Grid>
      <Grid item xs={6} padding={5} height={"100%"} marginY="auto" >
        <div style={{ textAlign: "center" }}>
          <Typography variant="h1" color="white" fontWeight={700} >
            Code.it
          </Typography>

          <Paper elevation={5} style={{
            backgroundColor: "#26262F",
            padding: 40,
            borderRadius: 10
          }} >
            <Typography fontSize={30} fontWeight={700} color="white" marginY={5}>
              Encuentra colaboradores para tus proyectos personales, a unos cuantos clicks.
            </Typography>
            <hr style={{ borderColor: "rgba(255,92,0,0.75)", border: "1 px solid", boxShadow: "10px 10px 13px 0px rgba(255,92,0,0.75)" }} />
            <Typography marginTop={5} fontSize={18} fontWeight={300} color="white">
              Mejora tu currículum colaborando en proyectos reales con personas que tienen el mismo objetivo que tú.
              Adquiere nuevas habilidades rodeándote de ingenieros de todo el mundo que quieran colaborar.
            </Typography>

            <Button variant="contained" color="warning" fullWidth style={{
              boxShadow: "10px 10px 47px 0px rgba(255,92,0,0.75)",
              marginTop: 40
            }}>
              Crea tu cuenta
            </Button>

            <Typography color="white" style={{ margin: 10 }}>
              o
            </Typography>

            <Button fullWidth color="info">
              Inicia sesión
            </Button>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )

};
