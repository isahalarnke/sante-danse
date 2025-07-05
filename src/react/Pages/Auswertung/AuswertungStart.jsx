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
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
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
