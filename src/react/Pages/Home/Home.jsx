import React, { useState } from 'react'
import { Box, Stack, Typography, Container } from '@mui/material'

import WholeBody from '../../Components/WholeBody'
import AlertDialog from '../../Components/AlertDialog'

const Home = () => {
  const [clickedBodyPart, setClickedBodyPart] = useState(null)

  const handleClick = (bodyPart) => {
    setClickedBodyPart(bodyPart)
  }

  const handleDialogClose = () => {
    setClickedBodyPart(null)
  }

  const handleDialogAccept = () => {
    console.log('Navigiere auf Schmerzskala Seite mit:', clickedBodyPart)
    setClickedBodyPart(null)
    // Hier könntest du z.B. useNavigate verwenden, um weiterzuleiten
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ padding: 2 }}
    >
      <Typography variant="h4">
        Test Test Test
      </Typography>

      <Box
        sx={{
          width: theme => theme.spacing(20),
          height: theme => theme.spacing(20),
          marginBottom: 4
        }}
      />

      <Container>
        <WholeBody
          clickedBodyPart={clickedBodyPart}
          setClickedBodyPart={setClickedBodyPart}
          onClick={handleClick}
        />

        <AlertDialog
          open={Boolean(clickedBodyPart)}
          onClose={handleDialogClose}
          selectedPart={clickedBodyPart}
          onCloseAccept={handleDialogAccept}
        />
      </Container>
    </Stack>
  )
}

export default Home
