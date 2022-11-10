import { React, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './screens/AboutUsPage';
import './screens/ExpendituresPage';
import './screens/FuelHelperPage';
import CarFoodLogo from '../assets/CarFood.png'
import styled from '@emotion/styled';

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

      return (
        <>
          <AppBar color={'default'}>
            <Toolbar>
              <Stack direction="row" spacing={3}>
                <img className='carFoodImage' src={CarFoodLogo} alt="Car Food" />
              </Stack>
              <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} centered>
                  <LinkTab icon={<SavingsOutlinedIcon />} label="Expenditures" href='/screens/ExpendituresPage'/>
                  <LinkTab icon={<MapOutlinedIcon />} label="Fuel Helper" href='/screens/FuelHelperPage'/>
                  <LinkTab icon={<InfoOutlinedIcon />} label="About Us" href='/screens/AboutUsPage'/>
                </Tabs>
              </Box>
            </Toolbar>
          </AppBar>
        </>
      )
  }