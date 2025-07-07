import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

import Grid from '@mui/material/Grid2'

import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Typography
} from '@mui/material'

import { Container } from '@mui/system'

// VisuallyHiddenInput direkt aus Material UI übernommen
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const UploadStundenplan = () => {
  const [stundenplan, setStundenplan] = useState([])

  // Immer beim ersten Rendern des Stundenplans im LocalStorage nach bereits hochgeladenem Stundenplan nachsehen
  useEffect(() => {
    const saved = localStorage.getItem('stundenplan')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setStundenplan(parsed)
      } catch (e) {
        console.error('Error Stundenplan LocalStorage:', e)
      }
    }
  }, [])

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet)
    console.log(jsonData)
    setStundenplan(jsonData)
    localStorage.setItem('stundenplan', JSON.stringify(jsonData))
  }
  const columns = stundenplan.length > 0 ? Object.keys(stundenplan[0]) : []
  console.log(columns)

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{
          borderRadius: 2,
          paddingX: 3,
          paddingY: 1,
          textTransform: 'none',
          fontWeight: 'bold'
        }}
      >
        Stundenplan hochladen
        <VisuallyHiddenInput
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileUpload}
        />
      </Button>
      { /* Nur bei vorhandenem Stundenplan gerendert */ }
      {stundenplan.length > 0 && (
        <>
          <Typography variant="h8" gutterBottom>
            Stundenplan Übersicht
          </Typography>
          <Container>
            <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
              <Grid sx={{ width: 'fit-content' }}>
                <TableContainer
                  component={Paper}
                  sx={{
                    maxWidth: 600,
                    marginTop: 2,
                    maxHeight: 450
                  }}
                >
                  <Table size="small" sx={{ fontSize: '0.75rem' }}>
                    <TableHead>
                      <TableRow>
                        {columns.map((col) => (
                          <TableCell key={col} sx={{ padding: '5px', fontSize: '0.75rem' }}>
                            <strong>{col}</strong>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {stundenplan.map((row) => (
                        <TableRow key={JSON.stringify(row)}>
                          {columns.map((col) => (
                            <TableCell key={col} sx={{ padding: '5px', fontSize: '0.75rem' }}>
                              {row[col]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Container>

        </>
      )}
    </>
  )
}
export default UploadStundenplan
