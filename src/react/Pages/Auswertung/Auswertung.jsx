import React from 'react'

import { Outlet } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'

const Auswertung = () => (
  <Stack
    sx={{
      width: '100%',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2
    }}
  >
    <Typography
      variant="h4"
    >
      Auswertung Schmerztagebuch
    </Typography>
    <Stack
      width="100%"
      sx={{
        flexGrow: 1
      }}
    >
      <Outlet />
    </Stack>
  </Stack>
)

export default Auswertung
