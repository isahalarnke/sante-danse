import React, { useState } from 'react'

import { Container } from '@mui/system'
import AlertDialog from './AlertDialog'
import WholeBody from './WholeBody'
import SwitchFrontBack from './SwitchFrontBack'

// Zustand der Körperteile werden hier vom Parent bestimmt
// Selected Body Part evtl. als Kontext speichern?

const BodyClick = () => {
  const [back, setBack] = useState(false)

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
      <SwitchFrontBack
        checked={back}
        onChange={() => setBack(!back)}
        inputProps={{ 'aria-label': 'Front/Back switch' }}
      />
      <WholeBody
        clickedBodyPart={clickedBodyPart}
        setClickedBodyPart={setClickedBodyPart}
        onClick={handleClick}
        isBack={back}
      />
      <AlertDialog
        open={Boolean(clickedBodyPart)} // or clickedBodyPart !== undefined möglich
        onClose={handleDialogClose}
        selectedPart={clickedBodyPart}
        onCloseAccept={handleDialogAccept}
      />
    </Container>
  )
}

export default BodyClick
