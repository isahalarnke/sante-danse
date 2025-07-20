import React from 'react'
import { Alert, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const HinweisBox = ({ daysLeft }) => {
  let severity = 'success'
  let message = 'Super! Alles im Grünen Bereich.'

  if (daysLeft <= 10 && daysLeft > 3) {
    severity = 'warning'
    message = 'Aufpassen: Deine nächste Konsultation steht bald an, vereinbare jetzt einen Termin!'
  } else if (daysLeft <= 3) {
    severity = 'error'
    message = 'Achtung! Deine Konsultation ist (bald) überfällig!'
  }

  return (
    <Alert severity={severity} variant="outlined" sx={{ borderRadius: 0.3 }}>
      <Typography variant="body2">{message}</Typography>
    </Alert>
  )
}

HinweisBox.propTypes = {
  daysLeft: PropTypes.number.isRequired
}

export default HinweisBox
