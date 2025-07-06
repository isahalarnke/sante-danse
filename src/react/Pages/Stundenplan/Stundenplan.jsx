import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'
import BackButton from '../../Components/Buttons/BackButton'

import UploadStundenplan from '../../Components/UploadStundenplan'

const Stundenplan = () => {
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
        Test Stundenplan Button
      </Typography>
      <UploadStundenplan />
      <BackButton
        variant="contained"
        startIcon={<BackIcon />}
        onClick={() => navigate('/home')}
      >
        Zurück
      </BackButton>
    </Stack>
  )
}

export default Stundenplan
