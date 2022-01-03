import {
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material"

import { formatDate, noImage } from '../../utils/constants'

export const LaunchCard = ({ launch, loading, title }) => {
  
  return (
    <Grid item xs={12} md={5}>
      <Card
        elevation={6}
        sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ height: 180, width: 180, p: 1 }}
                image={launch?.links?.patch?.small || noImage}
                alt={launch?.name}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="subtitle2">
                    Missão
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    pb={1}
                  >
                    {launch?.name}
                  </Typography>

                  <Typography component="div" variant="subtitle2">
                    Número do vôo
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    pb={1}
                  >
                    {launch?.flight_number}
                  </Typography>

                  <Typography component="div" variant="subtitle2">
                    Data
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {formatDate(launch?.date_local)}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
            {launch?.details &&
              <>
                <Typography component="div" variant="subtitle2">
                  Detalhes
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {launch?.details}
                </Typography>
              </>
            }
          </>
        )}
      </Card>
    </Grid>
  )
}
