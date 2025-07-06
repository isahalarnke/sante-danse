import React from 'react'

import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import { Button } from '@mui/material'

// VisuallyHiddenInput direkt aus Material UI übernommen
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const UploadStundenplan = () => (
  <Button
    component="label"
    role={undefined}
    variant="contained"
    tabIndex={-1}
    startIcon={<CloudUploadIcon />}
    sx={{
      borderRadius: 2,
      paddingX: 3,
      paddingY: 1,
      textTransform: 'none',
      fontWeight: 'bold'
    }}
  >
    Stundenplan hochladen
    <VisuallyHiddenInput
      type="file"
      onChange={(event) => console.log(event.target.files)}
      multiple
    />
  </Button>
)
export default UploadStundenplan
