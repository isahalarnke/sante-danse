import React from 'react'
import PropTypes from 'prop-types'
import { alpha, styled } from '@mui/material/styles'
import { pink } from '@mui/material/colors'
import { Switch } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// PinkSwitch Code direkt aus Material UI übernommen

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    }
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600]
  }
}))

const SwitchFrontBack = ({ checked, onChange }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Typography>Vorne</Typography>
    <PinkSwitch
      checked={checked}
      onChange={onChange}
      slotProps={{ 'aria-label': 'Front/Back switch' }}
    />
    <Typography>Hinten</Typography>
  </Stack>
)

SwitchFrontBack.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SwitchFrontBack
