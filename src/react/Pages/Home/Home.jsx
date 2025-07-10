import React from 'react'
import { Stack, Typography, Container } from '@mui/material'

import BodyClick from '../../Components/BodyClick'

const Home = () => (
  <Stack
    flex="1 1 auto"
    justifyContent="center"
    alignItems="center"
    spacing={4}
    sx={{ padding: 2 }}
  >
    <Typography variant="h4">
      Körperansicht
    </Typography>

    <Container>
      <BodyClick />
    </Container>
  </Stack>
)

export default Home
