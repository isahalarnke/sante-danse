import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Welcome from './Pages/Welcome/Welcome'
import Home from './Pages/Home/Home'
import Stundenplan from './Pages/Stundenplan/Stundenplan'
import AuswertungStart from './Pages/Auswertung/AuswertungStart'
import MedTeamBestätigung from './Pages/Auswertung/MedTeamBestätigung'
import QRErfolg from './Pages/Auswertung/QRErfolg'

import Error404 from './Pages/Error404'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/home" element={<Home />} />
    <Route path="/stundenplan" element={<Stundenplan />} />
    <Route path="/auswertung" element={<AuswertungStart />} />
    <Route path="/auswertung/medteam" element={<MedTeamBestätigung />} />
    <Route path="/auswertung/qrerfolg" element={<QRErfolg />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
