import React, { useEffect, useState } from 'react'
import { Html5Qrcode } from 'html5-qrcode'
import PropTypes from 'prop-types'

const expectedQRCode = 'ERFOLGREICH VERIFIZIERT'

const QrScanner = ({ onScanSuccess }) => {
  const [showInvalidPopup, setShowInvalidPopup] = useState(false)
  useEffect(() => {
    const scanner = new Html5Qrcode('qr-reader')
    let isScanning = true // 🛡 Flag zum Schutz

    scanner
      .start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          console.log('QR-Code erkannt:', decodedText)

          if (isScanning && decodedText === expectedQRCode) {
            isScanning = false
            onScanSuccess(decodedText)

            scanner.stop().then(() => {
              scanner.clear()
            }).catch(err => {
              console.warn('Stop-Fehler:', err)
            })
          } else if (isScanning) {
            setShowInvalidPopup(true)
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

  return (
    <div style={{ position: 'relative' }}>
      <div id="qr-reader" style={{ width: '300px' }} />

      {showInvalidPopup && (
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '20px',
          backgroundColor: '#fff',
          border: '2px solid red',
          borderRadius: '10px',
          zIndex: 10,
          textAlign: 'center'
        }}
        >
          <p>Ungültiger QR-Code erkannt!</p>
          <button type="button" onClick={() => setShowInvalidPopup(false)}>Schließen</button>
        </div>
      )}
    </div>
  )
}

QrScanner.propTypes = {
  onScanSuccess: PropTypes.func.isRequired
}

export default QrScanner
