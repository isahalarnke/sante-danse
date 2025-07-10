import React, { useState } from 'react'
import { Box, Typography, Checkbox, FormControlLabel, Button, Stack, Slider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addPainEntry } from '../../../hooks/usePainEntries'

const MOVEMENTS = [
  { label: 'Sprünge', value: 'spruenge' },
  { label: 'Spitze', value: 'spitze' },
  { label: 'langsame Bewegung', value: 'langsam' },
  { label: 'schnelle Bewegung', value: 'schnell' }
]

// Farbverlauf für den Slider je nach Schmerzintensität
const getPainColor = (value) => {
  if (value <= 5) {
    const r = Math.round((value / 5) * 255)
    const g = 200
    return `rgb(${r},${g},0)`
  }
  const r = 255
  const g = Math.round(200 - ((value - 5) / 5) * 200)
  return `rgb(${r},${g},0)`
}

const Schmerzskala = () => {
  const [selected, setSelected] = useState([])
  const [pain, setPain] = useState(0)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const navigate = useNavigate()

  // Auswahl der Bewegungen toggeln
  const handleChange = (value) => {
    setSelected(prev => (prev.includes(value)
      ? prev.filter(v => v !== value)
      : [...prev, value]))
  }

  // Abbrechen: Zurück zur vorherigen Seite
  const handleCancel = () => {
    navigate(-1)
  }

  // Speichern des Eintrags und Navigation nach Home
  const handleSubmit = () => {
    const entry = {
      bodyPart: localStorage.getItem('clickedBodyPart'),
      pain,
      movements: selected,
      date: new Date().toISOString()
    }
    addPainEntry(entry)
    setOpenSnackbar(true)
    setTimeout(() => {
      setOpenSnackbar(false)
      navigate('/home')
    }, 1200)
  }

  return (
    <Stack flex="1 1 auto" justifyContent="center" alignItems="center" sx={{ width: '100%', height: '100%', padding: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 350 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Schmerzskala
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography align="center" sx={{ mb: 1 }}>
            Schmerzintensität von
            {' '}
            <strong>{localStorage.getItem('clickedBodyPart')}</strong>
          </Typography>
          <Slider
            value={pain}
            min={0}
            max={10}
            step={1}
            marks={Array.from({ length: 11 }, (_, i) => ({ value: i, label: String(i) }))}
            onChange={(_, v) => setPain(v)}
            sx={{ color: getPainColor(pain), height: 8 }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="caption" color="text.secondary">kein Schmerz</Typography>
            <Typography variant="caption" color="text.secondary">stärkster vorstellbarer Schmerz</Typography>
          </Stack>
        </Box>
        <Stack spacing={1}>
          {MOVEMENTS.map(mov => (
            <FormControlLabel
              key={mov.value}
              control={
                <Checkbox
                  checked={selected.includes(mov.value)}
                  onChange={() => handleChange(mov.value)}
                />
              }
              label={mov.label}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="space-between" mt={3}>
          <Button variant="outlined" color="primary" onClick={handleCancel}>
            Abbrechen
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Bestätigen
          </Button>
        </Stack>
      </Box>
      {openSnackbar && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff',
            color: '#333',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            padding: '24px 32px',
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 220
          }}
        >
          <span style={{ fontSize: 40, color: '#4caf50', marginBottom: 8 }}>✔️</span>
          <div style={{ fontWeight: 500, fontSize: 18 }}>Eintrag gespeichert!</div>
        </div>
      )}
    </Stack>
  )
}

export default Schmerzskala
