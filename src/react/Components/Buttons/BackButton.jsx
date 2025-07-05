import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const PrimaryButton = ({ children, onClick, disabled }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
    sx={{
      borderRadius: 1,
      paddingX: 1,
      paddingY: 1,
      textTransform: 'none',
      fontWeight: 'bold',
      color: 'red'
    }}
  >
    {children}
  </Button>
)

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default PrimaryButton
