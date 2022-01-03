
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline } from '@mui/material'

import { Context } from './context'
import { Home, NotFound, Launches } from './pages'
import { DenseAppBar } from './components'

export default function App() {
  const [path, setPath] = useState("passados")

  return (
    <Context.Provider value={[path, setPath]}>
      <CssBaseline />
        <BrowserRouter>
        <DenseAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </Context.Provider>
  )
}
