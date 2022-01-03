import { useContext } from "react";
import { Box, Grid, Paper, Typography, CircularProgress } from "@mui/material";

import { Context } from "../../context";
import { useFetchData } from "../../utils/customHooks";
import { formatDate } from "../../utils/constants";

export const Launches = () => {
  const [path] = useContext(Context);
  const [launches, loadingLaunches] = useFetchData(path);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        p: 2,
      }}
    >
      <Typography component="h2" variant="h4" mb={3}>
        {path === "passados" ? "Lançamentos Anteriores" : "Lançamentos Futuros"}
      </Typography>
      {loadingLaunches ? (
        <Box sx={{ display: "flex", pl: 1, pb: 1, mb: 3 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", pl: 8, pr: 8 }}
        >
          {launches?.map((launch, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 1,
                  margin: "auto",
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item pr={3}>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    align="center"
                  >
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
                  <Typography
                    component="div"
                    variant="subtitle2"
                    align="center"
                  >
                    Data
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    align="center"
                  >
                    {formatDate(launch?.date_local)}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
