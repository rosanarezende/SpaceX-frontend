import { useContext } from 'react'
import { Link } from "react-router-dom"
import { Menu, MenuItem } from '@mui/material'

import { Context } from '../../context'

export const RenderMenu = ({ anchorEl, setAnchorEl }) => {
  const [, setPath] = useContext(Context)
  const isMenuOpen = Boolean(anchorEl)
  
  return (
    <Menu
      id="menu"
      open={isMenuOpen}
      anchorEl={anchorEl}
      onClose={() => { setAnchorEl(null) }}
    >
      <MenuItem
        component={Link}
        to="/"
        onClick={() => { setAnchorEl(null) }}
      >
        Página Inicial
      </MenuItem>
      <MenuItem
        component={Link}
        to="/launches"
        onClick={() => {
          setPath("passados")
          setAnchorEl(null)
        }}>
        Lançamentos Anteriores
      </MenuItem>
      <MenuItem
        component={Link}
        to="/launches"
        onClick={() => {
          setPath("futuros")
          setAnchorEl(null)
        }}>
        Lançamentos Futuros
      </MenuItem>
    </Menu >
  )
}
