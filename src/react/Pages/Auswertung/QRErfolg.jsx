import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const QRErfolg = () => {
  const navigate = useNavigate()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100%', textAlign: 'center', gap: 3, bgcolor: '#e6f9ec' }}
    >
      <CheckCircleIcon sx={{ fontSize: 60, color: 'green' }} />

      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Verifizierung erfolgreich
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Dein Eintrag wurde erfolgreich durch das Team bestätigt.
      </Typography>

      <PrimaryButton
        variant="contained"
        color="success"
        onClick={() => navigate('/auswertung')}
        sx={{ mt: 2 }}
      >
        Zurück zur Übersicht
      </PrimaryButton>
    </Box>
  )
}

export default QRErfolg
