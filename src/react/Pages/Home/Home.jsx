import React from 'react'
import { Stack, Typography, Container } from '@mui/material'

import BodyClick from '../../Components/BodyClick'

const Home = () => {
  const displayName = localStorage.getItem('displayName')

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ padding: 2 }}
    >
      <Typography variant="h5">
        Körperansicht von
        {' '}
        {displayName}
      </Typography>

      <Container>
        <BodyClick />
      </Container>
    </Stack>
  )
}

export default Home
