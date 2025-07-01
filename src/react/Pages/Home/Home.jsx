import React from 'react'

import { Stack } from '@mui/material'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

import useRandomCatNameAsync from '../../../hooks/useRandomCatNameAsync'

const CatNames = () => {
  const { catName, refreshCatName } = useRandomCatNameAsync()

  return (
    <Stack
      sx={{
        flex: ' 1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>Home Screen Mit Body</h2>
      <h4>
        {catName}
      </h4>
      <PrimaryButton
        variant="contained"
        onClick={() => refreshCatName()}
      >
        Primary Button
      </PrimaryButton>
    </Stack>
  )
}

export default CatNames
