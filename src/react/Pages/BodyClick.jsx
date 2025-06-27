import React, { useState } from 'react'

import { Container } from '@mui/system'
import { Grid2 as Grid } from '@mui/material'

import AlertDialog from '../Components/AlertDialog'
import WholeBody from '../Components/WholeBody'

// Zustand der Körperteile werden hier vom Parent bestimmt
// Selected Body Part evtl. als Kontext speichern?

const BodyClick = () => {
  const [clickedBodyPart, setClickedBodyPart] = useState()

  const handleClick = (bodyPart) => {
    setClickedBodyPart(bodyPart)
  }
  // Differenzierung zw. Abbrechen und Bestätigen
  const handleDialogClose = () => {
    setClickedBodyPart()
  }
  const handleDialogAccept = () => {
    setClickedBodyPart()
    console.log('Navigiere auf Schmerzskala Seite')
    // Hier auf Schmerzskala View navigieren
  }

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid size={8} offset={1.5}>
          <WholeBody
            clickedBodyPart={clickedBodyPart}
            setClickedBodyPart={setClickedBodyPart}
            onClick={handleClick}
          />
          <AlertDialog
            open={Boolean(clickedBodyPart)} // or clickedBodyPart !== undefined möglich
            onClose={handleDialogClose}
            selectedPart={clickedBodyPart}
            onCloseAccept={handleDialogAccept}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BodyClick
