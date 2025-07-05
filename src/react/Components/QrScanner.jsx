import React, { useEffect } from 'react'
import { Html5Qrcode } from 'html5-qrcode'
import PropTypes from 'prop-types'

const QrScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const scanner = new Html5Qrcode('qr-reader')
    let isScanning = true // 🛡 Flag zum Schutz

    scanner
      .start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          console.log('QR-Code erkannt:', decodedText)

          if (isScanning) {
            isScanning = false
            onScanSuccess(decodedText)

            scanner.stop().then(() => {
              scanner.clear()
            }).catch(err => {
              console.warn('Stop-Fehler:', err)
            })
          }
        },
        (error) => {
          console.warn('Scan-Fehler:', error)
        }
      )
      .catch((err) => {
        console.error('Kamera konnte nicht gestartet werden:', err)
      })

    return () => {
      if (isScanning) {
        scanner.stop().then(() => scanner.clear()).catch(() => {})
        isScanning = false
      }
    }
  }, [onScanSuccess])

  return <div id="qr-reader" style={{ width: '300px' }} />
}

QrScanner.propTypes = {
  onScanSuccess: PropTypes.func.isRequired
}

export default QrScanner
