import React from 'react'

import { Stack } from '@mui/material'

const Home = () => (
  <Stack sx={{ flex: '1 1 auto' }}>
    <h2 style={{ textAlign: 'center' }}>Home Screen Mit Body</h2>
    <Stack
      sx={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 3,
        margin: 0,
        height: 250
      }}
    >
      <h4>Platzhalter für Körper Komponente</h4>
    </Stack>
  </Stack>
)

export default Home
