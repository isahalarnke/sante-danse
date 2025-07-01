import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Welcome from './Pages/Welcome/Welcome'
import Home from './Pages/Home/Home'
import Stundenplan from './Pages/Stundenplan/Stundenplan'
import Auswertung from './Pages/Auswertung/Auswertung'
import AuswertungStart from './Pages/Auswertung/AuswertungStart'
import MedTeamBestätigung from './Pages/Auswertung/MedTeamBestätigung'

import Error404 from './Pages/Error404'
import AppLayout from './AppLayout'

const AppRoutes = () => (
  <Routes>
    {/* Public Landing Page */}
    <Route path="/" element={<Welcome />} />

    {/* AppLayout für "echte" Appseiten */}
    <Route path="/" element={<AppLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="stundenplan" element={<Stundenplan />} />
      <Route path="auswertung" element={<Auswertung />}>
        <Route index element={<AuswertungStart />} />
        <Route path="medteam" element={<MedTeamBestätigung />} />
      </Route>
    </Route>

    {/* Fallback */}
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
