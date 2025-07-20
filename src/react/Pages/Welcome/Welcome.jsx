import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack, Typography, Alert } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'
import BackButton from '../../Components/Buttons/BackButton'
import LoginFields from '../../Components/LoginFields'

// Zum Abgleichen mit den eingegebenen Logindaten
const users = {
  hugoe2010: { password: '12345', displayName: 'Hugo' },
  aliciab2012: { password: 'ballett', displayName: 'Alicia' }
}

const Welcome = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState(null)

  const handleLogin = () => {
    const { username, password } = credentials
    const user = users[username]

    if (!user) {
      setError('Benutzer nicht gefunden!')
      return
    }
    if (user.password !== password) {
      setError('Falsches Passwort!')
      return
    }
    localStorage.setItem('displayName', user.displayName)
    navigate('/home')
  }

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

      {error && <Alert severity="error">{error}</Alert>}

      <LoginFields onChange={setCredentials} />
      <BackButton
        variant="contained"
        startIcon={<BackIcon />}
        onClick={handleLogin}
        // onClick={() => navigate('/home')}
      >
        START
      </BackButton>
    </Stack>
  )
}

export default Welcome
