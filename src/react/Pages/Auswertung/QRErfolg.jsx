import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const QRErfolg = () => {
  const navigate = useNavigate()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100%', textAlign: 'center', gap: 3 }}
    >
      <Typography variant="h5" gutterBottom>
        Verifizierung erfolgreich
      </Typography>
      <Typography variant="body1">
        Dein Eintrag wurde erfolgreich vom Med-Team bestätigt.
      </Typography>

      <PrimaryButton
        variant="contained"
        onClick={() => navigate('/auswertung')}
      >
        Zurück zur Übersicht
      </PrimaryButton>
    </Box>
  )
}

export default QRErfolg
