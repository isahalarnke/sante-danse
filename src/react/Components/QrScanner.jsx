import React, { useEffect } from 'react'
import { Html5Qrcode } from 'html5-qrcode'
import PropTypes from 'prop-types'

const QrScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const scanner = new Html5Qrcode('qr-reader')

    scanner
      .start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          console.log('QR-Code erkannt:', decodedText)
          onScanSuccess(decodedText)
          scanner.stop()
        },
        (error) => {
          console.warn('Scan-Fehler:', error)
        }
      )
      .catch((err) => {
        console.error('Kamera konnte nicht gestartet werden:', err)
      })

    return () => {
      scanner.stop().then(() => scanner.clear())
    }
  }, [onScanSuccess])

  return <div id="qr-reader" style={{ width: '300px' }} />
}
QrScanner.propTypes = {
  onScanSuccess: PropTypes.func.isRequired
}

export default QrScanner
