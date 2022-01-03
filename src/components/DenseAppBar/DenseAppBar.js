import { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { RenderMenu } from '../RenderMenu/RenderMenu'

export const DenseAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null)    

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="menu"
          aria-haspopup="true"
          sx={{ mr: 2 }}
          onClick={(event) => { setAnchorEl(event.currentTarget) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="h1">
          SpaceX
        </Typography>
      </Toolbar>
      <RenderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </AppBar>
  )
}
