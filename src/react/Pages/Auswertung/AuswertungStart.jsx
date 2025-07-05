import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack } from '@mui/material'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import BackButton from '../../Components/Buttons/BackButton'

const AuswertungStart = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <BackButton
        variant="contained"
        onClick={() => navigate('/home')}
      >
        Zurück
      </BackButton>
      <PrimaryButton
        variant="contained"
        onClick={() => navigate('/auswertung/medteam')}
      >
        Med Team Bestätigen
      </PrimaryButton>
    </Stack>
  )
}

export default AuswertungStart
