import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTitle,
  Box,
  IconButton,
  Typography
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import QrScanner from '../../Components/QrScanner'

const QrVerifyDialog = ({ open, onClose }) => {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (open) {
      setStatus('idle')
    }
  }, [open])

  const handleClose = () => {
    setStatus('idle')
    onClose()
  }

  const getDialogTitle = () => {
    switch (status) {
      case 'success':
        return 'Verifizierung erfolgreich'
      case 'error':
        return 'QR‑Code nicht erkannt'
      default:
        return 'QR‑Code scannen'
    }
  }

  const getBackgroundColor = () => {
    switch (status) {
      case 'success':
        return '#e6f9ec'
      case 'error':
        return '#fdecea'
      default:
        return 'background.paper'
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          width: '90vw',
          maxWidth: 320,
          borderRadius: 3,
          bgcolor: getBackgroundColor()
        }
      }}
    >
      <DialogTitle sx={{ pr: 5 }}>
        {getDialogTitle()}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box
        sx={{
          px: 3,
          pb: 3,
          pt: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 2,
          minHeight: 350,
          boxSizing: 'border-box'
        }}
      >
        {(status === 'success' || status === 'error') && (
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}
          >
            {status === 'success' ? (
              <>
                <CheckCircleIcon sx={{ fontSize: 60, color: 'green' }} />
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Dein Eintrag wurde bestätigt!
                </Typography>
              </>
            ) : (
              <>
                <CancelIcon sx={{ fontSize: 60, color: 'red' }} />
                <Typography variant="body2" color="text.secondary">
                  QR Code konnte nicht verifiziert werden.
                </Typography>
              </>
            )}
          </Box>
        )}
        {status === 'idle' && (
          <Typography variant="body2" color="text.secondary">
            Bitte halte den QR‑Code vor die Kamera.
          </Typography>
        )}

        <Box
          sx={{
            width: 275,
            height: 205,
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: status === 'idle' ? '#000' : 'transparent',
            border: status === 'idle'
              ? '1px solid rgba(255,255,255,0.4)'
              : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {status === 'idle' ? (
            <QrScanner
              onScanSuccess={() => setStatus('success')}
              onError={() => setStatus('error')}
            />
          ) : (
            <Box sx={{ width: '100%', height: '100%' }} />
          )}
        </Box>
      </Box>
    </Dialog>
  )
}

export default QrVerifyDialog
