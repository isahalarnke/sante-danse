import React from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'

const getColor = (daysLeft) => {
  const percent = daysLeft / 30
  if (percent > 0.6) return 'success'
  if (percent > 0.2) return 'warning'
  return 'error'
}

const TagesCountdown = ({ daysLeft }) => {
  const progress = (daysLeft / 30) * 100
  const color = getColor(daysLeft)

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="body2" color={color} sx={{ mt: 1 }}>
        {`Noch ${daysLeft} ${daysLeft === 1 ? 'Tag' : 'Tage'} bis zum Ende des Countdowns`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        color={color}
        sx={{ height: 10, borderRadius: 5 }}
      />
    </Box>
  )
}

export default TagesCountdown
