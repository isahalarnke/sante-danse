import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Box } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import BackButton from '../../Components/Buttons/BackButton'
import QrScanner from '../../Components/QrScanner'

const ProfileSettings = () => {
  const navigate = useNavigate()

  return (
    // This is a React Fragment. It is a virtual React Component that will not render a HTML-DOM-Element
    // We need to use it here, because we want to render two Components (Typography, Button) with no parent around them.
    <>
      <QrScanner
        onScanSuccess={(data) => {
          console.log('Gescannt:', data)
        }}
      />
      <Box>
        <PrimaryButton
          variant="contained"
          onClick={() => navigate('/auswertung/medteam')}
        >
          Durch Med Team Bestätigen Lassen
        </PrimaryButton>
      </Box>
      <BackButton
        variant="contained"
        startIcon={<BackIcon />}
        onClick={() => navigate('/auswertung')}
      >
        Zurück
      </BackButton>
    </>
  )
}

export default ProfileSettings
