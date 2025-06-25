import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Stundenplan from './Pages/Stundenplan/Stundenplan'
import Auswertung from './Pages/Auswertung/Auswertung'
import ProfileOverview from './Pages/Auswertung/ProfileOverview'
import ProfileSettings from './Pages/Auswertung/ProfileSettings'

import Error404 from './Pages/Error404'

const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/Auswertung" element={<Auswertung />}>
      <Route path="" element={<ProfileOverview />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Route>
    <Route path="/stundenplan" element={<Stundenplan />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
