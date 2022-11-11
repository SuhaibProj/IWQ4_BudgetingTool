import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CarFoodLogo from '../../assets/CarFood.png';

export let NavBar = () => {
  const [value, setValue] = React.useState(0);

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
              <Tab icon={<MapOutlinedIcon />} label="Fuel Helper" href={'/FuelHelper'}/>
              <Tab icon={<SavingsOutlinedIcon />} label="Expenditures" href={'/Expenditures'}/>
              <Tab icon={<InfoOutlinedIcon />} label="About Us" href={'/AboutUs'}/>
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}