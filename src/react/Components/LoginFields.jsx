import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, TextField, IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

// Von MUI Dokumentation übernommen Textfield / Password Fields

const LoginFields = ({ onChange }) => {
  const [loginName, setLoginName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (event) => {
    event.preventDefault()
  }

  const handleLoginChange = ({ target: { value } }) => {
    setLoginName(value)
    onChange({ username: value, password })
  }

  const handlePasswordChange = (e) => {
    const { value } = e.target
    setPassword(value)
    onChange({ username: loginName, password: value })
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItemns: 'center',
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Login-Name" variant="outlined" value={loginName} onChange={handleLoginChange} />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={showPassword ? 'hide the password' : 'display the password'}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
              }
          label="Password"
        />
      </FormControl>
    </Box>
  )
}
LoginFields.propTypes = {
  onChange: PropTypes.func.isRequired
}
export default LoginFields
