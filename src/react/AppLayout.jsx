import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Paper,
  Stack,
  Typography
} from '@mui/material'

import {
  Pets as CatIcon,
  HealthAndSafety as HomeIcon,
  Person4 as ProfileIcon
} from '@mui/icons-material'

import AppLogo from '../assets/favicon.png'
import AppRoutes from './AppRoutes'

const borderRadius = 6

const AppLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  let navigationIndex = 0
  if (location.pathname.startsWith('/home')) navigationIndex = 1
  if (location.pathname.startsWith('/auswertung')) navigationIndex = 2

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: '100%',
        height: '100%',
        paddingTop: theme => theme.spacing(5),
        paddingBottom: theme => theme.spacing(5)
      }}
    >
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={2}
        >
          <img
            src={AppLogo}
            alt="App Logo"
            style={{
              width: '40px',
              height: '40px'
            }}
          />
          <Typography variant="h5">
            SantéDanse
          </Typography>
        </Stack>
        <Paper
          elevation={6}
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 2,
            paddingRight: 1,
            paddingBottom: 2,
            paddingLeft: 1,
            overflow: 'hidden',
            borderRadius: theme => theme.spacing(borderRadius),
            background: theme => theme.palette.grey[900]
          }}
        >
          <Stack
            flex="1 1 auto"
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              overflow: 'hidden',
              borderRadius: theme => theme.spacing(borderRadius),
              background: theme => theme.palette.background.paper
            }}
          >
            <AppRoutes />
            <BottomNavigation
              showLabels
              value={navigationIndex}
              sx={{ width: '100%' }}
            >
              <BottomNavigationAction
                label="Stundenplan"
                icon={<HomeIcon />}
                onClick={() => navigate('/stundenplan')}
              />
              <BottomNavigationAction
                label="Home"
                icon={<CatIcon />}
                onClick={() => navigate('/home')}
              />
              <BottomNavigationAction
                label="Auswertung"
                icon={<ProfileIcon />}
                onClick={() => navigate('/auswertung')}
              />
            </BottomNavigation>
          </Stack>
        </Paper>
      </Container>
    </Stack>
  )
}

export default AppLayout
