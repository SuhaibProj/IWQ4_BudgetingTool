import React from 'react'
import { Typography } from '@mui/material'
import { AppBar, Toolbar } from '@mui/material';
import Stack from '@mui/material/Stack';

export const AckBar = () => {
    return (
      <>
        <AppBar position="fixed" color="default" sx={{ 
            top: 'auto', 
            bottom: 0,
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
        }}>
          <Toolbar>
            <Stack direction="row" spacing={3}>
              <Typography>Created by Upland Software Innovation 2022 Q4 Development Team.</Typography>
            </Stack>
          </Toolbar>
        </AppBar>
      </>
    )
}