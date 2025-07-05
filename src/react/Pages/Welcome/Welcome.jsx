import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'
import BackButton from '../../Components/Buttons/BackButton'

// Kommentar

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h4"
      >
        WELCOME
      </Typography>
      <BackButton
        variant="contained"
        startIcon={<BackIcon />}
        onClick={() => navigate('/home')}
      >
        START
      </BackButton>
    </Stack>
  )
}

export default Welcome
