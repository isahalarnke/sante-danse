import React from 'react'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const AlertDialog = ({ open, onClose, selectedPart, onCloseAccept }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      Schmerzeintrag hinzufügen?
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Möchtest du einen Schmerzeintrag hinzufügen für
        {' '}
        <strong>{selectedPart}</strong>
        ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Abbrechen</Button>
      <Button onClick={onCloseAccept} autoFocus>Bestätigen</Button>
    </DialogActions>
  </Dialog>
)
AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedPart: PropTypes.string,
  onCloseAccept: PropTypes.func.isRequired
}
export default AlertDialog
