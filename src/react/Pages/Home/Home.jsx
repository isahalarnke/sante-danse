import React from 'react'
import { Stack, Container } from '@mui/material'

import BodyClick from '../../Components/BodyClick'

const Home = () => (
  <Stack
    flex="1 1 auto"
    justifyContent="center"
    alignItems="center"
    spacing={4}
    sx={{ padding: 2 }}
  >
    <Container>
      <BodyClick />
    </Container>
  </Stack>
)

export default Home
