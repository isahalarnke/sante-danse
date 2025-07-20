import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack, Typography, Alert, Container } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'

import BackButton from '../../Components/Buttons/BackButton'
import LoginFields from '../../Components/LoginFields'
import AppLogo from '../../Components/AppLogo'

// Zum Abgleichen mit den eingegebenen Logindaten
const users = {
  hugoe2010: { password: '12345', displayName: 'Hugo' },
  aliciab2012: { password: 'ballett', displayName: 'Alicia' },
  lenny2011: { password: 'tanzen', displayName: 'Lenny' }
}

const Welcome = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState(null)

  const [startScreen, setStartScreen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartScreen(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

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

  if (startScreen) {
    return (
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <AppLogo width={300} height={300} />
      </Container>

    )
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Typography
        variant="h4"
      >
        Willkommen
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
