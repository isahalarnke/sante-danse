import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Checkbox, FormControlLabel, Button, Stack, Slider } from '@mui/material'

const MOVEMENTS = [
  { label: 'Sprünge', value: 'spruenge' },
  { label: 'Spitze', value: 'spitze' },
  { label: 'langsame Bewegung', value: 'langsam' },
  { label: 'schnelle Bewegung', value: 'schnell' }
]

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

const Schmerzskala = ({ onCancel, onSubmit }) => {
  const [selected, setSelected] = useState([])
  const [pain, setPain] = useState(0)

  const handleChange = (value) => {
    setSelected(prev => (prev.includes(value)
      ? prev.filter(v => v !== value)
      : [...prev, value]))
  }

  const handleCancel = () => {
    if (onCancel) onCancel()
  }

  const handleSubmit = () => {
    if (onSubmit) onSubmit({ pain, movements: selected })
  }

  return (
    <Stack
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', height: '100%', padding: 2 }}
    >
      <Box sx={{ width: '100%', maxWidth: 350 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Schmerzskala
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography align="center" sx={{ mb: 1 }}>
            Schmerzintensität
          </Typography>
          <Slider
            value={pain}
            min={0}
            max={10}
            step={1}
            marks={Array.from({ length: 11 }, (_, i) => ({ value: i, label: String(i) }))}
            onChange={(_, v) => setPain(v)}
            sx={{
              color: getPainColor(pain),
              height: 8
            }}
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
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Abbrechen
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Bestätigen
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}

Schmerzskala.propTypes = {
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func
}

Schmerzskala.defaultProps = {
  onCancel: null,
  onSubmit: null
}

export default Schmerzskala
