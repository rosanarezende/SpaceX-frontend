import { useContext } from 'react'
import { Box, Grid, Paper, Typography, CircularProgress } from '@mui/material'

import { Context } from '../../context'
import { useFetchData } from '../../utils/customHooks'

export const Launches = () => {
  const [path] = useContext(Context)
  const [launches, loadingLaunches] = useFetchData(path)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 2 }}>
      <Typography component="h2" variant="h4" mb={3}>
        {path === 'passados' ? 'Lançamentos Anteriores' : 'Lançamentos Futuros'}
      </Typography>
      {loadingLaunches
        ? <Box sx={{ display: 'flex', pl: 1, pb: 1, mb: 3 }}><CircularProgress /></Box>
        : (<Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', pl: 10, pr: 10 }}>
          {launches?.map((launch, index) => {
             let launchDate = new Date(launch?.date_local)

             let date =
               launchDate.getDate() +
               "/" +
               parseInt(launchDate.getMonth() + 1) +
               "/" +
               launchDate.getFullYear()

            return (
              <Grid item xs={6} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 1, margin: 'auto', flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                  <Grid item pr={3}>
                    <Typography component="div" variant="subtitle2" align="center">
                      Missão
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      pb={1}
                      align="center"
                    >
                      {launch?.name}
                    </Typography>
                  </Grid>
  
                  <Grid item>
                    <Typography component="div" variant="subtitle2" align="center">
                      Data
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      align="center"
                    >
                      {date}
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
            )

          }
          )}
        </Grid>)
      }
    </Box>
  )
}
