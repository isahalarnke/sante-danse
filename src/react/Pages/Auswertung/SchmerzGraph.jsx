import React, { useState, useEffect, useMemo } from 'react'
import { Stack, Typography, Box, Card, CardContent } from '@mui/material'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import PropTypes from 'prop-types'
import { getPainEntries } from '../../../hooks/usePainEntries'

// Benutzerdefinierter Tooltip für das Liniendiagramm
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Wir nehmen das erste Payload-Element, um das bodyPart zu bestimmen
    const item = payload[0]
    const painEntries = window.painEntries || []
    // Finde das passende painEntry für dieses Datum und bodyPart
    const entry = painEntries.find(e => e.bodyPart === item.dataKey &&
      new Date(e.date).toISOString().slice(0, 10) === label)
    // Bewegungen als String
    const movements = entry && entry.movements ? entry.movements.join(', ') : '-'
    return (
      <Box sx={{ background: '#fff', border: '1px solid #ccc', p: 1 }}>
        <Typography variant="body2">
          <b>Datum:</b>
          {' '}
          {label}
        </Typography>
        <Typography variant="body2">
          <b>Bewegung:</b>
          {' '}
          {movements}
        </Typography>
      </Box>
    )
  }
  return null
}

// PropTypes für CustomTooltip
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    dataKey: PropTypes.string,
    value: PropTypes.number
  })),
  label: PropTypes.string
}

const SchmerzGraph = () => {
  const [painEntries, setPainEntries] = useState([])
  const [visiblePart, setVisiblePart] = useState(null) // null = alle Linien sichtbar

  // Lade Daten aus localStorage und reagiere auf Änderungen im Storage
  useEffect(() => {
    const loadData = () => {
      setPainEntries(getPainEntries())
      // Speichere painEntries im window für Tooltip-Zugriff
      window.painEntries = getPainEntries()
    }
    loadData()
    const handleStorageChange = () => {
      loadData()
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  // Bereite die Daten für das Multi-Line-Chart auf
  const { filteredMultiLineData: filteredData, allBodyParts: allBodyPartsSet } = useMemo(() => {
    const allDates = Array.from(new Set(
      painEntries
        .filter(entry => entry && entry.date)
        .map(entry => new Date(entry.date).toISOString().slice(0, 10))
    )).sort()
    const allBodyPartsInternal = Array.from(new Set(
      painEntries
        .filter(entry => entry && entry.bodyPart)
        .map(entry => entry.bodyPart)
    ))
    const data = allDates.map(dateStr => {
      const row = { date: dateStr }
      allBodyPartsInternal.forEach(part => {
        const foundEntries = painEntries.filter(
          entry => entry && entry.bodyPart === part && entry.date && new Date(entry.date).toISOString().slice(0, 10) === dateStr
        )
        if (foundEntries.length > 0) {
          row[part] = Math.round(
            foundEntries.reduce((sum, e) => sum + e.pain, 0) / foundEntries.length
          )
        } else {
          row[part] = null
        }
      })
      return row
    })
    const filteredDataInternal = data.filter(row => allBodyPartsInternal.some(part => typeof row[part] === 'number'))
    return { filteredMultiLineData: filteredDataInternal, allBodyParts: allBodyPartsInternal }
  }, [painEntries])

  const hasData = filteredData.length > 0 && allBodyPartsSet.length > 0

  // Handler für Klick auf Legendeneintrag
  const handleLegendClick = (o) => {
    const part = o.dataKey
    setVisiblePart(prev => (prev === part ? null : part))
  }

  return (
    <Stack
      spacing={3}
      sx={{
        p: 3,
        flex: 1,
        height: '100%',
        width: '100%',
        overflowY: 'auto'
      }}
    >
      <Typography variant="h5" gutterBottom>
        Schmerzverlauf nach Körperteil
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
            {!hasData ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
                <Typography variant="body2" color="text.secondary">
                  Keine Daten für Liniendiagramm vorhanden
                </Typography>
              </Box>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={filteredData}>
                  {allBodyPartsSet.map((part, idx) => (
                    (!visiblePart || visiblePart === part) && (
                      <Line
                        key={part}
                        type="monotone"
                        dataKey={part}
                        name={part}
                        stroke={['#ff6b6b', '#1976d2', '#43a047', '#fbc02d', '#8e24aa', '#00897b'][idx % 6]}
                        strokeWidth={2}
                        dot
                        connectNulls
                      />
                    )
                  ))}
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend onClick={handleLegendClick} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </Box>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default SchmerzGraph
