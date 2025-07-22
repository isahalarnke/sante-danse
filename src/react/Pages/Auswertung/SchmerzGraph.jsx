import React, { useState, useEffect, useMemo } from 'react'
import { Typography, Box } from '@mui/material'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import PropTypes from 'prop-types'
import { getPainEntries } from '../../../hooks/usePainEntries'

// Benutzerdefinierter Tooltip für das Liniendiagramm
const CustomTooltip = ({ active, payload, label, visiblePart }) => {
  if (active && payload && payload.length) {
    const painEntries = window.painEntries || []
    return (
      <Box sx={{ p: 1 }}>
        <Typography variant="body2">
          <b>Datum:</b>
          <br />
          {label}
        </Typography>
        {payload.map((item) => {
          const entries = painEntries.filter(
            e => e.bodyPart === item.dataKey &&
            new Date(e.date).toISOString().slice(0, 10) === label
          )
          const allMovements = Array.from(new Set(entries.flatMap(e => e.movements || [])))
          if (visiblePart) {
            return (
              <Typography key={item.dataKey} variant="body2" sx={{ mt: 1 }}>
                <b>Bewegung:</b>
                {' '}
                {allMovements.length > 0 ? allMovements.join(', ') : '-'}
              </Typography>
            )
          }
          return (
            <Box key={item.dataKey} sx={{ mt: 1 }}>
              <Typography variant="body2">
                <b>{item.dataKey}</b>
              </Typography>
              <Typography variant="body2">
                <b>Bewegung:</b>
                {' '}
                {allMovements.length > 0 ? allMovements.join(', ') : '-'}
              </Typography>
            </Box>
          )
        })}
      </Box>
    )
  }
  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    dataKey: PropTypes.string,
    value: PropTypes.number
  })),
  label: PropTypes.string,
  visiblePart: PropTypes.string
}

const SchmerzGraph = () => {
  const [painEntries, setPainEntries] = useState([])
  const [visiblePart, setVisiblePart] = useState(null)

  useEffect(() => {
    const loadData = () => {
      const entries = getPainEntries()
      setPainEntries(entries)
      window.painEntries = entries
    }
    loadData()
    window.addEventListener('storage', loadData)
    return () => window.removeEventListener('storage', loadData)
  }, [])

  const { filteredMultiLineData: filteredData, allBodyParts: allBodyPartsSet } = useMemo(() => {
    const allDates = Array.from(new Set(
      painEntries.filter(e => e?.date).map(e => new Date(e.date).toISOString().slice(0, 10))
    )).sort()

    const allBodyPartsInternal = Array.from(new Set(
      painEntries.filter(e => e?.bodyPart).map(e => e.bodyPart)
    ))

    const data = allDates.map(dateStr => {
      const row = { date: dateStr }
      allBodyPartsInternal.forEach(part => {
        const matching = painEntries.filter(
          e => e.bodyPart === part &&
          new Date(e.date).toISOString().slice(0, 10) === dateStr
        )
        row[part] = matching.length
          ? Math.round(matching.reduce((sum, e) => sum + e.pain, 0) / matching.length)
          : null
      })
      return row
    })

    const filtered = data.filter(row => allBodyPartsInternal.some(part => typeof row[part] === 'number'))

    return { filteredMultiLineData: filtered, allBodyParts: allBodyPartsInternal }
  }, [painEntries])

  const hasData = filteredData.length > 0 && allBodyPartsSet.length > 0

  const handleLegendClick = (o) => {
    const part = o.dataKey
    setVisiblePart(prev => (prev === part ? null : part))
  }

  return (
    <Box sx={{ width: '100%' }}>
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
            <XAxis dataKey="date" padding={{ left: 20, right: 20 }} />
            <YAxis
              width={28}
              tickMargin={2}
              domain={[0, 10]}
              allowDecimals={false}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
            <Tooltip
              content={<CustomTooltip visiblePart={visiblePart} />}
              wrapperStyle={{
                maxHeight: 160,
                overflowY: 'auto',
                minWidth: 120,
                pointerEvents: 'auto',
                background: '#fff',
                border: '1px solid #ccc',
                zIndex: 1000
              }}
            />
            <Legend
              onClick={handleLegendClick}
              verticalAlign="bottom"
              align="center"
              height={48}
              wrapperStyle={{
                width: '100%',
                display: 'block',
                whiteSpace: 'nowrap',
                overflowX: 'auto',
                overflowY: 'hidden',
                paddingBottom: 8,
                zIndex: 1
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Box>
  )
}

export default SchmerzGraph
