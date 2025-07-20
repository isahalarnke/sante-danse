import React, { useEffect, useRef } from 'react'
import { Html5Qrcode, Html5QrcodeState } from 'html5-qrcode'
import PropTypes from 'prop-types'

const expectedQRCode = 'ERFOLGREICH VERIFIZIERT'

const QrScanner = ({ onScanSuccess, onError }) => {
  const readerId = useRef(`qr-reader-${crypto.randomUUID()}`)
  const scannerRef = useRef(null)

  useEffect(() => {
    const scanner = new Html5Qrcode(readerId.current)
    scannerRef.current = scanner

    let hasStopped = false

    const safeStop = async () => {
      if (hasStopped) return
      hasStopped = true
      if (
        scanner.getState() === Html5QrcodeState.SCANNING ||
        scanner.getState() === Html5QrcodeState.PAUSED
      ) {
        await scanner.stop()
      }
      await scanner.clear()
    }

    scanner
      .start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: 250 },
        async (decodedText) => {
          await safeStop()
          if (decodedText === expectedQRCode) {
            onScanSuccess(decodedText)
          } else {
            onError(decodedText)
          }
        },
        (error) => console.warn('Scan‑Fehler:', error)
      )
      .catch((err) => {
        console.error('Kamera konnte nicht gestartet werden:', err)
        onError(err)
      })

    return () => {
      safeStop().catch(console.warn)
    }
  }, [onScanSuccess, onError])

  return <div id={readerId.current} style={{ width: '100%', height: '100%' }} />
}

QrScanner.propTypes = {
  onScanSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
}

export default QrScanner
