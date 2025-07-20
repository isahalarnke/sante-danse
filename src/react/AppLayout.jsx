import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Paper,
  Stack,
  Typography,
  Box,
  AppBar,
  Toolbar
} from '@mui/material'

import {
  CalendarMonth as KalenderIcon,
  AccessibilityNew as HomeIcon,
  Leaderboard as AuswertungIcon
} from '@mui/icons-material'

import AppLogo from '../assets/AppLogo.png'
import AppRoutes from './AppRoutes'

const borderRadius = 6

const AppLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  let navigationIndex = 0
  if (location.pathname.startsWith('/home')) navigationIndex = 1
  if (location.pathname.startsWith('/schmerzskala')) navigationIndex = 1
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
            <AppBar
              position="static"
              elevation={1}
              sx={{
                backgroundColor: '#c7bbeaff',
                color: '#333'
              }}
            >
              <Toolbar
                sx={{
                  justifyContent: 'space-between',
                  maxHeight: 64,
                  px: 2
                }}
              >
                <Typography
                  variant="h6"
                >
                  Hallo,
                  {' '}
                  {localStorage.getItem('displayName')}
                </Typography>

                <Box
                  component="img"
                  src={AppLogo}
                  alt="App Logo"
                  sx={{ height: 80, width: 80 }}
                />
              </Toolbar>
            </AppBar>

            <AppRoutes />
            <BottomNavigation
              showLabels
              value={navigationIndex}
              sx={{ width: '100%' }}
            >
              <BottomNavigationAction
                label="Stundenplan"
                icon={<KalenderIcon />}
                onClick={() => navigate('/stundenplan')}
              />
              <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                onClick={() => navigate('/home')}
              />
              <BottomNavigationAction
                label="Auswertung"
                icon={<AuswertungIcon />}
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
