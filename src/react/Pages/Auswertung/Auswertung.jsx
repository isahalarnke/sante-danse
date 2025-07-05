import React from 'react'

import { Outlet } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'

const Auswertung = () => (
  <Stack
    sx={{
      width: '100%',
      height: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: 2
    }}
  >
    <Typography
      variant="h4"
    >
      Auswertung Schmerztagebuch
    </Typography>
    <Stack
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Outlet />
    </Stack>
  </Stack>
)

export default Auswertung
