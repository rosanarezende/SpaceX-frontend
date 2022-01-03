import { useContext } from 'react'
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from '@mui/material'

import { Context } from '../../context'
import { useFetchData } from '../../utils/customHooks'
import { LaunchCard } from '../../components'

export const Home = () => {
  const [lastLaunch, loadingLastLaunch] = useFetchData('ultimo')
  const [nextLaunch, loadingNextLaunch] = useFetchData('proximo')
  const [, setPath] = useContext(Context)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 2 }}>
      <Typography component="h2" variant="h3" mb={3}>
        Lançamentos
      </Typography>

      <Box sx={{ display: 'flex', pl: 1, pb: 1, mb: 3 }}>
        <Button variant="contained" color="inherit" sx={{ mr: 2 }} component={Link} to="/launches" onClick={() => setPath("passados")}>
          Anteriores
        </Button>

        <Button variant="contained" color="inherit" component={Link} to="/launches" onClick={() => setPath("futuros")}>
          Futuros
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
        <LaunchCard launch={lastLaunch} loading={loadingLastLaunch} title="Lançamento anterior" />
        <LaunchCard launch={nextLaunch} loading={loadingNextLaunch} title="Próximo lançamento" />
      </Grid>
    </Box>
  )
}
