import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const Add = () => {
  return (
    <div>
          <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="standard-required"
          label="Required-Name"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-disabled"
          label="Required-Genre"
          defaultValue=""
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Required-year"
          variant="standard"
        />
        
      </div>
    </Box>
    </div>
    </div>
  )
}

export default Add