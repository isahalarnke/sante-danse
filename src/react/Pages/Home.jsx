import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

const Home = () => (
  <Stack
    flex="1 1 auto"
    justifyContent="center"
    alignItems="center"
  >
    <Typography
      variant="h4"
    >
      Test Test Test
    </Typography>
    <Box
      sx={{
        width: theme => theme.spacing(20),
        height: theme => theme.spacing(20),
        marginBottom: 4
      }}
    />
  </Stack>
)

export default Home
