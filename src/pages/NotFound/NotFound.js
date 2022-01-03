import { Box, Typography } from '@mui/material'

export const NotFound = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 5 }}>
      <Typography component="h3" variant="h4" mb={3}>
        Página Não Encontrada
      </Typography>
    </Box>
  )
}
